const handleErrors = (error, req, res, next) => {
  console.error(error.name)
  console.error(error)
  res.status(500).json({ error: error.message })
}
export default handleErrors
