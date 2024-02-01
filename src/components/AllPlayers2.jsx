import { useState, useEffect } from "react";
import { FetchAllPlayers } from "../API/FetchAllPlayers";
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./NavBar";
import { motion } from "framer-motion"

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(searchParams);

  useEffect (() => {
    async function getAllPlayers() {
      const response = await FetchAllPlayers();
      if (response.success) {
        setPlayers(response.data.players);
      } else {
        setError(response.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const displayedPlayers = searchParams ? players.filter((player) =>
    player.name.toLowerCase().includes(searchParams)
  ) : players;

  console.log(displayedPlayers);
  console.log(players);

  return (
<ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
     
        <Box
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:"center", width: "100%", borderRadius: "30px", margin: "auto"}}
        >
          <Container sx={{padding: "20px"}}>
       
            <div className="searchBar" >
  <label style={{fontSize: "3em"}}>
    Search <br />
    <input
      type="text"
      placeholder="search"
      onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
    />
  </label>
</div>


          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
        
          <Grid container spacing={4}>
            {!error && displayedPlayers.map((players) => (
              <Grid item key={players} xs={12} sm={4} md={4}>
                   <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
          animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
          transition={{ duration: 1 }} // Animation duration
        >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#491900", borderRadius: "30px" }}
                >
          
               <CardMedia
  component="div"
  sx={{
    16:9,
    pt: '56.25%',
    height: '400px', 
    width: '100%', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: "30px"
  }}
  image={players.imageUrl ? players.imageUrl : 'https://ik.imagekit.io/smoregear/woman%20hiking.jpg?updatedAt=1700852561792'}
/>

<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
  <Typography
    gutterBottom
    variant="h5"
    component="h2"
    style={{
      fontFamily: 'GoodBoy',
      color: 'whitesmoke',
      textAlign: 'center',
      fontSize: '2em',
      margin: 'auto', // Center the text horizontally
      height: "100px"
    }}
  >
    {players.name}
  </Typography>
</CardContent>
                  <CardActions sx={{display: "flex", justifyContent: "center"}}>

                    <Button size="small" href={`/${players.id}`} sx={{fontFamily: "GoodBoy", color: "white"}}>More Details</Button>
              
                  </CardActions>
                </Card>
                </motion.div>
              </Grid>
              
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}