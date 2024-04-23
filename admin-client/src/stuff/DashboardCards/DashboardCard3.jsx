import React from "react";
import { AiFillProject } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

const DashboardCard3 = ({ count }) => {
  return (
    <React.Fragment>
      <figure className="shadow-xl rounded-md overflow-hidden">
        <div className="p-4 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Projects</p>
              <h1 className="font-bold text-2xl">{count}</h1>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-full text-white"><AiFillProject size={20} /></div>
            </div>
          </div>
          <div>
            <p className="flex items-center justify-start font-medium text-slate-500 text-sm whitespace-nowrap">
              Listed on Website
            </p>
          </div>
        </div>
      </figure>
    </React.Fragment>
  )
}

export default DashboardCard3;