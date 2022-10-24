import { Component } from "react";
import { nanoid } from "nanoid";
import { FormContact } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Title } from "components/Title/Title";
import { Wrapper } from "./App.styled";

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '', 
  }

  componentDidMount() {
    const localContacts = localStorage.getItem("contacts")
    const parsedLocalContacts = JSON.parse(localContacts)

    if (parsedLocalContacts) {
      this.setState({contacts:[...parsedLocalContacts]})
    }
    
  }

  componentDidUpdate(prepState) {
    if (this.state.contacts !== prepState.contacts) {
       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmitHandler = data => {

    if (this.state.contacts.some(contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()))
    {
      alert(`${data.name} is already in contacts.`);
    } else {
      const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact ],
    }))
    }
    
  }

  handleFilterChange = event => {
      this.setState({filter: event.currentTarget.value })
  };
  

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter))
  }

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  render() {
    const availableContacts = this.contactFilter();

    return (
      <Wrapper>
        <Title title={'Phonebook' } />
        <FormContact onSubmit={this.formSubmitHandler} />
        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <Title title={'Contacts' }/>
        <ContactList contacts={availableContacts} onDeleteContact={this.deleteContact} />
      </Wrapper>
    )
  }
}