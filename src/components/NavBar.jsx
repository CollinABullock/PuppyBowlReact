import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { motion } from "framer-motion"

import Button from '@mui/material/Button';

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
    <AppBar position="static" sx={{backgroundColor: "#d62828", borderRadius: "100px", margin: "0 auto", width: "60%", padding: "10px", marginTop: "10px"}}>
      <Container maxWidth="xl" sx={{alignContent: "center"}} >
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    style={{ maxWidth: "20%", flexBasis: "20%" }}
  >
    <img
      src="https://i.ibb.co/yk7m6ng/cute-dog-transparent.png"
      alt="puppy-bowl"
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "30px",
        display: "block",
      }}
    />
  </motion.div>

  <Box
    sx={{
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' },
      backgroundColor: "#d62828",
      color: "antiquewhite",
      maxWidth: "80%", // Adjust the width of the button container
      flexBasis: "80%", // Adjust the flexBasis of the button container
    }}
  >
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
        sx={{ padding: "20px" }}
      >
        <MenuIcon />
      </IconButton>
    </motion.div>
    {/* Rest of your Menu code */}
  </Box>

  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: "flex-end",
        fontSize: "2em",
        fontWeight: "20",
        color: "#000814",
        backgroundColor: "#d62828",
        margin: "3px"
      }}
    >
      <Button
        href='/'
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block', fontSize: "1em", fontFamily: "GoodBoy", width: "100%" }}
      >
        See All Doggies!
      </Button>
      <Button
        href='/newPlayerForm'
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block', fontSize: "1em", fontFamily: "GoodBoy", width: "90%", borderRadius: "100px" }}
      >
        Add a Doggy!
      </Button>
    </Box>
  </motion.div>
</Toolbar>

      </Container>
      
    </AppBar>
    </ThemeProvider>
  );
}
