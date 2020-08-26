import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import './Contact.css'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      feedback: ""
    }

  }

  //  validate = (email) => {
  //   const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  //   return expression.test(String(email).toLowerCase())
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "stephensayagefullstack@gmail.com",
      feedback: this.state.feedback
    };
    emailjs
      .send("stephensayagefullstack_gmail_com", "stephenTemplate", templateParams, "user_0vSQNpzDyYEtJMtNWSYKu")
      .then(
        function (response) {
          alert('Thanks for reaching out! I will get back to you asap!')
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          err.error("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      feedback: ""
    });
  }

  render() {
    return (
      <div className='form-div' id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <form
          className="form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <input
            id="name"
            name="name"
            onChange={this.handleChange.bind(this)}
            placeholder="Name"
            required
            className="inputs form-field"
            value={this.state.name}
          />
          <br />
          <input
            id="email"
            name="email"
            onChange={this.handleChange.bind(this)}
            placeholder="Email"
            required
            className="inputs form-field"
            value={this.state.email}
          />
          <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleChange.bind(this)}
            placeholder="What would you like to chat about?"
            required
            className="feedback form-field"
            value={this.state.feedback}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="form-button"

            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    )
  }
}

