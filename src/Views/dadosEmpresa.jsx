import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';

const DadosEmpresa = () => {
  const { values, errors, setFieldValue } = useFormikContext();
  console.log('trace renderizou:');
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
                error={!!errors.nomeEmpresa}
                defaultValue={values.nomeEmpresa}
                onChange={(event) => setFieldValue('nomeEmpresa', event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Cargo'
                error={!!errors.cargo}
                defaultValue={values.cargo}
                onChange={(event) => setFieldValue('cargo', event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                error={!!errors.enderecoEmpresa}
                label='Endereço'
                defaultValue={values.enderecoEmpresa}
                onChange={(event) => setFieldValue('enderecoEmpresa', event.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Telefone'
                error={!!errors.telefoneEmpresa}
                defaultValue={values.telefoneEmpresa}
                onChange={(event) => setFieldValue('telefoneEmpresa', event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DadosEmpresa;
