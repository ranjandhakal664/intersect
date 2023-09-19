// src/components/Dashboard.js
import React from 'react';
import { faHome, faUser, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Paper, Grid, IconButton } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <IconButton>
              <FontAwesomeIcon icon={faHome} size="3x" />
            </IconButton>
            Home
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <IconButton>
              <FontAwesomeIcon icon={faUser} size="3x" />
            </IconButton>
            Profile
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <IconButton>
              <FontAwesomeIcon icon={faChartBar} size="3x" />
            </IconButton>
            Analytics
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <IconButton>
              <FontAwesomeIcon icon={faCog} size="3x" />
            </IconButton>
            Settings
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
