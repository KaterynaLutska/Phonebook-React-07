import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import { Component } from 'react';
import { contactsSelectors } from '../../redux/phonebook';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { items } = this.props;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        {items.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  items: contactsSelectors.contactsArray(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
