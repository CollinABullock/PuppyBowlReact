import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Collin A. Bullock
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateDoggy() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createDoggy(name, breed, image);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


   async function createDoggy(name, breed, image) {
     try {
         const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-AM/players", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 name: name,
                 breed: breed,
                 imageUrl: image,
             })
         });
         
     
     } catch (error) {
         console.error("Error creating a post:", error);
         throw error;
     }
 }

 
 const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleBreedChange = (e) => {
  setBreed(e.target.value);
};

const handleImageChange = (e) => {
  setImage(e.target.value);
};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <>
    <NavBar />
    {/* <ThemeProvider theme={defaultTheme} > */}
    <Container component="main" maxWidth="xs" >
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Show us your good boy!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleNameChange}
                  id="name"
                  label="What is your doggy's name?"
                  name="name"
                  autoComplete="name"
                  className='inputField'
                  InputLabelProps={{
                    style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' } // Change input text color to white
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleBreedChange}
                  id="breed"
                  label="What is your doggy's breed?"
                  name="breed"
                  autoComplete="breed"
                  className='inputField'
                  InputLabelProps={{
                    style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' } // Change input text color to white
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleImageChange}
                  id="image"
                  label="Paste a link to your doggy's picture"
                  name="image"
                  autoComplete="image"
                  className='inputField'
                  InputLabelProps={{
                    style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' } // Change input text color to white
                    }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
            >
              Submt your doggy!
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    {/* </ThemeProvider> */}
    </>
    
    </div>
  );
}