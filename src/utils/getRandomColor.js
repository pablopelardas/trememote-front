const randomColor = () => {
  const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-orange-200', 'bg-purple-200']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default randomColor
