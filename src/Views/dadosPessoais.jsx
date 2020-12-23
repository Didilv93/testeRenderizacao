import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

const dadosPessoais = ({
  atualizarTelefone,
  atualizarNome,
  atualizarIdade,
  atualizarCpf,
  telefone,
  idade,
  nome,
  cpf,
}) => {
  return (
    <Grid item xs={12}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant='h5'>Dados Pessoais</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='Nome'
                defaultValue={nome}
                onChange={(event) => atualizarNome(event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Idade'
                defaultValue={idade}
                onChange={(event) => atualizarIdade(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='CPF'
                defaultValue={cpf}
                onChange={(event) => atualizarCpf(event.target.value)}
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

export default dadosPessoais;
