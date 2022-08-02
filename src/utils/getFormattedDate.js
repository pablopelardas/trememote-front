const getFormattedDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export default getFormattedDate
