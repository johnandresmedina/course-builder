import './Courses.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import CustomCard from './CustomCard';
import DeleteModalContainer from '../../modal/containers/DeleteModalContainer';

const Courses = ({ courses, setActiveCourse, history, toggleDeleteModal }) => {
  const coursesComponent = courses.map(course => {
    return (
      <CustomCard key={course._id} {...{ course, setActiveCourse, history, toggleDeleteModal }} />
    );
  });

  return (
    <>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className='courses'>{coursesComponent}</div>
        </Col>
      </Row>
      <DeleteModalContainer />
    </>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  setActiveCourse: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Courses;
