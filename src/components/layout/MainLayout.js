import { Toolbar } from "@mui/material";
import React from "react";
import Router from "../../utils/Router";
import TopBar from "../ui/TopBar";

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <Toolbar />
            <Router />
        </>
    );
};

export default MainLayout;
