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
  image={players.imageUrl ? players.imageUrl : 'data:image/jpeg;base64,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2'}
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