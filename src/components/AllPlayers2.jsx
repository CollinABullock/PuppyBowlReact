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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Collin A. Bullock
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
      <NavBar />
      <main>
      <Typography variant="h1" component="h1" sx={{paddingTop: "20px", textAlign: 'center', fontSize: "3rem"}}>
                      {/* {Category} */}
                    </Typography>
        <Box
         style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign:"center", width: "75%", borderRadius: "20px", margin: "auto"}}
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
              <Grid item key={players} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#491900", }}
                >
               <CardMedia
  component="div"
  sx={{
    // 16:9
    pt: '56.25%',
  }}
  image={players.imageUrl ? players.imageUrl : 'https://ik.imagekit.io/smoregear/woman%20hiking.jpg?updatedAt=1700852561792'}
/>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: "GoodBoy", color: "whitesmoke", textAlign: "center", fontSize: "2em"}}>
                      {players.name}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display: "flex", justifyContent: "center"}}>

                    <Button size="small" href={`/${players.id}`} sx={{fontFamily: "GoodBoy", color: "white"}}>More Details</Button>
              
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#d62828', p: 6 }} component="footer">
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
      {/* End footer */}
    </ThemeProvider>
  );
}