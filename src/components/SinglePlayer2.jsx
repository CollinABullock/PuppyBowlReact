import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NavBar from './NavBar';

import { motion } from "framer-motion"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Collin Bullock
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

async function fetchSinglePlayer(id) {
  console.log(id);
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM/players/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}


export default function SinglePlayer() {
  const [player, setPlayer] = useState([]);

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();



 useEffect(() => {
  async function getSinglePlayer() {
    const response = await fetchSinglePlayer(id);
    console.log("response", response);
    setPlayer(response.data.player);
  }
  getSinglePlayer()
 }, [])




  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
      <Grid container component="main" sx={{ height: '60%' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${player.imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "20px",
            borderRadius: "30px"
          }}
        />
       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: "#491900", color: "whitesmoke", borderRadius: "30px" }}>
          <Box sx={{ textAlign: 'center', width: '80%', maxWidth: '70%' }}> 
            <Typography component="h2" variant="h2" sx={{fontFamily: "GoodBoy"}}>
              {player.name} is a {player.breed} and is a very good boy!
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
      </motion.div>
      <Box sx={{ bgcolor: '#d62828', p: 6, marginTop: "10px" }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
         Puppy Bowl
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Woof Woof!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}