import { Avatar, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import MainBox from "../components/ui/MainBox";

const Notifications = () => {
    const classes = useStyles();
    const notif = useSelector((state) => state.cmt.comment);

    return (
        <MainBox>
            <Typography variant="h4">Notifications</Typography>
            {notif.length > 0 ? (
                <Box className={classes.border}>
                    {notif.map((item, ind) => (
                        <Box className={classes.box}>
                            <Avatar
                                alt="user notif"
                                src={item.img}
                                sx={{ width: 76, height: 76 }}
                            />
                            <Typography variant="body2" sx={{ pl: 2 }}>
                                <b>{item.name}</b> commented on your post
                            </Typography>
                        </Box>
                    ))}
                </Box>
            ) : (
                <Typography>No New Notifications</Typography>
            )}
        </MainBox>
    );
};

export default Notifications;

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: "#f4faff",

        padding: 20,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
    border: {
        border: "1px solid lightgrey",
        marginTop: 10,
    },
}));
