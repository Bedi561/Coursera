import React, { useState, useContext, useRef } from "react";
import { TbExternalLink, TbTrash, TbChevronDown } from "react-icons/tb";
// import Link from "next/link";
import { AdminContext } from "../../context/Admin.context";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
const UserDropdown = ({ id }) => {
  const { currentAdmin } = useContext(AdminContext);
  const dropdownRef = useRef(null);
  const [state, setState] = useState('hidden');

  const handleOpenDropdown = () => {
    setState('block');
  };

  const handleCloseDropdown = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setState('hidden');
    }
  };

  const handlePreviewUser = () => {
    console.log("Previewing user:", id); // Log preview action
    // Navigate to the preview page
    window.location.href = `/admin/users/preview/${id}`;
  };

  const handleDeleteUser = () => {
    if (confirm('Are you sure to delete this user?')) {
      const data = {
        id: id,
        isDelete: true
      };
      axios.post(`${BASE_URL}/api/v1/admin/updateUser`, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${currentAdmin.accessToken}`
        }
      })
      .then((response) => {
        console.log("Delete user response:", response.data); // Log delete user response
        if (response.data.statusCode === 200) {
          toast.success('User Deleted');
          window.location.href = "/admin/users";
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Delete user error:", error); // Log delete user error
        toast.error('An error occurred');
      }); 
    }
  }; 

  return (
    <div ref={dropdownRef} className="relative" onClick={handleOpenDropdown} onBlur={handleCloseDropdown}>
      <div className={`absolute ${state} border right-0 z-10 mt-2 w-fit origin-top-right rounded bg-white border-slate-300 shadow-lg px-4 py-3`}>
        <ul className="flex flex-col space-y-3">
         
          
         
        <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Apply custom styling to remove default list styles */}
  <li>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a
        href="javascript:void(0);"
        onClick={handleDeleteUser}
        className="text-xs font-medium text-red-500 hover:text-red-800 whitespace-nowrap"
        style={{ textDecoration: "none" }}
      >
        <DeleteIcon fontSize="small" sx={{ mr: 1, mt: -1 }} /> {/* Adjust icon size and spacing */}
      </a>
    </div>
  </li>
</ul>

        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
