import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
  };
  nameId = nanoid();

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  reset = () => {
    this.setState({ name: "" });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            id={this.nameId}
            onChange={this.handleChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
