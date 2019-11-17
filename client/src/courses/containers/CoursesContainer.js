import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllCourses } from '../../courses/actions';
import Courses from '../components/Courses';

const CoursesContainer = ({ courses, getAllCourses }) => {
  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      getAllCourses();
    }

    return () => {
      didCancel = true;
    };
  }, [getAllCourses]);

  return <Courses {...{ courses }} />;
};

CoursesContainer.propTypes = {
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    courses: state.coursesState.courses,
  }),
  { getAllCourses },
)(CoursesContainer);
