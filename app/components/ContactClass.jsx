import React from 'react'
//var ReactDOM = require('react-dom');
//var {Route, Router, Redirect} = require('react-router');

class ContactClass extends React.Component {
  constructor(props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/')
    //this.context.router.replaceWith('/');
    //this.context.history.pushState(null, '/');
    //browserHistory.push('/');
    //this.context.router.transitionTo('/redirectContact');
  }

  render() {
    return (
      <div>
        <h1 className='text-center page-title'>Contact Class</h1>
        <input type="button" onClick={this.goHome} value="Route to Index" />
      </div>
    );
  }
}

//export default withRouter(ContactClass)
module.exports = ContactClass;