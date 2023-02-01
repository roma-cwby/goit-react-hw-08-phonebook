import { useEffect } from 'react';
import { Contact } from './Contacts.styled';
import { Forms } from 'components/Forms/Forms';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact, addContact, fetchContacts } from 'redux/requests';
import { setFilter } from 'redux/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts = contacts?.length
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : [];

  async function addCont(data) {
    if (contacts.length && contacts.find(item => item.name === data.name))
      return alert(
        'Are you sure about that? "' + data.name + '" is already in contacts.'
      );

    await dispatch(addContact(data));
    dispatch(fetchContacts());
  }

  async function deleteCont(id) {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Forms submit={addCont} />
      {contacts.length > 0 && (
        <Contact>
          <form onChange={e => dispatch(setFilter(e.target.value))}>
            <label htmlFor="find">Find contact by name</label>
            <input type="text" id="find" />
          </form>

          <ul>
            {filterContacts.map(contact => (
              <li key={contact.id} id={contact.id}>
                <span>{contact.name}</span>
                <span>{contact.number}</span>
                <button type="button" onClick={e => deleteCont(contact.id)}>
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
