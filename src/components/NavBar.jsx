"use client"
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation'

const pages = ['home', 'about', 'contact'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const router = useRouter();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (route) => {
        setAnchorElNav(null);
        if (route) {
            if (route === 'home') {
                router.push('/')
            } else {
                router.push(`/${route}`);
            }
        }
    };

    const Logo = () => {
        return (<img src={"/tackleTheToadLogo.png"} width={"70"}/>)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Box sx={{ flex: 1 }} />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => { handleCloseNavMenu(); }}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => { handleCloseNavMenu(page); }}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => { handleCloseNavMenu(page); }}
                                sx={{ my: 2, color: 'white', display: 'block', marginLeft: '1rem' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;