import { Router, Request, Response } from 'express'
// import Server from '../models/server'

const router = Router()

router.get('/usuarios', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'Todo esta ok!!'
  })
})

export default router
