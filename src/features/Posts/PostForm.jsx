import React from 'react'
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from 'formik'
import { useCreatePostMutation, useUpdatePostMutation } from '@/services/postApiSlice'
import { postSchema } from '@/utils/validationSchemas'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PostForm = ({ post = null }) => {
  const navigate = useNavigate()
  const [createPost] = useCreatePostMutation()
  const [updatePost] = useUpdatePostMutation()
  let initialState = {}
  if (!post) {
    initialState = {
      title: '',
      content: '',
      type: 'POST'
    }
  } else {
    initialState = {
      title: post.title,
      content: post.content,
      type: 'PUT'
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.type === 'POST') {
        await createPost({ title: values.title, content: values.content })
      } else {
        await updatePost({ id: post.id, post: { title: values.title, content: values.content } })
      }
      console.log(values)
    } catch (err) {
      console.log(err)
    } finally {
      navigate('/')
      setSubmitting(false)
    }
  }

  const formik = useFormik({ initialValues: initialState, validationSchema: postSchema, onSubmit: handleSubmit })
  return (
    <section className='flex flex-col justify-center items-center w-full min-h-[500px] my-20 bg-[#04051538] shadow h-auto py-5 sm:w-11/12'>
      <h1 className='text-lg text-slate-200 bg-[#00000069] p-4 rounded-sm sm:text-5xl'>{initialState.type === 'POST' ? 'Crea un nuevo post' : 'Actualizar post'}</h1>
      <FormikProvider value={formik}>
        <Form className='my-5 flex flex-col w-3/4 justify-center items-center'>
          <div className='flex flex-col w-full items-center my-4'>
            <Field placeholder='Titulo del Post' name="title" className={`text-base text-center w-2/4  ${formik.errors.title ? 'border-solid border-red-500 border-[1px]' : null}`}/>
            <ErrorMessage name='title'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          </div>
          <div className='flex flex-col w-full items-center my-4'>
            <Field
                name="content"
                component="textarea"
                className={`text-base text-center w-3/4 min-h-[100px] ${formik.errors.content && 'border-solid border-red-500 border-[1px]'}`}
                placeholder='Contenido del Post'
            />
            <ErrorMessage name='content'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          </div>
          <button className='bg-slate-200 p-2 rounded-sm text-slate-900 min-w-[100px]' type="submit" disabled={formik.isSubmitting}>{initialState.type === 'POST' ? 'Crear' : 'Actualizar'}</button>
        </Form>
      </FormikProvider>
    </section>
  )
}

PostForm.propTypes = {
  post: propTypes.object
}

export default PostForm
