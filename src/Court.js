import * as React from 'react';

import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

export default function Court({ number, players }) {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={12}>
        <Typography level="h2">{`Court ${number}`}</Typography>
      </Grid>
      {players.map((player, index) => (
        <Grid key={index} xs={6}>
          <Typography>{`${player} (${index < 2 ? 1 : 2})`}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
