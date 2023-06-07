import PropTypes from 'prop-types';
import { StyledContact } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <StyledContact key={id}>
      <p className="contact-name">{name}:</p>
      <p className="contact-number">{number}</p>
      <button className="contact-btn" type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </StyledContact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
