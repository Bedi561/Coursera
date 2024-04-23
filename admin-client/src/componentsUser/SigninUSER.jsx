import React, { useState } from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { BASE_URL } from '../config.js';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";
import AppbarUSER from './AppbarUSER.jsx';

function SigninUSER() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/user/login`, {
                username: email,
                password: password
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = response.data;

            localStorage.setItem("token", data.token);
            setUser({
                userEmail: email,
                isLoading: false
            });
            navigate("/user/dashboard");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <>
            <AppbarUSER />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                    paddingTop: 150,
                    marginBottom: 10,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant={"h6"}>
                        Welcome to Coursera. Sign in below
                    </Typography>
                </div>
                <Card variant={"outlined"} style={{ width: 400, padding: 20, textAlign: "center" }}>
                    <TextField
                        onChange={(event) => setEmail(event.target.value)}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                    />
                    <br /><br />
                    <TextField
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br /><br />
                    <Button
                        size={"large"}
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Sign in
                    </Button>
                    {/* New user signup line */}
                    <div style={{ marginTop: 10 }}>
                        <Typography variant="body2">
                            New user? <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/UserSignup")}>Signup</span>
                        </Typography>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default SigninUSER;
