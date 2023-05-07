import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : this.setState(() => ({
          contacts: [newContact, ...contacts],
        }));
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const {
      addContact,
      handleChange,
      getFilteredContacts,
      deleteContact,
      state: { filter },
    } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <Filter handleChange={handleChange} filter={filter} />
        <ContactsList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}
