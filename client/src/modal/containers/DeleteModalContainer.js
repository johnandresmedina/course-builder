import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleDeleteModal } from '../../modal/actions';
import { deleteCourse } from '../../courses/actions';
import DeleteModal from '../components/DeleteModal';

const DeleteModalContainer = ({
  activeCourse,
  deleteCourse,
  deletingCourse,
  showDeleteModal,
  toggleDeleteModal,
}) => {
  const deleteCourseCallback = () => {
    toggleDeleteModal();
    deleteCourse(activeCourse);
  };

  return (
    <DeleteModal
      actionCallback={deleteCourseCallback}
      actionInProgress={deletingCourse}
      showModal={showDeleteModal}
      toggleModal={toggleDeleteModal}
    />
  );
};

DeleteModalContainer.propTypes = {
  activeCourse: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  deletingCourse: PropTypes.bool.isRequired,
  showDeleteModal: PropTypes.bool.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    showDeleteModal: state.courseModalState.showDeleteModal,
    deletingCourse: state.coursesState.deletingCourse,
    activeCourse: state.coursesState.activeCourse,
  }),
  { deleteCourse, toggleDeleteModal },
)(DeleteModalContainer);
