import React, { useState, useContext } from "react";
import { TbEdit, TbExternalLink, TbTrash, TbChevronDown } from "react-icons/tb";
// import Link from "next/link";
import { AdminContext } from "../../context/Admin.context";
import axios from "axios";
import { toast } from "react-toastify";

const ProjectDropdown = ({ id }) => {

  const { currentAdmin } = useContext(AdminContext);

  const [state, setState] = useState('hidden');

  const handleOpenDropdown = (event) => {
    setState('block');
  }

  const handleCloseDropdown = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setState('hidden');  
    }
  }

  const handleDeleteProject = () => {
    if (confirm('Are you sure to delete this project ?')) {
      const data = {
        id: id,
        isDelete: true
      }
      axios.post(`${BASE_URL}/api/v1/admin/updateProject`, data, {
        headers: {
          'Authorization': `Bearer ${currentAdmin.accessToken}`
        }
      })
      .then((response) => {
        if (response.data.statusCode == 200) {
          toast.success('Project Deleted');
          window.location = "/admin/project"
        }
        else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error)
        toast.error('An error occured');
      }); 
    }
  } 

  return (
    <React.Fragment>
      <div className="relative" onClick={(event) => handleOpenDropdown(event)} onBlur={(event) => handleCloseDropdown(event)}>
        <div>
          <button type="button" className="inline-flex w-fit justify-center items-center rounded border bg-ascent text-white px-4 py-2 text-xs font-medium whitespace-nowrap">Options <TbChevronDown size={16} className={`ml-1 ${(state === 'hidden') ? 'rotate-0' : 'rotate-180'} `} /></button>
        </div>
        <div className={`absolute ${state} border right-0 z-50 mt-2 w-fit origin-top-right rounded bg-white border-slate-300 shadow-lg px-4 py-3`}>
          <ul className="flex flex-col space-y-3">
            <li><Link href={`/admin/project/${id}`} className="text-xs font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbEdit size={18} className="mr-1 mt-[-1px]" />Edit Project</Link></li>
            <li><a href="javascript:void(0);" onClick={() => handleDeleteProject()} className="text-xs font-medium text-red-500 hover:text-red-800 whitespace-nowrap flex items-center justify-start"> <TbTrash size={18} className="mr-1 mt-[-1px]" />Delete Project</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectDropdown;