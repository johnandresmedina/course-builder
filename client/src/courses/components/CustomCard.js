import './customCard.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardSubtitle, CardHeader, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const LIMIT_DESCRIPTION = 150;
const LIMIT_SUBTITLE = 100;

const truncateText = (text, limit) => {
  return text.length > limit ? `${text.substring(0, LIMIT_SUBTITLE)}...` : text;
};

const CustomCard = ({ course, setActiveCourse, history, toggleDeleteModal }) => {
  const handleOnEditClick = () => {
    setActiveCourse(course);
    history.push('/create-content');
  };

  const handleOnDeleteClick = () => {
    setActiveCourse(course);
    toggleDeleteModal();
  };

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
            <span
              dangerouslySetInnerHTML={{
                __html: truncateText(course.description, LIMIT_DESCRIPTION),
              }}></span>
          </CardText>
        </CardBody>
      )}
      <CardFooter className='course__card-footer'>
        <div className='course__card-icon' onClick={handleOnEditClick}>
          <FontAwesomeIcon size='xs' icon={faPen} />
        </div>
        <div className='course__card-icon course__card-icon--delete' onClick={handleOnDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </CardFooter>
    </Card>
  );
};

CustomCard.propTypes = {
  course: PropTypes.object.isRequired,
  setActiveCourse: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default CustomCard;
