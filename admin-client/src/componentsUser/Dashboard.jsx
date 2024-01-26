import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from "../config.js";
import AppbarUSER from './AppbarUSER.jsx';
const Dashboard = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${BASE_URL}/user/courses`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const data = response.data.courses;
          setCourses(data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchCourses();
    }, []);
  
    return (
        <div>
          <AppbarUSER /> {/* Include your AppbarUSER component at the top */}
          <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
              Courses Dashboard
            </Typography>
            <Grid container spacing={3}>
              {courses.map((course) => (
                <Grid key={course._id} item xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Created by: {course.adminName}
                      </Typography>
                      {/* Add more course details here */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      );
  };
  
  export default Dashboard;
  