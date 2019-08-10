import React, { Component } from "react";
import "../CSS/Contact.css";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <div className="future-box">
        <div className="header">
          <h2>Kontakt</h2>
          <form onSubmit={this.handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Imię"
              onChange={this.handleChange}
              value={this.state.name}
              className="contact-form-input"
            />

            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={this.handleChange}
              value={this.state.mail}
              className="contact-form-input"
            />

            <textarea
              placeholder="Wiadomość"
              name="message"
              type="text"
              onChange={this.handleChange}
              value={this.state.message}
              className="contact-form-input contact-form-input-message"
            />

            <input type="submit" name="submit" className="contact-form-input" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
