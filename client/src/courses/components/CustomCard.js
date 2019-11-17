import './customCard.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardSubtitle,
  CardHeader,
  CardFooter,
} from 'reactstrap';

const LIMIT_DESCRIPTION = 150;
const LIMIT_SUBTITLE = 100;

const truncateText = (text, limit) => {
  return text.length > limit ? `${text.substring(0, LIMIT_SUBTITLE)}...` : text;
};

const CustomCard = ({ course }) => {
  return (
    <Card className='course'>
      <CardHeader className='course__header'>
        <h6 className='course__header-title'>{course.title}</h6>
      </CardHeader>
      {course.subtitle && (
        <CardBody className='course__card-body'>
          <CardSubtitle>
            <span>{truncateText(course.subtitle, LIMIT_SUBTITLE)}</span>
          </CardSubtitle>
        </CardBody>
      )}
      {course.description && (
        <CardBody className='course__card-body'>
          <CardText>
            <span>{truncateText(course.description, LIMIT_DESCRIPTION)}</span>
          </CardText>
        </CardBody>
      )}
      <CardFooter className='course__card-footer'>
        <CardLink href='#'>Card Link</CardLink>
        <CardLink href='#'>Another Link</CardLink>
      </CardFooter>
    </Card>
  );
};

CustomCard.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CustomCard;
