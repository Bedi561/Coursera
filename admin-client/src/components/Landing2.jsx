import { Grid, Typography, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading.js";
import Appbar from "./Appbar.jsx";

function Landing2() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

  return (
    <>
      <Paper elevation={3} style={{ padding: 10, backgroundColor: "#ffcccb", textAlign: "center" }}>
        <Typography variant="body1" color="textSecondary">
          This section is under development.
        </Typography>
      </Paper>

      <div>
        <Grid container style={{ padding: "5vw" }}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ marginTop: 100 }}>
              <Typography variant={"h2"}>Coursera User</Typography>
              <Typography variant={"h5"}>A place to learn, earn and grow</Typography>

              {!userLoading && !userEmail && (
                <div style={{ display: "flex", marginTop: 20 }}>
                  <div style={{ marginRight: 10 }}>
                    <Button size={"large"} variant={"contained"} onClick={() => navigate("/UserSignup")}>
                      Signup
                    </Button>
                  </div>
                  <div>
                    <Button size={"large"} variant={"contained"} onClick={() => navigate("/UserSignin")}>
                      Signin
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div></div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmm0_23Ysl2ZEB7AD-b4UOOcWy9aCTqKy5iQ&usqp=CAU"} width={"100%"} alt="Under Development" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Landing2;
