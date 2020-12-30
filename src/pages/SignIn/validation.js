import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha muito curta, mínimo 6 caracteres'),
});
