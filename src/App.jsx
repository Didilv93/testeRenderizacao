import { Grid, Typography, Button } from '@material-ui/core';

import { DadosPessoais, DadosEmpresa } from './Views';
import { UseFormulario } from './Views/customHooks';
import { CascaVisualizacao } from './componentes';

const App = () => {
  const {
    atualizarTelefoneEmpresa,
    atualizarNomeEmpresa,
    submeterFormulario,
    atualizarEndereco,
    atualizarTelefone,
    enderecoEmpresa,
    atualizarCargo,
    telefoneEmpresa,
    atualizarIdade,
    atualizarNome,
    atualizarCpf,
    nomeEmpresa,
    telefone,
    cargo,
    idade,
    nome,
    cpf,
  } = UseFormulario();

  return (
    <Grid container direction='column' alignItems='center' spacing={3}>
      <Grid item style={{ marginTop: '2rem' }}>
        <Typography variant='h4'>Gestão de Formulários</Typography>
      </Grid>
      <Grid item>
        <CascaVisualizacao>
          <DadosPessoais
            atualizarTelefone={atualizarTelefone}
            atualizarIdade={atualizarIdade}
            atualizarNome={atualizarNome}
            atualizarCpf={atualizarCpf}
            telefone={telefone}
            idade={idade}
            nome={nome}
            cpf={cpf}
          />
        </CascaVisualizacao>
      </Grid>
      <Grid item>
        <CascaVisualizacao>
          <DadosEmpresa
            atualizarTelefone={atualizarTelefoneEmpresa}
            atualizarEndereco={atualizarEndereco}
            atualizarNomeEmpresa={atualizarNomeEmpresa}
            atualizarCargo={atualizarCargo}
            nomeEmpresa={nomeEmpresa}
            telefone={telefoneEmpresa}
            endereco={enderecoEmpresa}
            cargo={cargo}
          />
        </CascaVisualizacao>
      </Grid>
      <Grid item>
        <Button variant='outlined' onClick={submeterFormulario}>
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};

export default App;
