import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Landing2 from "./components/Landing2.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses";
import Course from "./components/Course";
import { FirstPage } from './components/FirstPage.jsx';
import { Landing } from "./components/Landing.jsx";
import { userState } from "./store/atoms/user.js";
import {
    RecoilRoot,
    useSetRecoilState
} from 'recoil';
import axios from "axios";
import { BASE_URL } from "./config.js";
import Dashboard from './componentsUser/Dashboard.jsx';
import SignupUSER from './componentsUser/SignupUSER.jsx';
import SigninUSER from './componentsUser/SigninUSER.jsx';
import { adminState } from "./store/atoms/admin.js";
import AppbarUSER from './componentsUser/AppbarUSER.jsx'; 
import Admin from './components/Admin.jsx';
import Students from './components/Students.jsx';
// import SalesRevenue from './components/SalesRevenue.jsx';
import Dash from './components/Dash.jsx';

function App() {
    // const location1 = useLocation(); // Get the current location

  // Conditionally render the AppbarUSER component based on the path
//   const renderAppbarUser = location.pathname.startsWith('/user') && <AppbarUSER />;

    return (
        <RecoilRoot>
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#eeeeee"
            }}
            >
               <Router>
                    <InitUser />
                    {/* {renderAppbarUser} */}
                    <Routes>
                        <Route path={"/"} element={<FirstPage />} />
                        <Route path={"/admin/addcourse"} element={<AddCourse />} />
                        <Route path={"/admin/student-management"} element={<Students />} />
                        <Route path={"/admin/dashboard"} element={<Dash />} />
                        <Route path={"/admin/main"} element={<Admin />} />
                        <Route path={"/admin/Students"} element={<Students />} />
                        {/* <Route path={"/admin/SalesRevenue"} element={<SalesRevenue />} /> */}
                        <Route path={"/admin/course/:courseId"} element={<Course />} />
                        <Route path={"/admin/courses"} element={<Courses />} />
                        <Route path={"/admin/signin"} element={<Signin />} />
                        <Route path={"/admin/signup"} element={<Signup />} />
                        <Route path={"/admin/me"} element={<Landing />} />
                        <Route path={"/user/me1"} element={<Landing2 />} />
                        <Route path={"/user/dashboard"} element={<Dashboard />} />
                        <Route path={"/user/UserSignup"} element={<SignupUSER />} />
                        <Route path={"/user/UserSignin"} element={<SigninUSER />} />
                    </Routes>
                </Router>


                
            </div>
        </RecoilRoot>
    );
}

function InitUser() {
    const setUser = useSetRecoilState(userState);
    const setAdmin = useSetRecoilState(adminState);
    const location = useLocation();

    useEffect(() => {
        const initUser = async () => {
            try {
                console.log("Initiating user data fetch...");
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("No token found. Aborting user data initialization.");
                    setUser({ isLoading: false, userEmail: null });
                    return;
                }

                // Set initial state
                setUser({ isLoading: true, userEmail: null });

                const response = await axios.get(`${BASE_URL}/user/me`, {
                    headers: {  "Authorization": "Bearer " + token }
                });

                console.log("User data response:", response.data);

                if (response.data.username) {
                    setUser({ isLoading: false, userEmail: response.data.username });
                    console.log("User data initialized successfully.");
                    // Only initialize admin data if the user is authenticated
                    initAdmin(token);
                } else {
                    setUser({ isLoading: false, userEmail: null });
                    console.log("User data not found in response.");
                }
            } catch (error) {
                console.error("Error initializing user data:", error);
                setUser({ isLoading: false, userEmail: null });
            }
        };

        const initAdmin = async (token) => {
            try {
                console.log("Initiating ADMIN data fetch...");
                const response = await axios.get(`${BASE_URL}/admin/me`, {
                    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
                });

                console.log("Admin data response:", response.data);

                if (response.data.username) {
                    setAdmin({ isLoading: false, adminEmail: response.data.username });
                    console.log("Admin data initialized successfully.");
                } else {
                    setAdmin({ isLoading: false, adminEmail: null });
                    console.log("Admin data not found in response.");
                }
            } catch (error) {
                console.error("Error initializing admin data:", error);
                setAdmin({ isLoading: false, adminEmail: null });
            }
        };

        if (location.pathname.startsWith("/user")) {
            initUser();
        }
    }, [location, setUser, setAdmin]);

    return null;
}


export default App;
