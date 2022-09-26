import { Grid, Container, Typography } from "@mui/material";
import Page from "../components/Page";
import { AppWidgetSummary } from "../sections/@dashboard/app";

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl ">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Amazon Servers"
              total={19}
              color="warning"
              icon={"ant-design:amazon-circle-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Apache Servers"
              total={12}
              color="info"
              icon={"vscode-icons:file-type-apache"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Nginx Server"
              total={11}
              color="warning"
              icon={"cib:nginx"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Microsoft Server"
              total={10}
              color="error"
              icon={"logos:microsoft-icon"}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
