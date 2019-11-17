import axios from 'axios';

const createCourse = async courseInfo => {
  //try {
  const response = await axios.post('/api/courses', {
    ...courseInfo,
  });

  return response;
  //} catch (error) {
  //throw error;
  //}
};

const getAllCourses = async () => {
  try {
    const response = await axios.get('/api/courses');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const courseService = {
  createCourse,
  getAllCourses,
};

export default courseService;
