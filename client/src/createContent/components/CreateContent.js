import './createContent.scss';

import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import { Col, Row, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import EditCourseModalContainer from '../../modal/containers/EditCourseModalContainer';

const CreateContent = ({ activeCourse, showEditModal, toggleEditModal }) => {
  const handleOnClick = () => {
    toggleEditModal();
  };

  const buildContent = () => {
    return (
      <>
        <Row>
          <Col md={12}>
            <div className='create-content'>
              <h1 className='text-center'>
                {activeCourse.title}{' '}
                <Badge className='create-content__edit' color='light' onClick={handleOnClick}>
                  <FontAwesomeIcon size='xs' icon={faPen} />
                </Badge>
              </h1>
              {showEditModal && (
                <EditCourseModalContainer
                  activeCourse={activeCourse}
                  showEditModal
                  toggleModal={handleOnClick}
                />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3 className='create-content__placeholder'>
              This is placeholder for the chapter and content features
            </h3>
          </Col>
        </Row>
      </>
    );
  };

  return !_isEmpty(activeCourse) ? (
    buildContent()
  ) : (
    <h2 className='text-center'>No active course available</h2>
  );
};

CreateContent.propTypes = {
  activeCourse: PropTypes.object.isRequired,
  showEditModal: PropTypes.bool.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
};

export default CreateContent;
