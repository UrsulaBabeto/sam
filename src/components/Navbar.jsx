import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material/Box";
import { useHistory } from "react-router-dom";

const pages = [
  {
    page: "Pedaçinhos de Nós 2",
    link: "/sobre-nos",
  },
  {
    page: "Presentes",
    link: "/lista-presentes",
  },
  {
    page: "Confirmar presença",
    link: "/confirmar-presença",
  },
  {
    page: "Cerimônia",
    link: "/cerimonia",
  },
  {
    page: "Mensagem aos noivos",
    link: "/mensagem-noivos",
  },
];

function Navbar() {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    history.push(link);

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#4a044e",
        height: "80px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="span"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inter",
              fontWeight: 500,
              color: "#f0abfc",
              textAlign: "center",
            }}
          >
            {" "}
            15.12.2024 <br />
            save the date
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#"
            sx={{
              ml: 20,
              display: { xs: "none", md: "flex" },
              fontFamily: "inter",
              fontWeight: 700,
              color: "#fdf4ff",
              textDecoration: "none",
              textShadow: "0 .5px 2px #475569",
            }}
          >
            Samuel & Anna
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#64748b"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "#334155" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "inter",
              fontWeight: 700,
              letterSpacing: ".08rem",
              color: "#fdf4ff",
              textDecoration: "none",
              textShadow: "1px 1.5px 4px #d946ef",
            }}
          >
            Samuel & Anna
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              alignContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#f0abfc" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu(page.link)}>
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
