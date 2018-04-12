var React = require('react');
//require('../styles/main.css');
import styles from '../styles/main.css';

var Contact = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Contact</h1>
      <p className='textStyle'>Call me @+{props.route.someData}
      </p>
    </div>
  );
};

module.exports = Contact;
