// import { deleteCookie } from "cookies-next";
// import Link from "next/link";
// import Router from "next/router";
import React, { useContext, useState } from "react";
import { TbLogout, TbHeadset, TbSettings } from "react-icons/tb";
// import { AdminContext } from "../../context/Admin.context";

const AuthDropdown = () => {

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

  const handleLogout = () => {
    if (confirm('Are you sure to logout ?')) {
      deleteCookie('authentication');
      window.location = "/login";
    }
  }

  return (
    <React.Fragment>
      <div className="relative" onClick={(event) => handleOpenDropdown(event)} onBlur={(event) => handleCloseDropdown(event)}>
        <div>
          <button type="button" className={`h-[60px] w-[60px] flex items-center justify-center overflow-hidden rounded-full border-4 ${(state === "hidden") ? 'border-white' : 'border-ascent'}`}>
            <img src={(currentAdmin.image == "") ? '/default-profile.png' : currentAdmin.image} alt="user-profile" className="h-full w-full bg-white" />
          </button>
        </div>
        <div className={`absolute ${state} border right-0 z-10 mt-2 w-auto origin-top-right rounded bg-white border-slate-300 shadow-lg px-5 py-4 space-y-3 text-left`}>

          <button onClick={() => Router.push('/admin/setting')} className="flex items-center justify-start w-auto space-x-2">
            <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
              <img src={(currentAdmin.image == "") ? '/default-profile.png' : currentAdmin.image} alt="user-profile" className="h-full w-full" />
            </div>
            <div className="whitespace-nowrap text-left">
              <h1 className="font-semibold text-base">{currentAdmin.name}</h1>
              <h1 className="text-slate-500 text-xs">{currentAdmin.email}</h1>
            </div>
          </button>

          <hr />

          <ul className="flex flex-col space-y-3">
            <li><Link href={"/admin/setting"} className="text-sm font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbSettings size={20} className="mr-2 mt-[-1px]" />Account Settings</Link></li>
            <li><a href="javascript:void(0);" onClick={() => handleLogout()} className="text-sm font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbLogout size={20} className="mr-2 mt-[-1px]" />Logout</a></li>
          </ul>

        </div>
      </div>
    </React.Fragment>
  );
}

export default AuthDropdown;