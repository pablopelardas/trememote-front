import React from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '@/services/authApiSlice'
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from 'formik'
import { loginSchema, registerSchema } from '@/utils/validationSchemas'

const AuthForm = ({ type }) => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const [register] = useRegisterMutation()
  const initialState = type === 'login'
    ? { email: '', password: '' }
    : { username: '', email: '', password: '' }
  const handleSubmit = async (values, { setSubmitting }) => {
    if (type === 'login') {
      await login({ email: values.email, password: values.password })
    } else {
      await register({ username: values.username, email: values.email, password: values.password })
    }
    navigate('/')
    setSubmitting(false)
  }

  const formik = useFormik({ initialValues: initialState, validationSchema: type === 'login' ? loginSchema : registerSchema, onSubmit: handleSubmit })
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-[500px] my-20 bg-[#04051538] shadow h-auto py-5 sm:w-11/12'>
      <h1 className='text-3xl text-slate-200 bg-[#00000069] p-4 rounded-sm sm:text-5xl'>{type === 'login' ? 'Ingresar' : 'Registrarse'}</h1>
      <FormikProvider value={formik}>
        <Form className='my-5 flex flex-col w-3/4 justify-center items-center sm:w-full'>
          {type === 'register' &&
            <div className='flex flex-col w-full items-center my-4 gap-3'>
              <label className='text-slate-50 text-lg'> Username </label>
              <Field placeholder='adforum' name="username" className={`text-base text-center w-full sm:w-2/4 lg:w-2/6 ${formik.errors.username ? 'border-solid border-red-500 border-[1px]' : null}`}/>
              <ErrorMessage name='username'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
            </div>
          }
          <div className='flex flex-col w-full items-center my-4 gap-3'>
              <label className='text-slate-50 text-lg'> Email </label>
              <Field placeholder='email@tuemaildeprueba.com' name="email" className={`text-base text-center w-full sm:w-2/4 lg:w-2/6 ${formik.errors.email ? 'border-solid border-red-500 border-[1px]' : null}`}/>
              <ErrorMessage name='email'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          </div>
          <div className='flex flex-col w-full items-center my-4 gap-3'>
            <label className='text-slate-50 text-lg'> Password :</label>
            <Field placeholder='Password' name="password" type='password' className={`text-base text-center w-full sm:w-2/4 lg:w-2/6  ${formik.errors.password ? 'border-solid border-red-500 border-[1px]' : null}`}/>
            <ErrorMessage name='password'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          </div>

          <button className='bg-slate-200 p-2 rounded-sm text-slate-900 min-w-[100px]' type="submit" disabled={formik.isSubmitting}>{initialState.type === 'POST' ? 'Crear' : 'Actualizar'}</button>
        </Form>
      </FormikProvider>
    </section>
  )
}

AuthForm.propTypes = {
  type: propTypes.string
}

export default AuthForm
