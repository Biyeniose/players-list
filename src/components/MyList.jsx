import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Container, Box, Grid } from '@mui/material';

const fraudWatchPlayers = [
  'Lionel Messi',
  'Cristiano Ronaldo',
  'Neymar Jr',
  'Kylian Mbappé',
  'Robert Lewandowski',
  'Kevin De Bruyne',
  'Virgil van Dijk',
  'Mohamed Salah',
  'Sadio Mané',
  'Alisson Becker'
];

const gemWatchPlayers = [
  'Erling Haaland',
  'Jadon Sancho',
  'Phil Foden',
  'Vinicius Junior',
  'Ansu Fati',
  'Mason Mount',
  'João Félix',
  'Gianluigi Donnarumma',
  'Kai Havertz',
  'Eduardo Camavinga'
];

export default function MyList() {
  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 8, marginBottom: 8 }}>
        <Grid container spacing={4}>
          {/* Fraud Watch List */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" gutterBottom>
              Fraud Watch
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <List>
                {fraudWatchPlayers.map((player, index) => (
                  <ListItem key={index} divider={index !== fraudWatchPlayers.length - 1}>
                    <ListItemText primary={player} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Gem Watch List */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" gutterBottom>
              Gem Watch
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <List>
                {gemWatchPlayers.map((player, index) => (
                  <ListItem key={index} divider={index !== gemWatchPlayers.length - 1}>
                    <ListItemText primary={player} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
