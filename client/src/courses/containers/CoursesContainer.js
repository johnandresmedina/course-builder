import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';

import { getAllCourses, setActiveCourse } from '../../courses/actions';
import { toggleDeleteModal } from '../../modal/actions';
import Courses from '../components/Courses';
import CustomSpinner from '../../spinner/CustomSpinner';

const CoursesContainer = ({
  courses,
  getAllCourses,
  history,
  setActiveCourse,
  toggleDeleteModal,
}) => {
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      getAllCourses();
    }

    return () => {
      didCancel = true;
    };
  }, [getAllCourses]);

  return !_isEmpty(courses) ? (
    <Courses {...{ courses, setActiveCourse, history, toggleDeleteModal }} />
  ) : (
    <CustomSpinner />
  );
};

CoursesContainer.propTypes = {
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
  setActiveCourse: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    state => ({
      courses: state.coursesState.courses,
    }),
    { getAllCourses, setActiveCourse, toggleDeleteModal },
  )(CoursesContainer),
);
