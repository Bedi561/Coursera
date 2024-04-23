import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import Appbar from "./Appbar"; // Assuming you have an Appbar component
import Sidebar from "./Sidebar"; // Assuming you have a Sidebar component

const Dashboard = () => {

    const numberOfCoursesPublished = 25;
    const additionalMetric = "Placeholder for additional metric";
  
    // Placeholder array of course names
    const courseNames = [
      "Introduction to Web Development",
      "Data Science Fundamentals",
      "Graphic Design Essentials",
      "Mobile App Development",
      "Digital Marketing Strategies",
      "Photography Masterclass",
      "Financial Literacy 101",
      "Creative Writing Workshop",
      "Language Learning Bootcamp",
      "Project Management Basics",
    ];
  
    // Function to select 3 random course names
    const getRandomCourseNames = () => {
      const randomCourseNames = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * courseNames.length);
        randomCourseNames.push(courseNames[randomIndex]);
      }
      return randomCourseNames;
    };
  
    const randomCourses = getRandomCourseNames();

    const totalRevenue = 50000;
    const revenueBreakdown = [
      { category: 'Product A', revenue: 20000 },
      { category: 'Product B', revenue: 15000 },
      { category: 'Service X', revenue: 10000 },
      { category: 'Service Y', revenue: 5000 },
    ];
    const comparisonData = {
      currentMonth: 50000,
      previousMonth: 45000,
    };
    const topProducts = [
      { name: 'Product A', revenue: 20000 },
      { name: 'Product B', revenue: 15000 },
    ];  
  
  return (
    <>
      <Appbar />
      <Sidebar />
      <Box marginTop={4} marginLeft={4} marginRight={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Sales and Revenue Dashboard
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                Total Sales
              </Typography>
              <Typography variant="h3" color="primary">
                $10,000
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h3" color="primary">
                $20,000
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
              Number of Courses Published
              </Typography>
              <Typography variant="h3" color="primary">
                25
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "8px" }}>
              <Typography variant="h6" gutterBottom>
                Top Selling Courses:
              </Typography>
              <Typography variant="h10" color="primary">
              <ul>
                {randomCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              </Typography>
            </Paper>
          </Grid>

          <div style={{ marginLeft: '20px', marginTop: '20px' }}>      
      <Typography variant="h4" gutterBottom>Revenue Breakdown</Typography>
      <Grid container spacing={2}>
        {revenueBreakdown.map((item) => (
          <Grid item xs={6} key={item.category}>
            <Typography>{item.category}: ${item.revenue}</Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Comparison with Previous Month:</Typography>
      <Typography>
        Current Month: ${comparisonData.currentMonth} | Previous Month: ${comparisonData.previousMonth}
      </Typography>

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Top Performing Products/Services:</Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {topProducts.map((product) => (
          <li key={product.name}>{product.name}: ${product.revenue}</li>
        ))}
      </ul>
    </div>

          
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
