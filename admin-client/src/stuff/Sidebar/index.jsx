import React, { useContext, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
import {
  FaTv,
  FaTools,
  FaUserTie,
  FaQuoteLeft,
  FaPaperPlane,
  FaImages,
} from "react-icons/fa";
import { MdCategory, MdStyle } from "react-icons/md";
import { AiFillMessage, AiFillProject, AiFillTags } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri"
import { AdminContext } from "../../context/Admin.context";

const Sidebar = ({ state }) => {
  const { currentAdmin } = useContext(AdminContext);

  const [visibility, SetVisibility] = useState("hidden");
  const router = useRouter();

  return (
    <React.Fragment>
      <aside id="sidebar" className={state ? "active" : null}>
        <div className="sticky top-0 left-0 h-[100%] flex flex-col justify-start shadow-xl bg-white border-r py-5 px-8 space-y-5">
          <div className="text-center mt-2">
            <h1 className="text-lg font-bold mb-1">Admin Panel</h1>
          </div>
          <hr />
          <ul className="flex flex-col w-full mb-auto space-y-7 text-black text-opacity-50 tracking-widest font-medium text-sm">
            <li>
              <h1 className="text-sm font-semibold text-slate-700">
                Important
              </h1>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/dashboard"}
                className={`flex items-center ${router.pathname.includes("dashboard") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaTv size={18} />
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/designer"}
                className={`flex items-center ${router.pathname.includes("designer") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaUserTie size={18} />
                <span>Designers</span>
              </Link>
            </li>


            

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/unverified"}
                className={`flex items-center ${router.pathname.includes("unverified") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaUserTie size={18} />
                <span>Unverified Designers</span>
              </Link>
            </li>

            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                <Link
                  href={"/admin/users"}
                  className={`flex items-center ${router.pathname.includes("users")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <FaUserTie size={18} />
                  <span>Users</span>
                </Link>
              </li>
            ) : null}

            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                <Link
                  href={"/admin/subscription"}
                  className={`flex items-center ${router.pathname.includes("subscription")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <AiFillTags size={18} />
                  <span>Subscription</span>
                </Link>
              </li>
            ) : null}

            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                <Link
                  href={"/admin/messages"}
                  className={`flex items-center ${router.pathname.includes("messages")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <RiMessage2Fill size={18} />
                  <span>Messages</span>
                </Link>
              </li>
            ) : null}

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/enquiry"}
                className={`flex items-center ${router.pathname.includes("enquiry") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <AiFillMessage size={18} />
                <span>Enquires</span>
              </Link>
            </li>

            {/* Intro Section */}
            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                <Link
                  href={"/admin/introSection"}
                  className={`flex items-center ${router.pathname.includes("introSection")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <FaQuoteLeft size={18} />
                  <span>Main Banner</span>
                </Link>
              </li>
            ) : null}


            {currentAdmin.role === "SUPERADMIN" ? (
              <li>
                <Link
                  href="/admin/numbers"
                  className={`flex items-center ${router.pathname.includes("numbers") ? "text-ascent" : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <FaQuoteLeft size={18} />
                  <span>Numbers</span>
                </Link>
              </li>
            ) : null}





            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                {/* {console.log("Rendering link for SUPERADMIN")} */}
                <Link
                  href={"/admin/freelanceImage"}
                  className={`flex items-center ${router.pathname.includes("freelanceImage")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <FaImages size={18} />
                  <span>Freelance Image</span>
                </Link>
              </li>
            ) : null}






            {currentAdmin.role == "SUPERADMIN" ? (
              <li>
                <Link
                  href={"/admin/quotation-web"}
                  className={`flex items-center ${router.pathname.includes("admin-access")
                    ? "text-ascent"
                    : null
                    } justify-start space-x-3 hover:text-ascent`}
                >
                  <FaUserTie size={18} />
                  <span>QuotationWeb</span>
                </Link>
              </li>
            ) : null}


            



            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/testimonial"}
                className={`flex items-center ${router.pathname.includes("testimonial") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaQuoteLeft size={18} />
                <span>Testimonial</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/project"}
                className={`flex items-center ${router.pathname.includes("project") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <AiFillProject size={18} />
                <span>Projects</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/category"}
                className={`flex items-center ${router.pathname.includes("category") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <MdCategory size={18} />
                <span>Categories</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/design-style"}
                className={`flex items-center ${router.pathname.includes("design-style")
                  ? "text-ascent"
                  : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <MdStyle size={18} />
                <span>Design Styles</span>
              </Link>
            </li>


            <li>
              <Link
                href={"/admin/admin-access"}
                className={`flex items-center ${router.pathname.includes("admin-access")
                  ? "text-ascent"
                  : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaUserTie size={18} />
                <span>Admin Access</span>
              </Link>
            </li>

            <li>
              <h1 className="text-sm font-semibold text-slate-700">Others</h1>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/section-gallery"}
                className={`flex items-center ${router.pathname.includes("section-gallery")
                  ? "text-ascent"
                  : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaImages size={18} />
                <span>Section Gallery</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/gallery"}
                className={`flex items-center ${router.pathname == "/admin/gallery" ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaImages size={18} />
                <span>Gallery</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/newsletter"}
                className={`flex items-center ${router.pathname.includes("newsletter") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaPaperPlane size={18} />
                <span>Newsletter</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link
                href={"/admin/setting"}
                className={`flex items-center ${router.pathname.includes("setting") ? "text-ascent" : null
                  } justify-start space-x-3 hover:text-ascent`}
              >
                <FaTools size={18} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
