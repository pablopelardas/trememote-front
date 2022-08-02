import React from 'react'
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from 'formik'
import { postSchema } from '@/utils/validationSchemas'
import propTypes from 'prop-types'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'

import './ckeditor.css'

const PostForm = ({ post = null }) => {
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

  const inputHandler = (_, editor) => {
    formik.setFieldValue('content', editor.getData())
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    // values.type === 'POST'
    //   ? // create new activity
    //   : // update activity
    console.log(values)
    setSubmitting(false)
  }

  const formik = useFormik({ initialValues: initialState, validationSchema: postSchema, onSubmit: handleSubmit })
  return (
    <section className='flex flex-col justify-center items-center w-full bg-slate-300 mt-10'>
      <h1>{initialState.type === 'POST' ? 'Crea un nuevo post' : 'Actualizar post'}</h1>
      <FormikProvider value={formik}>
        <Form className='my-5 flex flex-col w-3/4 justify-center items-center'>
          <Field placeholder='Titulo del Post' name="title" className={`relative text-base h-auto m-w-[80%] text-center ${formik.errors.title ? 'border-solid border-red-500 border-[1px]' : null}`}/>
          <ErrorMessage name='title'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          <CKEditor
              name="content"
              className={`${formik.errors.content && 'border-solid border-red-500 border-[1px]'}`}
              config={{ placeholder: 'Contenido del post' }}
              data={formik.values.content}
              editor={ClassicEditor}
              onChange={inputHandler}
          />
          <ErrorMessage name='content'>{msg => <span className='text-red-600 text-xs'>{msg}</span>}</ErrorMessage>
          <button type="submit" disabled={formik.isSubmitting}>Actualizar</button>
        </Form>
      </FormikProvider>
    </section>
  )
}

PostForm.propTypes = {
  post: propTypes.object
}

export default PostForm
