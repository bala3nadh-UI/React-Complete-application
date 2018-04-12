var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function(){
    return(

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React App</li>
            <li>
              <IndexLink to="/" activeClassName="active">Index</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
            <li>
              <Link to="/redirectContact" activeClassName="active">Redirect Contact</Link>
            </li>
            <li>
              <Link to="/contactClass" activeClassName="active">Back 2 Index</Link>
            </li>
          </ul>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
