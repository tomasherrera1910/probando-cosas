import express from "express"
import { sequelize } from "./database/connect.js"
import companiesRouter from "./controllers/companies.js"
import handleErrors from "./middlewares/handleErrors.js"
const app = express()
app.use(express.json())

await sequelize.authenticate()
app.get("/", (req, res) => {
  res.json({ message: "ok" })
})
app.use(companiesRouter)
app.use(handleErrors)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server on in port ${PORT}`)
})
