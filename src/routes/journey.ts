import { Router, Request, Response } from "express";

const router = Router()

/**
 * http://localhost:3001/getjourney [GET]
 */

router.get('/getjourney', (_req: Request, res: Response) => {
    res.send({ data: 'Fetching all entry journey' })
})

router.post('/', (_req, res) => {
    res.send('Saving a diary!')
})


export { router }