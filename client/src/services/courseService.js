import axios from 'axios';

const createCourse = async courseInfo => {
  const response = await axios.post('/api/courses', {
    ...courseInfo,
  });

  return response;
};

const editCourse = async courseInfo => {
  const response = await axios.put(`/api/courses/${courseInfo._id}`, {
    ...courseInfo,
  });

  return response;
};

const getAllCourses = async () => {
  const response = await axios.get('/api/courses');
  return response;
};

const courseService = {
  createCourse,
  getAllCourses,
  editCourse,
};

export default courseService;
