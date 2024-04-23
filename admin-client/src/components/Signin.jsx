import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user.js";
import { adminState } from "../store/atoms/admin.js";
import { isAdminLoading } from "../store/selectors/isAdminLoading.js";
import { adminEmailState } from "../store/selectors/adminEmail.js";
import { Button, TextField, Card, Typography } from "@mui/material";
import Appbar from './Appbar.jsx';
import { BASE_URL } from "../config.js";


function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const setAdmin = useSetRecoilState(adminState);
    const loading = useRecoilValue(isAdminLoading);
    const adminEmail = useRecoilValue(adminEmailState);

    const handleSignin = async () => {
        try {
            const res = await axios.post(
                `${BASE_URL}/admin/login`,
                {
                    username: email,
                    password: password
                },
                {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );
            const data = res.data;

            localStorage.setItem("token", data.token);
            setAdmin({
                isLoading: false,
                adminEmail: email
            });
            navigate("/admin/main");
        } catch (error) {
            console.error("Signin error:", error);
            // Handle signin error (e.g., display error message)
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    } else if (adminEmail) {
        navigate("/admin/main");
    }

    return (
        <>
            <Appbar />
            <div>
                <div style={{ paddingTop: 150, marginBottom: 10, display: "flex", justifyContent: "center" }}>
                    <Typography variant={"h6"}>
                        Welcome to Coursera. Sign up below
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
                        <TextField
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth={true}
                            label="Email"
                            variant="outlined"
                        />
                        <br/><br/>
                        <TextField
                            onChange={(event) => setPassword(event.target.value)}
                            fullWidth={true}
                            label="Password"
                            variant="outlined"
                            type="password"
                        />
                        <br/><br/>
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleSignin}
                        >
                            Signin
                        </Button>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Signin;
