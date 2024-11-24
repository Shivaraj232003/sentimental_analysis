import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" style={{ backgroundColor: 'black' }}>
    <Toolbar>
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button component={Link} to="/view" color="inherit">View</Button>
      <Button component={Link} to="/feedback" color="inherit">Feedback</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
