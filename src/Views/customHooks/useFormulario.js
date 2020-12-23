import { useState } from 'react';

const useFormulario = () => {
  const [telefone, atualizarTelefone] = useState('');
  const [idade, atualizarIdade] = useState('');
  const [nome, atualizarNome] = useState('');
  const [cpf, atualizarCpf] = useState('');

  const [telefoneEmpresa, atualizarTelefoneEmpresa] = useState('');
  const [enderecoEmpresa, atualizarEndereco] = useState('');
  const [nomeEmpresa, atualizarNomeEmpresa] = useState('');
  const [cargo, atualizarCargo] = useState('');

  const submeterFormulario = () => {
    console.log('trace dados formulário:', {
      enderecoEmpresa,
      telefoneEmpresa,
      nomeEmpresa,
      telefone,
      cargo,
      idade,
      nome,
      cpf,
    });
    alert('Formulário enviado');
  };

  return {
    atualizarTelefoneEmpresa,
    submeterFormulario,
    atualizarNomeEmpresa,
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
  };
};

export default useFormulario;
