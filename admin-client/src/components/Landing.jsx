import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";// NOTE
import {useRecoilValue} from "recoil";
import { userEmailState } from "../store/selectors/userEmail"
import {isUserLoading} from "../store/selectors/isUserLoading.js";
import Appbar from "./Appbar.jsx";
// import InitUser from "./InitUser.jsx";

export const Landing = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    return ( <><Appbar /> <div>
        <Grid container style={{ padding: "5vw" }}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{ marginTop: 100 }}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow
                    </Typography>

                    {!userLoading && !userEmail && <div style={{ display: "flex", marginTop: 20 }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signup");
                                } }
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signin");
                                } }
                            >Signin</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xzzMyezQDj4iGW1_LguFkcVs3B6PQ9mAfg&usqp=CAU"} width={"100%"} />
            </Grid>
        </Grid>
    </div></>
    )
}