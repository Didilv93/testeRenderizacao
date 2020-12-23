import React from 'react';

import { Grid, Paper } from '@material-ui/core';

const cascaVisualizacao = ({ children }) => {
  return (
    <Grid item>
      <Paper elevation={3} style={{ width: '600px', padding: '2rem' }}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default cascaVisualizacao;
