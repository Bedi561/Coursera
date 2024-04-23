import React from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail"
import axios from 'axios';
import { BASE_URL } from "../config.js";

function AppbarUSER() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  // console.log("User email:", userEmail);

  const handleLogout = async () => {
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
      console.error('Error logging out:', error);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      margin: 0,
      zIndex: 1,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}>
      <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
        navigate("/");
      }}>
        <Typography variant={"h6"}>Coursera</Typography>
      </div>

      <div style={{ display: "flex" }}>
        {userEmail ? (
          <Button
            variant={"contained"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <div style={{ marginRight: 10 }}>
              <Button
                variant={"contained"}
                onClick={() => {
                  navigate("/UserSignup");
                }}
              >Signup</Button>
            </div>
            <div>
              <Button
                variant={"contained"}
                onClick={() => {
                  navigate("/UserSignin");
                }}
              >Signin</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AppbarUSER;
