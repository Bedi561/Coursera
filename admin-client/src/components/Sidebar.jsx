import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTv, FaChalkboardTeacher, FaUsers, FaChartBar } from "react-icons/fa";
import { Typography, Button } from "@mui/material";
import styled from "styled-components";

const Sidebar = ({ state }) => {
  const [activeButton, setActiveButton] = useState('dashboard'); // Initialize with a default value

  const HoverButton = styled(Button)`
    &:hover {
      transform: scale(1.1); /* Increase the size by 10% */
    }

  `;

  const handleClick = (buttonName) => {
    setActiveButton(true); // Set active state for the clicked button
  };

  return (
    <aside className={state ? "active" : null}>
      <div className="fixed inset-0 w-full h-full flex justify-start bg-white border-r shadow-xl py-5 space-y-5">
        <div className="flex flex-wrap justify-center">
          {/* Dashboard */}
          <HoverButton
            component={Link}
            to="/admin/dashboard"
            variant="outlined"
            className={`flex items-center no-underline ${activeButton === 'dashboard' ? 'active' : ''}`}
            style={{ textDecoration: 'none', marginLeft: '240px' }} // Remove underlines
            onClick={() => handleClick('dashboard')}
          >
            <FaTv size={24} style={{ marginRight: '8px' }} />
            <Typography variant="h6" style={{ color: 'blue' }}>Dashboard</Typography>
          </HoverButton>
           
          {/* Course Management */}
          <HoverButton
            component={Link}
            to="/admin/courses"
            variant="outlined"
            className={`flex items-center no-underline ${activeButton === 'Course Management' ? 'active' : ''}`}
            style={{ textDecoration: 'none' }} // Remove underlines
            onClick={() => handleClick('Course Management')}
          >
            <FaChalkboardTeacher size={24} style={{ marginRight: '8px' }} />
            <Typography variant="h6" style={{ color: 'blue' }}>Course Management</Typography>
          </HoverButton>

          {/* Add Course */}
          <HoverButton
            component={Link}
            to="/admin/addcourse"
            variant="outlined"
            className={`flex items-center no-underline ${activeButton === 'addCourse' ? 'active' : ''}`}
            style={{ textDecoration: 'none' }} // Remove underlines
            onClick={() => handleClick('addCourse')}
          >
            <FaTv size={24} style={{ marginRight: '8px' }} />
            <Typography variant="h6" style={{ color: 'blue' }}>Add Courses</Typography>
          </HoverButton>

          {/* Student Management */}
          <HoverButton
            component={Link}
            to="/admin/student-management"
            variant="outlined"
            className={`flex items-center no-underline ${activeButton === 'studentManagement' ? 'active' : ''}`}
            style={{ textDecoration: 'none' }} // Remove underlines
            onClick={() => handleClick('studentManagement')}
          >
            <FaUsers size={24} style={{ marginRight: '8px' }} />
            <Typography variant="h6" style={{ color: 'blue' }}>Student Management</Typography>
          </HoverButton>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
