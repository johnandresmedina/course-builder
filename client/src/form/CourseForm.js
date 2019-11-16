import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const CourseForm = ({ updateField, formValues }) => {
  return (
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for='title'>Title</Label>
            <Input
              type='text'
              name='title'
              id='title'
              placeholder='The title of the course'
              value={formValues.title}
              onChange={updateField}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for='subtitle'>Subtitle</Label>
            <Input
              type='text'
              name='subtitle'
              id='subtitle'
              placeholder='The subtitle of the course'
              value={formValues.subtitle}
              onChange={updateField}
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input
              type='text'
              name='description'
              id='description'
              placeholder='The description of the course'
              value={formValues.description}
              onChange={updateField}
            />
          </FormGroup>
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
  formValues: PropTypes.object,
  updateField: PropTypes.func.isRequired,
};

export default CourseForm;
