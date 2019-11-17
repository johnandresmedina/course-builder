import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Col, Row, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

import CustomInput from './CustomInput';

const showError = fieldName => formValues => error => {
  return formValues[fieldName] ? false : error.param === fieldName;
};

const isTitleError = (error, formValues) => showError('title')(formValues)(error);

const CourseForm = ({ courseError, updateField, formValues }) => {
  const titleError = isTitleError(courseError, formValues);

  return (
    <Form>
      <Row form>
        <Col md={12}>
          <CustomInput
            label='title'
            showLabel
            value={formValues.title}
            onChange={updateField}
            invalid={titleError}
            error={courseError}
          />
        </Col>
        <Col md={12}>
          <CustomInput
            label='subtitle'
            showLabel
            value={formValues.subtitle}
            onChange={updateField}
          />
        </Col>
        <Col md={12}>
          <CustomInput
            label='description'
            showLabel
            type={'textarea'}
            value={formValues.description}
            onChange={updateField}
          />
        </Col>
        <Col md={6}>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              name='price'
              placeholder='Price'
              value={formValues.price}
              onChange={updateField}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <FontAwesomeIcon icon={faHourglassHalf} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              name='duration'
              placeholder='Duration'
              value={formValues.duration}
              onChange={updateField}
            />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

CourseForm.propTypes = {
  courseError: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default CourseForm;
