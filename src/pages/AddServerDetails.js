import { LoadingButton } from "@mui/lab";
import {
    Card,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import Page from "../components/Page";
import { APP_BASE_URL } from "../config/Setting";
import axiosInstance from "../config/axiosInstance";

const AddServerDetails = () => {

    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState("");
    const [applications, setApplications] = useState("");
    const [stack, setStack] = useState("");

    const endPoints = [
        `${APP_BASE_URL + "admin/add-update-service"}`,
        `${APP_BASE_URL + "admin/add-update-techstack"}`,
        `${APP_BASE_URL + "admin/add-update-image"}`,
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // let axiosArray = [];
        // for (const i = 0; i < numOfItems; i++) {
        //     let postData = {}
        //     postData['size'] = shoe.size
        //     postData['color'] = shoe.color
        //     let newPromise = axios({
        //         method: 'post',
        //         url: postShoe,
        //         data: postData
        //     })
        //     axiosArray.push(newPromise)
        // }
        const requestData = { "name": services, "appname": applications }
        console.log(requestData)
        axios.all(endPoints.map((endPoint) => axiosInstance.post(endPoint, requestData))).then((data) => (
            console.log("data", data)
        ))
    };

    return (
        <>
            <Page title="Dashboard : Server">
                <Container>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Add Server Details
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={12}>
                            <form autoComplete="off" noValidate>
                                <Card>
                                    <CardContent sx={{ padding: "2rem" }}>
                                        <Grid container spacing={3}>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Server Name"
                                                    name="servername"
                                                    onChange={(e) => setServices(e.target.value)}
                                                    required
                                                    value={services}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="TechStack Name"
                                                    name="techstackname"
                                                    onChange={(e) => setStack(e.target.value)}
                                                    required
                                                    value={stack}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Application Name"
                                                    name="applicationname"
                                                    onChange={(e) => setApplications(e.target.value)}
                                                    required
                                                    value={applications}
                                                    variant="outlined"
                                                />
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
                                            Submit
                                        </LoadingButton>
                                    </Box>
                                </Card>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Page>
        </>
    )
}

export default AddServerDetails