const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ds = require('@innovaccer/design-system');

const Test = React.createElement(ds.Avatar, {}, 'satyam');

var a = ReactDOMServer.renderToStaticMarkup(Test);

console.log(a);