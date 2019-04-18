import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="centerLabel">
          <h1>Get in touch 👋🏼</h1>
        </div>
        <form
          className="formContainer"
          action="https://formspree.io/keeganlk.7@gmail.com"
          method="POST"
        >
          <label className="formLabel" htmlFor="name">
            Name:
          </label>
          <input className="formItem" type="text" name="name" />
          <label className="formLabel" htmlFor="name">
            Email:
          </label>
          <input className="formItem" type="email" name="_replyto" />
          <label className="formLabel" htmlFor="name">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="formItem"
            cols="30"
            rows="10"
          />
          <div className="centerLabel">
            <input
              id="submit"
              className="formButton"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
