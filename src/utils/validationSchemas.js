import * as Yup from 'yup'

export const postSchema = Yup.object().shape({
  title: Yup.string().required('Requerido'),
  content: Yup.string()
    .required('Requerido')
    .min(20, 'El contenido del post debe tener al menos 20 caracteres')
})

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('Requerido'),
  email: Yup.string().required('Requerido').email('Debe ser un email válido'),
  password: Yup.string().required('Requerido').min(6, 'Debe tener al menos 6 caracteres')
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('Requerido').email('Debe ser un email válido'),
  password: Yup.string().required('Requerido').min(6, 'Debe tener al menos 6 caracteres')
})
