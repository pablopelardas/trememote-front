import React from 'react'

const Button = ({ actionType, children }) => {
  const actions = {
    primary: 'bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-800',
    menu: 'bg-slate-900 text-white p-2 hover:bg-slate-800 border-solid border-[1px] border-black'
  }
  return (
    <button className={actions[actionType]}>{children}</button>
  )
}

export default Button
