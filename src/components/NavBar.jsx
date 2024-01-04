import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { motion } from "framer-motion"

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

const defaultTheme = createTheme({
  typography: {
    fontFamily: "GoodBoy"
  },
});


const pages = [
  { title: "See All Doggies", url: "/", id: "1" },
  { title: "Add Your Doggy", url: "/newPlayerForm", id: "2" }
];


export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
<ThemeProvider theme={defaultTheme}>
    <AppBar position="static" sx={{backgroundColor: "#d62828", borderRadius: "100px", margin: "0 auto", marginTop: "10px", width: "90%", padding: "10px"}}>
      <Container maxWidth="50%" sx={{alignContent: "center", borderRadius: "100px"}} >
        <Toolbar disableGutters sx={{maxWidth: "80%"}} >
        <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
       <img
            src="https://i.ibb.co/yk7m6ng/cute-dog-transparent.png"
            alt="puppy-bowl"
            style={{
              maxWidth: "30%",
              height: "auto", // Maintain aspect ratio
              borderRadius: "30px",
              margin: "0 auto",
              display: "block", // Ensures the image is centered properly
            }}
          />
         </motion.div>

          <Box
          
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, backgroundColor: "#d62828",   color: "antiquewhite", maxWidth: "50%"  }}>
              <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
            <IconButton
              
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{marginLeft: "auto", padding: "20px"}}
            >
              <MenuIcon />
              
            </IconButton>
            </motion.div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, fontSize: "1em"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontFamily={"GoodBoy"} ><a href={page.url}>{page.title}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center", fontSize: "2em", fontWeight: "20", color: "#000814"}, backgroundColor: "#d62828", padding: "30px" }}>
              
              <Button
                href='/'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: "1em", fontFamily: "GoodBoy", maxWidth: "50%", marginRight: "300px"}}
              >
               See All Doggies!
              </Button>
              <Button
                href='/newPlayerForm'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, maxWidth: "50%", color: 'white', display: 'block', fontSize: "1em", fontFamily: "GoodBoy"}}
              >
               Add Your Doggy!
              </Button>
              
          </Box>
          </motion.div>
        </Toolbar>
      </Container>
      
    </AppBar>
    </ThemeProvider>
  );
}
