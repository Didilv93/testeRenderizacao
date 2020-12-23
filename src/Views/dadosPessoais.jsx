import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';

const DadosPessoais = () => {
  const { values, errors, setFieldValue } = useFormikContext();

  let dalay;

  const atualizarEstado = (aprametro, valor) => {
    clearTimeout(dalay);
    dalay = setTimeout(() => {
      setFieldValue(aprametro, valor);
    }, 500);
  };

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
                error={!!errors.nome}
                label='Nome'
                defaultValue={values.nome}
                onChange={(event) => atualizarEstado('nome', event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={!!errors.idade}
                label='Idade'
                defaultValue={values.idade}
                onChange={(event) => atualizarEstado('idade', event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                error={!!errors.cpf}
                label='CPF'
                defaultValue={values.cpf}
                onChange={(event) => atualizarEstado('cpf', event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={!!errors.telefone}
                label='Telefone'
                defaultValue={values.telefone}
                onChange={(event) => atualizarEstado('telefone', event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DadosPessoais;
