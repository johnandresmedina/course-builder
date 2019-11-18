import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({ actionCallback, actionInProgress, showModal, toggleModal }) => {
  const handleOnClick = () => {
    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={handleOnClick}>
        <ModalHeader toggle={toggleModal}>Delete course</ModalHeader>
        <ModalBody>Are you sure you want to delete this course?</ModalBody>
        <ModalFooter>
          <Button color='primary' disabled={actionInProgress} onClick={actionCallback}>
            {!actionInProgress ? 'Delete' : 'Deleting'}
          </Button>{' '}
          <Button color='secondary' onClick={handleOnClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  actionCallback: PropTypes.func.isRequired,
  actionInProgress: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default DeleteModal;
