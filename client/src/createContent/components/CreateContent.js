import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { Col, Row } from 'reactstrap';

const CreateContent = ({ activeCourse }) => {
  const buildContent = () => {
    return (
      <Row>
        <Col md={12}>
          <h1>{activeCourse.title}</h1>
          <p>display some info here</p>
        </Col>
      </Row>
    );
  };

  return !_isEmpty(activeCourse) ? buildContent() : <h1>No active course available</h1>;
};

CreateContent.propTypes = {
  activeCourse: PropTypes.object.isRequired,
};

export default CreateContent;
