import React, { useEffect, useState, useContext } from "react";

import DataTable from "react-data-table-component";
import DesignerDropdown from "../Dropdown/DesignerDropdown";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/Admin.context";
// import Link from "next/link";

const DashboardCard5 = () => {
  const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);

  const [detectChange, setDetectChange] = useState(1);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.primaryPhone,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.city + ", " + row.state,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            onChange={(event) => handlStatusChange(event, row._id)}
            defaultChecked={row.status}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.99px] after:left-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-ascent"></div>
        </label>
      ),
    },
    {
      name: "Verification",
      cell: (row) => (
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            onChange={(event) => handleVerificationChange(event, row._id)}
            defaultChecked={row.isverified}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.99px] after:left-[2.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-ascent"></div>
        </label>
      ),
    },
    {
      name: "Action",
      cell: (row) => <DesignerDropdown id={row._id} />,
    },
  ];

  const handlStatusChange = (event, id) => {
    const data = {
      id: id,
      status: event.target.checked,
    };
    axios
      .post(
        `${BASE_URL}/api/v1/admin/updateDesigner`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${currentAdmin.accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.data.statusCode == 200) {
          toast.success("Changes Saved");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occured");
      });
  };

  const handleVerificationChange = (event, id) => {
    const data = {
      id: id,
      isverified: event.target.checked,
    };
    axios
      .post(
        `${BASE_URL}/api/v1/admin/updateDesigner`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${currentAdmin.accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.data.statusCode == 200) {
          toast.success("Moved to Verified Designers");
          setDetectChange(detectChange + 1);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occured");
      });
  };

  const [designers, setDesigners] = useState([]);

  const [filtredDesigners, setFiltredDesigner] = useState([]);

  useEffect(() => {
    axios
      .post(
        `${BASE_URL}/api/v1/admin/getDesigner`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentAdmin.accessToken}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.results.filter(({ isverified }) => {
          return isverified == false;
        });
        setDesigners(data);
        setFiltredDesigner(data);
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occured");
      });
  }, [detectChange]);

  const handleSearch = (event) => {
    let query = event.target.value.toLowerCase();
    const search = designers.filter((designer) => {
      return (
        designer.name.toLowerCase().includes(query) ||
        designer.email.toLowerCase().includes(query) ||
        designer.primaryPhone.toLowerCase().includes(query) ||
        designer.street.toLowerCase().includes(query) ||
        designer.city.toLowerCase().includes(query) ||
        designer.pincode.toLowerCase().includes(query) ||
        designer.state.toLowerCase().includes(query) ||
        designer.country.toLowerCase().includes(query)
      );
    });
    setFiltredDesigner(search);
  };

  return (
    <React.Fragment>
      <figure className="shadow-xl rounded-md overflow-y-visible border tablet:col-span-3 sm:col-span-1">
        <div className="p-6 bg-white grid tablet:grid-cols-2 sm:grid-cols-1 justify-between gap-5">
          <div>
            <h1 className="font-semibold text-lg mb-1">Unverified Designers</h1>
            <p className="text-xs text-slate-500">
              List of all unverified designers
            </p>
          </div>
          <div className="flex justify-end">
            <input
              onKeyUp={(event) => handleSearch(event)}
              type="search"
              className="input-md tablet:w-min sm:w-full"
              placeholder="Search Designer"
            />
          </div>
        </div>
        <div className="p-0 bg-slate-100 border-t table-div">
          <DataTable columns={columns} data={filtredDesigners} pagination />
        </div>
      </figure>
    </React.Fragment>
  );
};

export default DashboardCard5;
