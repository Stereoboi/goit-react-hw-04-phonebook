import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { FormContact } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Title } from "components/Title/Title";
import { Wrapper } from "./App.styled";

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    const parsedLocalContacts = JSON.parse(localContacts)

    if (parsedLocalContacts) {
     setContacts(prevState => [...prevState, ...parsedLocalContacts])
    }

  }, [])


  useEffect(() => {

    localStorage.setItem('contacts', JSON.stringify(contacts))
    
  },[contacts])

  

  const formSubmitHandler = data => {

    if (contacts.some(contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()))
    {
      alert(`${data.name} is already in contacts.`);
    } else {
      const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    setContacts(prevState => [...prevState, contact])

    }
    
  }

  const handleFilterChange = event => {
    const { name, value } = event.target;
    if (name) {
      setFilter(value)
    }

  };
  

  const contactFilter = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCaseFilter))
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  };
  
  
    const availableContacts = contactFilter();

    return (
      <Wrapper>
        <Title title={'Phonebook' } />
        <FormContact onSubmit={formSubmitHandler} />
        <Filter
          value={filter}
          onChange={handleFilterChange}
        />
        <Title title={'Contacts' }/>
        <ContactList contacts={availableContacts} onDeleteContact={deleteContact} />
      </Wrapper>
    )
  }
