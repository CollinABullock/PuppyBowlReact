import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';


const pages = ["See All Doggies", 'Add Your Doggy'];


export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static" sx={{backgroundColor: "#d62828", borderRadius: "100px", margin: "10px", width: "95vw", padding: "10px"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
         <img src="https://i.ibb.co/G0jDcpS/puppy-bowl.jpg" alt="log" width={400}  />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, backgroundColor: "#d62828",   color: "antiquewhite" }}>
            <IconButton
              size="large"
              aria-label="Menu"
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'comic-sans',
              fontWeight: 700,
              fontSize: "3rem",
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Puppy Bowl - Woof Woof!
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em", fontWeight: "20", color: "#000814"}, backgroundColor: "#d62828", padding: "30px" }}>
              <Button
                href='/'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "1em", fontFamily: "Roboto" }}
              >
               See All Doggies!
              </Button>
              <Button
                href='/newPlayerForm'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "1em", fontFamily: "Roboto" }}
              >
               Add Your Doggy!
              </Button>
          </Box>

        </Toolbar>
      </Container>
      
    </AppBar>
  );
}
