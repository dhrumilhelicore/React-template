import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Page from "../components/Page";

const Server = () => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const user = {
    avatar: "/static/mock-images/avatars/cloud-computing.jpg",
  };

  const servers = [
    {
      value: "Apache",
      label: "Apache",
    },
    {
      value: "Nginx",
      label: "Nginx",
    },
    {
      value: "Microsoft's Web Server",
      label: "Microsoft's Web Server",
    },
  ];

  const states = [
    {
      value: "Apache",
      label: "Apache",
    },
    {
      value: "Nginx",
      label: "Nginx",
    },
    {
      value: "Microsoft's Web Server",
      label: "Microsoft's Web Server",
    },
  ];

  const applications = [
    {
      value: "React",
      label: "React",
    },
    {
      value: "Angular",
      label: "Angular",
    },
    {
      value: "HTML",
      label: "HTML",
    },
  ];

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <Page title="Dashboard : Server">
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Connect server
          </Typography>

          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      src={user.avatar}
                      sx={{
                        height: 250,
                        mb: 2,
                        width: 250,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <form autoComplete="off" noValidate>
                <Card>
                  <CardContent sx={{ padding: "2rem" }}>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        <TextField
                          fullWidth
                          label="Select Server"
                          name="server"
                          onChange={handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={values.server}
                          variant="outlined"
                        >
                          {servers.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <TextField
                          fullWidth
                          label="Select Tech Stack"
                          name="type"
                          onChange={handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={values.type}
                          variant="outlined"
                        >
                          {states.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <TextField
                          fullWidth
                          label="Select Application"
                          name="application"
                          onChange={handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={values.application}
                          variant="outlined"
                        >
                          {applications.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <LoadingButton
                      color="primary"
                      variant="contained"
                      onClick={onSubmit}
                      loading={loading}
                    >
                      Process
                    </LoadingButton>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
};

export default Server;
