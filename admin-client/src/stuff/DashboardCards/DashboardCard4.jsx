import React from "react";
import { FaUser } from "react-icons/fa";
import { BsArrowUpShort } from "react-icons/bs";

const DashboardCard4 = () => {
  return (
    <React.Fragment>
      <figure className="shadow-xl rounded-md overflow-hidden">
        <div className="p-4 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Active Users</p>
              <h1 className="font-bold text-2xl">300</h1>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-full text-white"><FaUser size={20} /></div>
            </div>
          </div>
          <div>
            <p className="flex items-center justify-start font-medium text-slate-500 text-sm whitespace-nowrap">
              <span className="text-green-500 flex whitespace-nowrap mr-1"><BsArrowUpShort size={19} strokeWidth={1} /> 3.48% </span>  Since last month
            </p>
          </div>
        </div>
      </figure>
    </React.Fragment>
  )
}

export default DashboardCard4;