import React, {useState} from "react";

import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloudIcon from '@mui/icons-material/Cloud';

const pages = [
    {"link":"Search", "name":"Search"},
    {"link":"Cities", "name":"City List"},
    {"link":"Contact", "name":"Contact"}
];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleOpenNavMenu}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem
                                key={page.link}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={`/${page.link}`}
                            >
                                <Typography textAlign="center">
                                    {page.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <CloudIcon sx={{ mr: 1 }} ></CloudIcon>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, my: 2, color: "white", textDecoration: "none" }}
                    component={Link}
                    to="/"
                >
                    Weather Watcher
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {pages.map((page) => (
                        <Button
                            key={page.link}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: "white", display: "block" }}
                            component={Link}
                            to={`/${page.link}`}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        
            </>);

}



export default Header;