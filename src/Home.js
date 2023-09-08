import * as React from 'react';

import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import Slider from '@mui/joy/Slider';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

import Court from './Court';

export default function Home() {
  const [courts, setCourts] = React.useState(0);
  const [players, setPlayers] = React.useState([]);
  const [shuffledPlayersChunks, setShuffledPlayersChunks] = React.useState([]);

  const handleCourtsChange = (event, newCourts) => {
    setCourts(newCourts);

    let newPlayers = [];
    for (let i = 0; i < 4 * newCourts; i++) newPlayers.push('');
    setPlayers(newPlayers);
  };

  const handlePlayersChange = (event) => {
    const index = event.target.name;

    let newPlayers = [];
    players.forEach((player, i) =>
      // eslint-disable-next-line
      newPlayers.push(i == index ? event.target.value : player)
    );
    setPlayers(newPlayers);
  };

  React.useEffect(() => handleCourtsChange(null, 2), []);

  const handlePozizeClick = (event) => {
    let shuffledPlayers = [...players];
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [
        shuffledPlayers[j],
        shuffledPlayers[i],
      ];
    }

    let newShuffledPlayersChunks = [];
    for (let i = 0; i < shuffledPlayers.length; i += 4) {
      const chunk = shuffledPlayers.slice(i, i + 4);
      newShuffledPlayersChunks.push(chunk);
    }

    setShuffledPlayersChunks(newShuffledPlayersChunks);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1, width: '80%', margin: 'auto', textAlign: 'center' }}
    >
      <Grid xs={12}>
        <Typography level="h1">Pozizer</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography>
          Select the number of courts, introduce the players' names, and pozize!
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Slider
          value={courts}
          onChange={handleCourtsChange}
          step={1}
          marks
          min={1}
          max={10}
          valueLabelDisplay="on"
        />
      </Grid>
      {players.map((player, index) => (
        <Grid key={index} xs={12} sm={6}>
          <Input
            name={`${index}`}
            placeholder={`Player ${index + 1}`}
            value={player}
            onChange={handlePlayersChange}
          />
        </Grid>
      ))}
      <Grid xs={12}>
        <Button onClick={handlePozizeClick}>Pozize!</Button>
      </Grid>
      {shuffledPlayersChunks.length > 0 && (
        <Grid xs={12}>
          {shuffledPlayersChunks.map((shuffledPlayersChunk, index) => (
            <Court
              key={index}
              number={index + 1}
              players={shuffledPlayersChunk}
            />
          ))}
        </Grid>
      )}
    </Grid>
  );
}
