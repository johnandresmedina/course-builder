import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateContent from '../components/CreateContent';

const CreateContentContainer = ({ activeCourse }) => {
  return <CreateContent {...{ activeCourse }} />;
};

CreateContentContainer.propTypes = {
  activeCourse: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    activeCourse: state.coursesState.activeCourse,
  }),
  {},
)(CreateContentContainer);
