import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';

import { getAllCourses, setActiveCourse, deleteCourse } from '../../courses/actions';
import Courses from '../components/Courses';
import CustomSpinner from '../../spinner/CustomSpinner';

const CoursesContainer = ({ courses, deleteCourse, getAllCourses, history, setActiveCourse }) => {
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
    <Courses {...{ courses, setActiveCourse, history, deleteCourse }} />
  ) : (
    <CustomSpinner />
  );
};

CoursesContainer.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  getAllCourses: PropTypes.func.isRequired,
  setActiveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    state => ({
      courses: state.coursesState.courses,
    }),
    { getAllCourses, setActiveCourse, deleteCourse },
  )(CoursesContainer),
);
