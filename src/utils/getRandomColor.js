const randomColor = () => {
  const colors = ['bg-slate-50', 'bg-slate-100', 'bg-slate-200', 'bg-slate-300', 'bg-slate-400']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default randomColor
