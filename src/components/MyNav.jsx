import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material';
import { green, lime, purple, teal } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      primary: teal,
      secondary: purple,
    },
  });

export default function MyNav(){

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', mb: 2}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/team">Team</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}