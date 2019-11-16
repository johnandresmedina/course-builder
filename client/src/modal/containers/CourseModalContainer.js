import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleModal } from '../../modal/actions';
import CourseModal from '../components/CourseModal';

const CourseModalContainer = ({ showModal, toggleModal }) => {
  const [formValues, setValues] = useState({
    title: '',
    subtitle: '',
    description: '',
    price: '',
    duration: '',
  });

  const updateField = e => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createCourse = () => {
    //TODO: call create course function
    //console.log('Creating course', formValues);
  };

  return <CourseModal {...{ createCourse, showModal, updateField, formValues, toggleModal }} />;
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
