"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PAGES = ["Home", "Register", "Volunteer", "About the Race", "Contact"];
const LINKS = {
  Home: "",
  Register: "registration",
  "About the Race": "about",
  Volunteer: 'volunteer-registration',
  Contact: "contact",
};

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const router = useRouter();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page in LINKS) {
      router.push(`/${LINKS[page]}`);
    }
  };

  const Logo = () => {
    return <Image src={"/toadLogo.webp"} width={"120"} height={"70"} />;
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgb(10,70,98)",
        background:
          "linear-gradient(150deg, rgba(10,70,98,1) 0%, rgba(43,114,144,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "6.5rem" }}>
          <Logo />
          <Typography
            fontSize={"2rem"}
            color="white"
            variant="h2"
            sx={{ pl: "1rem", pr: "2rem" }}
          >
            Tackle the Toad
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {
                handleCloseNavMenu();
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ "&:hover": { color: "#fefefe" } }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu(page);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  marginLeft: "1rem",
                }}
              >
                <Typography
                  sx={{ color: "white", "&:hover": { color: "#bcdede" } }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
