import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from '../../redux/phonebook';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="filter">
      <label>
        <input
          className="filter-input"
          type="text"
          value={filter}
          placeholder="find contacts by name..."
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.protoType = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
