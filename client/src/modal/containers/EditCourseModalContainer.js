import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editCourse } from '../../courses/actions';
import CourseModal from '../components/CourseModal';

const EditCourseModalContainer = ({
  activeCourse,
  editCourse,
  editingCourseError,
  creatingCourse,
  showEditModal,
  toggleModal,
}) => {
  const [formValues, setValues] = useState({
    title: '',
    subtitle: '',
    description: '',
    price: '',
    duration: '',
  });

  useEffect(() => {
    setValues(activeCourse);
  }, [activeCourse]);

  const updateField = e => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createCourse = () => {
    editCourse(formValues);
  };

  return (
    <CourseModal
      title='Edit Course'
      showModal={showEditModal}
      courseError={editingCourseError}
      {...{
        createCourse,
        creatingCourse,
        updateField,
        formValues,
        toggleModal,
      }}
    />
  );
};

EditCourseModalContainer.propTypes = {
  activeCourse: PropTypes.object.isRequired,
  editCourse: PropTypes.func.isRequired,
  editingCourseError: PropTypes.object.isRequired,
  creatingCourse: PropTypes.bool.isRequired,
  showEditModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    creatingCourse: state.coursesState.creatingCourse,
    editingCourseError: state.coursesState.editingCourseError,
  }),
  { editCourse },
)(EditCourseModalContainer);
