import PropTypes from 'prop-types';
import { Button, ListItem } from '../ContactList/ContactList.styled'
import { BsTrash } from "react-icons/bs";
export const ContactListItem = ({ id, name, number, onDeleteContact,  }) => (
  <ListItem key={id}>
    <span>{name}:</span><span>{number}</span>
    <Button type="button" onClick={() => onDeleteContact(id)}><BsTrash size="20" /></Button>
  </ListItem>
)

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
}

