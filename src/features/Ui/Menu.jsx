import React from 'react'
import CloseIcon from '@/assets/CloseIcon.jsx'
import Button from '@/components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { selectMenu, setMenu } from '@/app/slices/uiSlice'
import { selectCurrentUser } from '@/app/slices/userSlice'
import { useLogOutMutation } from '@/services/authApiSlice'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [logOut] = useLogOutMutation()
  const menu = useSelector(selectMenu)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setMenu(false))
  }
  const user = useSelector(selectCurrentUser)
  const content = user && Object.keys(user).length
    ? (
    <>
      <Link to='/create'><Button actionType='menu'>Crear Evento</Button></Link>
      <Button onClick={async () => await logOut()} actionType='menu_secondary'>Cerrar Sesión</Button>
    </>
      )
    : (
    <>
          <Link to='/login'><Button actionType='menu'>Iniciar Sesión</Button></Link>
          <Link to='/register'><Button actionType='menu'>Registrarse</Button></Link>
    </>
      )

  return (
        <aside className={`${menu ? 'flex' : 'hidden'} w-full flex flex-col h-auto max-w-[250px] bg-slate-300 fixed top-[70px] z-10 border-solid border-4 sm:top-0 right-0 sm:hidden `}>
            <div onClick={handleClose} className='flex self-end justify-end gap-3 pr-5 mt-5 cursor-pointer text-default w-min'>
                <span>Cerrar</span>
                <CloseIcon />
            </div>
            <div className='flex flex-col justify-center h-full my-5 px-2 gap-1 sm:mt-10'>
              {content}
            </div>
        </aside>
  )
}

export default Menu
