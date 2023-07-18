import { Container, Grid } from "@mui/material";
import LoginPageCard from "./LoginPageCard";
import LoginPageImage from "./LoginPageImage";
import LoginPageLogo from "./LoginPageLogo";

const LoginPage = () => {
  return (
    <div>
      <LoginPageImage />
      <Container style={{ maxWidth: 375, maxHeight: 679, padding: "0px" }}>
        <Grid direction="column" container>
          <Grid style={{ marginTop: 150 }} item xs={12} sm={12} md={6} lg={6}>
            <LoginPageLogo />
          </Grid>
          <Grid style={{ marginTop: 64 }} item xs={12} sm={12} md={6} lg={6}>
            <LoginPageCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
