import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"

export default function Footer() {

  function Copyright(props) {
    return (
      <a href="http://www.collinbullock.com">
      <Typography variant="body2" color="text.secondary" align="center" fontFamily={"GoodBoy"} fontSize={"1em"}{...props}>
        {'Copyright © '}
          Collin A. Bullock
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </a>
    );
  }

  return (
    <>
    <Box sx={{ bgcolor: '#d62828', p: 6, fontSize: "2em" }} component="footer">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
    <Typography variant="h6" align="center" fontFamily={"GoodBoy"} gutterBottom>
       Puppy Bowl
      </Typography>
      <Copyright />
      </motion.div>
    </Box>
    </>)
}