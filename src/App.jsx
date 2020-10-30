import { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';

const baseDados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
  id: id,
  descricao: `Descrição da linha ${id}`,
  valor: id * 100,
}));

const App = () => {
  const [atualizacaoHabilitada, setAtualizacaoHabilitada] = useState(false);
  const [dadosPagina, setDadosPagina] = useState([]);
  const [dadosEntrada, setDadosEntrada] = useState([]);

  useEffect(() => {
    setDadosEntrada(
      baseDados.map((item) => ({ id: item.id, valor: item.valor, descricao: item.descricao }))
    );
    setDadosPagina(baseDados);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setAtualizacaoHabilitada(true);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [dadosEntrada]);

  useEffect(() => {
    function atualizarDadosPagina() {
      setDadosPagina(dadosEntrada);
    }
    console.log('trace atualizacaoHabilitada:', atualizacaoHabilitada);
    if (atualizacaoHabilitada) {
      atualizarDadosPagina();
    }
  }, [dadosEntrada, atualizacaoHabilitada, setDadosPagina]);

  const handleChange = (index, novoValor) => {
    setAtualizacaoHabilitada(false);
    const novosDadosDeEntrada = dadosEntrada;
    novosDadosDeEntrada[index].valor = novoValor;
    setDadosEntrada(novosDadosDeEntrada);
  };

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item xs={4} style={{ marginTop: '2rem' }}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => console.log('trace dadosPagina:', dadosPagina)}
        >
          Logar Tabela Atual
        </Button>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ width: '600px', padding: '2rem', margin: '2rem' }}>
          <Grid container spacing={2}>
            {/* {console.log('trace renderizando tabela com dados: ', dadosPagina)} */}
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
