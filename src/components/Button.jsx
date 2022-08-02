import React from 'react'
import propTypes from 'prop-types'

const Button = ({ actionType, children, onClick = null }) => {
  const actions = {
    primary: 'bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-800',
    secondary: 'border-slate-900 border-[1px] bg-slate-300 text-slate-900 p-2 rounded-xl hover:bg-red-50 hover:bg-slate-50',
    menu: 'w-full bg-slate-900 text-white p-2 hover:bg-slate-800 border-solid border-[1px] border-black',
    menu_secondary: 'w-full bg-slate-300 text-slate-900 p-2 border-solid border-[1px] border-slate-900 hover:bg-red-50 hover:bg-salte-50'
  }
  return (
    <button onClick={onClick} className={actions[actionType]}>{children}</button>
  )
}

Button.propTypes = {
  actionType: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func
}

export default Button
