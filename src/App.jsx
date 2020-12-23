import { Grid, Typography, Button } from '@material-ui/core';
import { Formik } from 'formik';

import { DadosPessoais, DadosEmpresa } from './Views';
import { UseFormulario } from './Views/customHooks';
import { CascaVisualizacao } from './componentes';

const App = () => {
  const {
    validacoesFormulario,
    submeterFormulario,
    valoresIniciais,
    errosIniciais,
  } = UseFormulario();

  return (
    <Grid container direction='column' alignItems='center' spacing={3}>
      <Grid item style={{ marginTop: '2rem' }}>
        <Typography variant='h4'>Gestão de Formulários</Typography>
      </Grid>
      <Formik
        onSubmit={(dados) => submeterFormulario(dados)}
        validationSchema={validacoesFormulario}
        initialErrors={errosIniciais}
        initialValues={valoresIniciais}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <>
            <Grid item>
              <CascaVisualizacao>
                <DadosPessoais />
              </CascaVisualizacao>
            </Grid>
            <Grid item>
              <CascaVisualizacao>
                <DadosEmpresa />
              </CascaVisualizacao>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={handleSubmit}>
                Enviar
              </Button>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
};

export default App;
