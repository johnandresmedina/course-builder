import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleModal } from '../../modal/actions';
import CourseModal from '../components/CourseModal';

const CourseModalContainer = ({ showModal, toggleModal }) => {
  return <CourseModal {...{ showModal, toggleModal }} />;
};

CourseModalContainer.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    showModal: state.courseModalState.showModal,
  }),
  { toggleModal },
)(CourseModalContainer);
