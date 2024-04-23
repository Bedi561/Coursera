import React from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";

import { TbChevronRight } from "react-icons/tb";

const Breadcrumb = ({ crumbs }) => {
  return (
    <React.Fragment>
      <ul className="flex items-center space-x-2 text-slate-200 text-xs font-medium">
        <li className="flex items-center justify-start space-x-2 my-2">
          <Link href={"/admin/dashboard"}>Admin</Link>
        </li>
        {
          crumbs.map((crumb) => {
            return (<li key={crumb.title} className="flex items-center justify-start space-x-2"><TbChevronRight size={14} /><Link href={crumb.path}>{crumb.title}</Link></li>)
          })
        }
      </ul>
    </React.Fragment>
  );
}

export default Breadcrumb;