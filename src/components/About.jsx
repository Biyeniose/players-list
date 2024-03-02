import React from 'react';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 8, marginBottom: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
