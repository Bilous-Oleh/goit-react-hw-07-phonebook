import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      Contacts
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={phone}
          onClick={onDelete}
          className="contact-list"
        />
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
