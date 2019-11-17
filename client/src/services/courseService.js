import axios from 'axios';

const createCourse = async courseInfo => {
  const response = await axios.post('/api/courses', {
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
};

export default courseService;
