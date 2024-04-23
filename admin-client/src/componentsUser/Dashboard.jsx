import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from "../config.js";
import { useNavigate } from 'react-router-dom';
import AppbarUSER from './AppbarUSER.jsx';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Fetching courses...');
    
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        
        const response = await axios.get(`${BASE_URL}/user/courses`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log('Response:', response);
        
        const data = response.data.courses;
        console.log('Fetched courses:', data);
        
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchCourses();
  }, []);
  

  return (
    <div>
      <AppbarUSER />
      <div style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Courses Dashboard
        </Typography>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid key={course._id} item xs={12} sm={6} md={4} lg={3}>
              <Card style={{ margin: 10, width: 300, minHeight: 200, padding: 20 }}>
                <CardContent>
                  <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
                  <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
                  <img src={course.imageLink} style={{ width: 300 }} alt={course.title} />
                  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    <Button variant="contained" size="large" onClick={() => {
                      navigate("/course/" + course._id);
                    }}>Edit</Button>
                  </div>
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
