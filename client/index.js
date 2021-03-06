var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

// app.use(require('./stores/clicks'))
app.use(require('./stores/content'))

app.route('/', require('./views/intro'))
app.route('/home', require('./views/home'))
app.route('/browse', require('./views/browse'))
app.route('/browse/:anchor', require('./views/browse'))
app.route('/submit', require('./views/submit'))
app.route('/notes', require('./views/notes'))
app.route('/notes/:anchor', require('./views/notes'))
app.route('/templates', require('./views/templates'))
app.route('/templates/:anchor', require('./views/templates'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
