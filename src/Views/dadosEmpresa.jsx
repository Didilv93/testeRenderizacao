import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

const dadosEmpresa = ({
  atualizarNomeEmpresa,
  atualizarEndereco,
  atualizarTelefone,
  atualizarCargo,
  nomeEmpresa,
  endereco,
  telefone,
  cargo,
}) => {
  return (
    <Grid item xs={12}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant='h5'>Dados Empresa</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='Nome'
                defaultValue={nomeEmpresa}
                onChange={(event) => atualizarNomeEmpresa(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Cargo'
                defaultValue={cargo}
                onChange={(event) => atualizarCargo(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='Endereço'
                defaultValue={endereco}
                onChange={(event) => atualizarEndereco(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Telefone'
                defaultValue={telefone}
                onChange={(event) => atualizarTelefone(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default dadosEmpresa;
