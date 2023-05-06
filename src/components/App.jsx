import { Component } from 'react';
import ContactForm from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
    contacts: [],
  };
  addContact = ({ name }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name};
    const checkUser = contacts.find(
      (contact) => contact.name === newContact.name
    );
    
    checkUser
      ? alert(`${name} is already in the contacts`)
      : this.setState(() => ({
          contacts: [newContact, ...contacts],
          
        }));
  };
  render() {
   
    const {
      addContact,
      state: { contacts },
    } = this;
    return (
      <div>
        <ContactForm onSubmit={addContact}/>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
