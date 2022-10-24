import PropTypes from 'prop-types';
import { ContactListItem } from "components/ContListItem/ContactListItem"
import { List } from "./ContactList.styled"

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ContactListItem
      key={contact.id}
      name={contact.name}
      number={contact.number}
      id={contact.id}
      onDeleteContact={onDeleteContact} 
      />
    ))}
  </List>
)

  ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }