import { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

const App = ({ baseDados = [] }) => {
  const [dadosPagina, setDadosPagina] = useState([]);

  var eventoProgramado;

  useEffect(() => {
    setDadosPagina(baseDados);
  }, [baseDados]);

  function salvarDados(index, novoValor) {
    eventoProgramado = setTimeout(() => {
      const novosDadosDeEntrada = [...dadosPagina];
      novosDadosDeEntrada[index].valor = novoValor;
      setDadosPagina(novosDadosDeEntrada);
      console.log('Alterações salvas!');
    }, 500);
  }

  const handleChange = (index, novoValor) => {
    clearTimeout(eventoProgramado);
    salvarDados(index, novoValor);
  };

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item xs={4} style={{ marginTop: '2rem' }}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => console.log('trace dadosPagina:', dadosPagina, { baseDados })}
        >
          Logar Tabela Atual
        </Button>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ width: '600px', padding: '2rem', margin: '2rem' }}>
          <Grid container spacing={2}>
            {console.log('trace renderizando tabela com dados: ', dadosPagina)}
            {dadosPagina.map((item, index) => (
              <Grid key={item.id} item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Typography>{item.id}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{item.descricao}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label='Valor'
                      defaultValue={item.valor}
                      onChange={(event) => handleChange(index, event.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
