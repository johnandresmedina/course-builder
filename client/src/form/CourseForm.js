import React from 'react';
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

const CourseForm = () => {
  return (
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for='title'>Title</Label>
            <Input type='title' name='title' id='title' placeholder='The title of the course' />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for='subtitle'>Subtitle</Label>
            <Input
              type='subtitle'
              name='subtitle'
              id='subtitle'
              placeholder='The subtitle of the course'
            />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for='examplePassword'>Description</Label>
            <Input
              type='description'
              name='description'
              id='description'
              placeholder='The description of the course'
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input placeholder='Price' />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <FontAwesomeIcon icon={faHourglassHalf} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder='Duration' />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default CourseForm;
