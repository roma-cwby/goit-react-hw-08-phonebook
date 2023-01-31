import propTypes from 'prop-types';
import { Contact } from './Contacts.styled';
import { Forms } from 'components/Forms/Forms';
import { useSelector } from 'react-redux';

export const Contacts = ({ submit, contacts, onSearch, onDelete }) => {
  const contactsLength = useSelector(state => state.contacts.items.length);
  return (
    <>
      <Forms submit={submit} />
      {contactsLength > 0 && (
        <Contact>
          <form onChange={e => onSearch(e.target.value)}>
            <label htmlFor="find">Find contact by name</label>
            <input type="text" id="find" />
          </form>

          <ul>
            {contacts.map(contact => (
              <li key={contact.id} id={contact.id}>
                <span>{contact.name}</span>
                <span>{contact.phone}</span>
                <button type="button" onClick={() => onDelete(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Contact>
      )}
    </>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
    })
  ).isRequired,
};
