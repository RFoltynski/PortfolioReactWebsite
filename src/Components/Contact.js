import React, { Component } from "react";
import "../CSS/Contact.css";

class Contact extends Component {
  state = {
    name: "",
    mail: "",
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("your massages has send");
    this.setState({
      name: "",
      mail: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="future-box">
        <div className="header">
          <h2>Kontakt</h2>
          <form onSubmit={this.onSubmit}>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Imię"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label>
              <input
                type="text"
                name="mail"
                placeholder="E-mail"
                onChange={this.handleChange}
                value={this.state.mail}
              />
            </label>
            <label>
              <textarea
                placeholder="Wiadomość"
                name="message"
                type="text"
                onChange={this.handleChange}
                value={this.state.message}
              />
            </label>
            <label>
              <input type="submit" name="submit" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
