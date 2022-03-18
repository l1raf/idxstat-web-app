import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        INDEXSTAT
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;