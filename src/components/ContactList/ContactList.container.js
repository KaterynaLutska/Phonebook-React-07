import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import { contactsSelectors } from '../../redux/phonebook';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
