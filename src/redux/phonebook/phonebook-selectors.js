import { createSelector } from '@reduxjs/toolkit';

const contactsArray = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

// мемоізація //
const getVisibleContacts = createSelector(
  [contactsArray, getFilter],
  (contacts, filter) => {
    const normalize = filter.toLowerCase();
    return contacts.filter(el => el.name.toLowerCase().includes(normalize));
  },
);

export default {
  contactsArray,
  getFilter,
  getVisibleContacts,
};
