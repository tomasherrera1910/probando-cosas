import { Router } from "express"
import { Company } from "../models/Company.js"
const companiesRouter = Router()

companiesRouter.get("/companies", async (req, res, next) => {
  try {
    const companies = await Company.findAll({})
    res.json(companies)
  } catch (error) {
    next(error)
  }
})
companiesRouter.get("/companies/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const company = await Company.findByPk(id)
    res.json(company)
  } catch (error) {
    next(error)
  }
})
companiesRouter.post("/companies", async (req, res, next) => {
  try {
    const { name, description } = req.body
    const newCompany = await Company.create({ name, description })
    res.status(201).json(newCompany)
  } catch (error) {
    next(error)
  }
})
companiesRouter.put("/companies/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const company = await Company.findByPk(id)
    company.set(req.body)
    await company.save()
    res.status(202).json(company)
  } catch (error) {
    next(error)
  }
})
companiesRouter.delete("/companies/:id", async (req, res, next) => {
  try {
    const { id } = req.params
  await Company.destroy({
    where: { id },
  })
  res.status(204).json({ message: "Empresa eliminada!" })
  } catch (error) {
    next(error)
  }
})
export default companiesRouter
