// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    // grab the data from the context
    // const {data} = context;

    // the auth'd user
    // const user = context.params.user;

    let resourceId = context.data.resourceId;
    let sectionId = context.params.query._id;

    const { result } = context;
  	const { Model } = context.app.service('sections');

    let section = await Model
      .findOneAndUpdate(
        {_id:sectionId},
        {$push:{resources:resourceId}},
        // {$addToSet:{resources:resourceId}},
        {new:true}
    ).populate('resources').exec();

    context.result = section;
    context.data = section;

    return context;

  };
};
