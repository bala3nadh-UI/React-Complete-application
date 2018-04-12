var React = require('react');
//require('../styles/main.css');
import styles from '../styles/main.css';

var RedirectContact = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Redirect Contact</h1>
      <p className='textStyle'>Call me @+{props.route.redirectData}
      </p>
    </div>
  );
};

module.exports = RedirectContact;
