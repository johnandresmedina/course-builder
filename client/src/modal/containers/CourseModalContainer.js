import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleModal } from '../../modal/actions';
import { createCourse as createCourseAction } from '../../courses/actions';
import CourseModal from '../components/CourseModal';

const CourseModalContainer = ({
  createCourseAction,
  courseError,
  creatingCourse,
  history,
  showModal,
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
    return () => {
      setValues({
        title: '',
        subtitle: '',
        description: '',
        price: '',
        duration: '',
      });
    };
  }, [showModal]);

  const updateField = e => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createCourse = () => {
    createCourseAction(formValues, history);
  };

  return (
    <CourseModal
      title='Create Course'
      {...{
        createCourse,
        creatingCourse,
        courseError,
        showModal,
        updateField,
        formValues,
        toggleModal,
      }}
    />
  );
};

CourseModalContainer.propTypes = {
  createCourseAction: PropTypes.func.isRequired,
  courseError: PropTypes.object.isRequired,
  creatingCourse: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    state => ({
      showModal: state.courseModalState.showModal,
      creatingCourse: state.coursesState.creatingCourse,
      courseError: state.coursesState.error,
    }),
    { createCourseAction, toggleModal },
  )(CourseModalContainer),
);
