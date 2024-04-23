import React from "react";
import Sidebar from "./Sidebar.jsx";
import Appbar from "./Appbar.jsx"; // Import the Appbar component
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isAdminLoading } from "../store/selectors/isAdminLoading";
import { adminEmailState } from "../store/selectors/adminEmail";
import axios from 'axios';
import { BASE_URL } from "../config.js";
import { adminState } from "../store/atoms/admin";

const Admin = ({ children }) => {
  const adminData = useRecoilValue(adminState);
  const isLoading = useRecoilValue(isAdminLoading); // Use isAdminLoading selector
  const adminEmail = useRecoilValue(adminEmailState); // Use adminEmailState selector

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Appbar /> {/* Render the Appbar component here */}
      <section > {/* Make the section a flex container and set its height to full screen */}
        <Sidebar /> {/* Render the Sidebar component */}
        <div className="flex-1 bg-slate-100 relative z-20 md:p-10 sm:p-5"> {/* Set the background color and padding for the main content area */}
          {children} {/* Render the children components */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Admin;
