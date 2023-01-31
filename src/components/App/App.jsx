import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { Header } from 'components/Header/Header';
import { Contacts } from 'components/Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/requests';
import { Routes, Route } from 'react-router-dom';
import { Register } from 'components/Register/Register';
import { Login } from 'components/Login/Login';

export const App = () => {
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

  function selectedContacts(text) {
    dispatch(setFilter(text));
  }

  async function deleteCont(id) {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Section />}>
        <Route path="register" element={<Register />} />

        <Route path="login" element={<Login />} />

        <Route
          path="contacts"
          element={
            <Contacts
              submit={addCont}
              contacts={filterContacts}
              onSearch={selectedContacts}
              onDelete={deleteCont}
            />
          }
        />
      </Route>
    </Routes>
  );
};
