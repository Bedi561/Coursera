const express = require('express');
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { User, Course, Admin } = require("../db");
const router = express.Router();
const jwt = require('jsonwebtoken');



router.get("/me", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  if (!user) {
      res.status(403).json({ msg: "User doesn't exist" });
      return;
  }
  res.json({
      username: user.username
  });
});



router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '5h' });
    return res.json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      return res.json({ message: 'Logged in successfully', token });
    } else {
      return res.status(403).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Continue similar changes for other routes...

  
  
router.get('/courses', authenticateJwt, async (req, res) => {
  try {
    // Extend the maxTimeMS for the findOne operation to 30 seconds
    const admin = await Admin.findOne().maxTimeMS(30000);

    const courses = await Course.find({ published: true });
    res.json({ courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
  router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        user.purchasedCourses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json({ message: 'User not found' });
      }
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
  router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  });
  
  module.exports = router