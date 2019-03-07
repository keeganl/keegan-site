import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <h1>Contact</h1>
        <form className="formContainer" action="https://formspree.io/keeganlk.7@gmail.com" method="POST">
          <input type="text" name="name" />
          <input type="email" name="_replyto" />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Contact;
