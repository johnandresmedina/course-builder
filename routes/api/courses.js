const express = require('express');
const { check, validationResult } = require('express-validator');

const Course = require('../../models/Course');

const router = express.Router();

// @route GET api/courses
// @desc Get all courses
// @access Public
router.get('/', async (request, response) => {
  try {
    const courses = await Course.find();
    response.json(courses);
  } catch (error) {
    console.error(error.message);
    response.status(500).send('Server error');
  }
});

// @route GET api/courses/:id
// @desc Get course by Id
// @access Public
router.get('/:id', async (request, response) => {
  try {
    const course = await Course.findById(request.params.id);

    if (!course) {
      return response.status(404).json({ errors: { msg: 'Course not found' } });
    }

    response.json(course);
  } catch (error) {
    console.error(error.message);

    if (error.kind === 'ObjectId') {
      return response.status(404).json({ errors: { msg: 'Course not found' } });
    }

    response.status(500).send('Server error');
  }
});

// @route POST api/courses
// @desc Create a course
// @access Public
router.post(
  '/',
  [
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('title', 'Title exceeded the max length allow').isLength({ max: 255 }),
    check('subtitle', 'Subtitle exceeded the max length allow').isLength({ max: 255 }),
  ],
  async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { title, subtitle = '', description = '', price = null, duration = '' } = request.body;

    const courseFields = {
      title,
      subtitle,
      description,
      price,
      duration,
    };

    try {
      let existingCourse = await Course.findOne({ title });

      if (existingCourse) {
        return response.status(400).json({ errors: [{ msg: 'Course already exists' }] });
      }

      const course = new Course(courseFields);
      await course.save();

      return response.status(201).json(course);
    } catch (error) {
      console.error(error.message);
      response.status(500).send('Server error');
    }
  },
);

module.exports = router;
