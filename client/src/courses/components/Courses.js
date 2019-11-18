import './Courses.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import CustomCard from './CustomCard';

const Courses = ({ courses, setActiveCourse, history, deleteCourse }) => {
  const coursesComponent = courses.map(course => {
    return <CustomCard key={course._id} {...{ course, setActiveCourse, history, deleteCourse }} />;
  });

  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <div className='courses'>{coursesComponent}</div>
      </Col>
    </Row>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  setActiveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Courses;
