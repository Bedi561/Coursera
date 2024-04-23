import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isAdminLoading } from "../store/selectors/isAdminLoading";
import { adminEmailState } from "../store/selectors/adminEmail";
import axios from 'axios';
import { BASE_URL } from "../config.js";
import { adminState } from "../store/atoms/admin";

function Appbar({ }) {
    const navigate = useNavigate();
    const adminLoading = useRecoilValue(isAdminLoading);
    const adminEmail = useRecoilValue(adminEmailState);
    const setAdmin = useSetRecoilState(adminState);

    if (adminLoading) {
        return <></>;
    }

    if (adminEmail) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px", // Adjusted padding
                margin: 0,
                zIndex: 1,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10, display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                            <Button onClick={() => navigate("/admin/addcourse")}>Add course</Button>
                        </div>

                        <div style={{ marginRight: 10 }}>
                            <Button onClick={() => navigate("/admin/courses")}>Courses</Button>
                        </div>

                        <Button
                            variant={"contained"}
                            onClick={async () => {
                                try {
                                    await axios.delete(`${BASE_URL}/admin/courses`, {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                                        },
                                    });

                                    // Logout logic
                                    localStorage.removeItem('token');
                                    setAdmin({
                                        isLoading: false,
                                        adminEmail: null,
                                    });

                                    // Redirect to the '/' page
                                    navigate('/');
                                } catch (error) {
                                    console.error(error);
                                }
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px", // Adjusted padding
                margin: 0,
                zIndex: 1,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
            }}>
                <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
                    <Typography variant={"h6"}>Coursera</Typography>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button variant={"contained"} onClick={() => navigate("/admin/signup")}>Signup</Button>
                    </div>
                    <div>
                        <Button variant={"contained"} onClick={() => navigate("/admin/signin")}>Signin</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appbar;
