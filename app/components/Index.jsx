import React from 'react'

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.go2Contact = this.go2Contact.bind(this)
  }

  go2Contact() {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div>
        <h1 className='text-center page-title'>Index</h1>
        <p className='textStyle'>This is my React Project</p>
        <input type="button" onClick={this.go2Contact} value="Route to Contact" />
      </div>
    );
  }
}

//export default withRouter(ContactClass)
module.exports = Index;