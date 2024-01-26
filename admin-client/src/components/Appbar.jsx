import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail"
import axios from 'axios';
import { BASE_URL } from "../config.js";
// import { useHistory } from 'react-router-dom';



function Appbar({ }) {
    // const history = useHistory();

    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    if (userLoading) {
        return <></>
    }

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px", // Adjusted padding
            margin: 0,
            zIndex: 1,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
        }}>
            <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10, display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                navigate("/addcourse")
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                navigate("/courses")
                            }}
                        >Courses</Button>
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
                                setUser({
                                    isLoading: false,
                                    userEmail: null,
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
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px", // Adjusted padding
            margin: 0,
            zIndex: 1,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
        }}>
            <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}

export default Appbar;