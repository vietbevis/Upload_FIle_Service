import { UnauthorizedError } from '@/core/ErrorResponse'
import { Request, Response, NextFunction } from 'express'

const basicAuth = (username: string, password: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      res.setHeader('WWW-Authenticate', 'Basic')
      throw new UnauthorizedError('Authorization required')
    }

    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
    const [reqUsername, reqPassword] = credentials.split(':')

    if (reqUsername === username && reqPassword === password) {
      return next()
    } else {
      throw new UnauthorizedError('Invalid credentials')
    }
  }
}

export default basicAuth
