import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import ContactList from './ContactList';
const getVisibleContacts = (allContacts, filter) => {
  const normalize = filter.toLowerCase();

  return allContacts.filter(el => el.name.toLowerCase().includes(normalize));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
