import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CourseForm from '../../form/CourseForm';

const CourseModal = ({
  createCourse,
  creatingCourse,
  courseError,
  showModal,
  updateField,
  formValues,
  toggleModal,
  title,
}) => {
  const handleOnClick = () => {
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={handleOnClick}>
        <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
        <ModalBody>
          <CourseForm {...{ courseError, updateField, formValues }} />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' disabled={creatingCourse} onClick={createCourse}>
            {!creatingCourse ? 'Save' : 'Saving'}
          </Button>{' '}
          <Button color='secondary' onClick={handleOnClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CourseModal.propTypes = {
  courseError: PropTypes.object.isRequired,
  createCourse: PropTypes.func.isRequired,
  creatingCourse: PropTypes.bool.isRequired,
  formValues: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default CourseModal;
