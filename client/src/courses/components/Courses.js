import './Courses.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import CustomCard from './CustomCard';

const Courses = ({ courses }) => {
  const coursesComponent = courses.map(course => {
    return <CustomCard key={course._id} course={course} />;
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
};

export default Courses;
