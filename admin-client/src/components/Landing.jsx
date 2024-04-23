import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
// import { userEmailState } from "../store/selectors/userEmail";
import { isAdminLoading } from "../store/selectors/isAdminLoading.js"; // Import isAdminLoading selector
import { adminEmailState } from "../store/selectors/adminEmail"; // Import adminEmailState selector
import Appbar from "./Appbar.jsx";
import { userEmailState } from "../store/selectors/userEmail.js";

export const Landing = () => {
    const navigate = useNavigate();
    const adminLoading = useRecoilValue(isAdminLoading); // Get admin loading state
    const adminEmail = useRecoilValue(adminEmailState);
    const userEmail = useRecoilValue(userEmailState); // Get admin email
    

    console.log("User email:", userEmail);
    console.log("Admin email:", adminEmail);
    console.log("Admin loading:", adminLoading);

    return (
        <>
            <Appbar />
            <div>
                <Grid container style={{ padding: "5vw" }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <div style={{ marginTop: 100 }}>
                            <Typography variant={"h2"}>
                                Coursera Admin
                            </Typography>
                            <Typography variant={"h5"}>
                                A place to learn, earn and grow
                            </Typography>

                            {!adminLoading && !adminEmail && (
                                <div style={{ display: "flex", marginTop: 20 }}>
                                    <div style={{ marginRight: 10 }}>
                                        <Button
                                            size={"large"}
                                            variant={"contained"}
                                            onClick={() => {
                                                navigate("/admin/signup");
                                            }}
                                        >
                                            Signup
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            size={"large"}
                                            variant={"contained"}
                                            onClick={() => {
                                                navigate("/admin/signin");
                                            }}
                                        >
                                            Signin
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div></div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xzzMyezQDj4iGW1_LguFkcVs3B6PQ9mAfg&usqp=CAU"} width={"100%"} />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
