import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateContent from '../components/CreateContent';
import { toggleEditModal } from '../../modal/actions';

const CreateContentContainer = ({ activeCourse, showEditModal, toggleEditModal }) => {
  return <CreateContent {...{ activeCourse, showEditModal, toggleEditModal }} />;
};

CreateContentContainer.propTypes = {
  activeCourse: PropTypes.object.isRequired,
  showEditModal: PropTypes.bool.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    activeCourse: state.coursesState.activeCourse,
    showEditModal: state.courseModalState.showEditModal,
  }),
  { toggleEditModal },
)(CreateContentContainer);
