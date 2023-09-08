import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Home from './Home';

export default function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Home />
    </CssVarsProvider>
  );
}
