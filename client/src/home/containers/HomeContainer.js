import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleModal } from '../../modal/actions';
import Home from '../components/Home';

const HomeContainer = ({ toggleModal }) => {
  return <Home {...{ toggleModal }} />;
};

HomeContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default connect(state => ({}), { toggleModal })(HomeContainer);
