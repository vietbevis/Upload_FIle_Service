import express from 'express'
import UploadFileRouter from '@/routes/v1/UploadFileRouter'
import basicAuth from '@/middlewares/basicAuthMiddleware'

const routes_v1 = express.Router()

// Public route

// Private route
routes_v1.use(basicAuth(process.env.BASIC_AUTH_USERNAME!, process.env.BASIC_AUTH_PASSWORD!))
routes_v1.use('/uploads', UploadFileRouter)

// Admin route

export default routes_v1
