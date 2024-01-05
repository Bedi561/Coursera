import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import { useEffect } from "react";
import path from 'path';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.Node_ENV === 'production') disableReactDevTools

function App() {
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
                    <Routes>
                        <Route path={"/"} element={<FirstPage />} />
                        <Route path={"/addcourse"} element={<AddCourse />} />
                        <Route path={"/course/:courseId"} element={<Course />} />
                        <Route path={"/courses"} element={<Courses />} />
                        <Route path={"/signin"} element={<Signin />} />
                        <Route path={"/signup"} element={<Signup />} />
                        <Route path={"/me"} element={<Landing />} />
                        <Route path={"/me1"} element={<Landing2 />} />
                    </Routes>
                </Router>
            </div>
        </RecoilRoot>
    );
}



function InitUser() {
    const setUser = useSetRecoilState(userState);

    const init = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                });
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                });
            }
        } catch (e) {
            setUser({
                isLoading: false,
                userEmail: null
            });
        } 
    };

    useEffect(() => {
        // Check if the current route is /me before initializing the user
            console.log("Initializing user...");
            init();
        
    }, []);

    return <></>;
}

export default App;
