import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactsSuccess(data));
    })
    .catch(error => dispatch(addContactsError(error)));
};

const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactsSuccess(id));
    })
    .catch(error => dispatch(deleteContactsError(error)));
};

export default { fetchContacts, addContact, deleteContacts };
