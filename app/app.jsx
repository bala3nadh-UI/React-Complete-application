var React = require('react');
var ReactDOM = require('react-dom');
//Destructuring syntax, each one of the object's attribute is the same as
//including "var Route = require('react-router').Route;""
var {Route, Router, Redirect, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Index = require('Index');
var About = require('About');
var Contact = require('./components/Contact.jsx');
var ContactClass = require('./components/ContactClass.jsx');
var RedirectContact = require('./components/RedirectContact.jsx');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

let contacts = {
	name: "Bala",
	phone: "85267648116",
  redirectPhone: "85256345947"
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact} someData={contacts.phone} redirectData={contacts.redirectPhone}/>
      <Route path="contactClass" component={ContactClass} redirectData={contacts.redirectPhone}/>
      <Route path="redirectContact" component={RedirectContact} redirectData={contacts.redirectPhone}/>
      <IndexRoute component={Index}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
