import { Router } from "express";
import { readdirSync } from 'fs'


const router = Router()

export class RouterReaddirSync {
    constructor() { }

    private getDirName(): string {
        const PATH_ROUTER = `${__dirname}`
        return PATH_ROUTER
    }

    /**
     * 
     * @param fileName index.ts, journey.ts a journey le quito el ['journey','.ts']
     * @returns  journey, index
     */
    private cleanFileName(fileName: string): any {
        const file = fileName.split('.').shift()
        return file;
    }

    public getReaddirSync(): void {
        readdirSync(this.getDirName()).filter(async (fileName) => {
            const cleanName = this.cleanFileName(fileName)
            if (cleanName !== "index") {

                console.log(cleanName);
                // router.use(`/${cleanName}`)
                // const moduleRouter = await import(`${cleanName}`)

                // router.use(`/${cleanName}`, moduleRouter.router)
            }
        })
    }

}






export { router }