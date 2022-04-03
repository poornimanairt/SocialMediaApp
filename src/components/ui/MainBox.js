import { Box } from "@mui/material";
import React from "react";

const MainBox = (props) => {
    const drawerWidth = 80;
    return (
        <Box
            component="main"
            sx={{
                p: 3,
                flexGrow: 1,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { xs: 0, sm: 10 },
            }}
        >
            {props.children}
        </Box>
    );
};

export default MainBox;
