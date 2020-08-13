import React from 'react';
import logo from './logo.svg';
import { Button , AppBar , Typography , Toolbar } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">
          
        </Typography>
        <Button>Share</Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
