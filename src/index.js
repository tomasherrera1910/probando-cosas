import express from "express"
import { sequelize } from "./database/connect.js"
const app = express()
app.use(express.json())

await sequelize.authenticate()
app.get("/", (req, res) => {
  res.json({ message: "ok" })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server on in port ${PORT}`)
})
