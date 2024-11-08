import express from 'express'
import UploadFileRouter from '@/routes/v1/UploadFileRouter'

const routes_v1 = express.Router()

// Public route

// Private route
routes_v1.use('/uploads', UploadFileRouter)

// Admin route

export default routes_v1
