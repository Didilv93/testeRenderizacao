import * as Yup from 'yup';

const useFormulario = () => {
  const validacoesFormulario = Yup.object().shape({
    telefone: Yup.string().required('Campo obrigatório'),
    idade: Yup.mixed().test(
      'number',
      'Campo inválido',
      (valor) => valor && valor.toString().length <= 3
    ),
    nome: Yup.string().required('Campo obrigatório'),
    cpf: Yup.string().required('Campo obrigatório'),
    telefoneEmpresa: Yup.string().required('Campo obrigatório'),
    enderecoEmpresa: Yup.string().required('Campo obrigatório'),
    nomeEmpresa: Yup.string().required('Campo obrigatório'),
    cargo: Yup.string().required('Campo obrigatório'),
  });

  const errosIniciais = {
    telefone: '',
    idade: '',
    nome: '',
    cpf: '',
    telefoneEmpresa: '',
    enderecoEmpresa: '',
    nomeEmpresa: '',
    cargo: '',
  };

  const valoresIniciais = {
    telefone: '3199444848',
    idade: '',
    nome: 'Teste Formulário',
    cpf: '',
    telefoneEmpresa: '',
    enderecoEmpresa: '',
    nomeEmpresa: '',
    cargo: '',
  };

  const submeterFormulario = (dados) => {
    if (!!dados) {
      console.log('trace dados formulário:', {
        dados,
      });
      alert('Formulário enviado');
    } else alert('Formulário inválido');
  };

  return {
    validacoesFormulario,
    submeterFormulario,
    valoresIniciais,
    errosIniciais,
  };
};

export default useFormulario;
