import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CourseForm from '../../form/CourseForm';

const CourseModal = ({ createCourse, showModal, updateField, formValues, toggleModal }) => {
  const handleOnClick = () => {
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={handleOnClick}>
        <ModalHeader toggle={toggleModal}>Create a Course</ModalHeader>
        <ModalBody>
          <CourseForm {...{ updateField, formValues }} />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={createCourse}>
            Save
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
  createCourse: PropTypes.func.isRequired,
  formValues: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default CourseModal;
