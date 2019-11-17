import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleModal } from '../../modal/actions';
import { createCourse as createCourseAction } from '../../courses/actions';
import CourseModal from '../components/CourseModal';

const CourseModalContainer = ({ createCourseAction, creatingCourse, showModal, toggleModal }) => {
  const [formValues, setValues] = useState({
    title: '',
    subtitle: '',
    description: '',
    price: '',
    duration: '',
  });

  const updateField = e => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createCourse = () => {
    createCourseAction(formValues);
  };

  return (
    <CourseModal
      {...{ createCourse, creatingCourse, showModal, updateField, formValues, toggleModal }}
    />
  );
};

CourseModalContainer.propTypes = {
  createCourseAction: PropTypes.func.isRequired,
  creatingCourse: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    showModal: state.courseModalState.showModal,
    creatingCourse: state.coursesState.creatingCourse,
  }),
  { createCourseAction, toggleModal },
)(CourseModalContainer);
