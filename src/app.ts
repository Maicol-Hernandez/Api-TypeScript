import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes/journey'

import { RouterReaddirSync } from './routes/index'

const routerReaddirSync = new RouterReaddirSync()

console.log('routerReaddirSync.getReaddirSync() :>> ', routerReaddirSync.getReaddirSync());



const PORT = process.env.PORT || 3000
const app = express()


app.use(cors({
    origin: '*',
})) // middleware que transforma la req.body a un json

app.use(router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


