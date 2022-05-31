import express, { NextFunction, Request, Response } from 'express'
import { FurnitureModel } from '../03-models/furniture-model'
import logic from '../05-logic/logic'

const router = express.Router()


//http://localhost:3001/api/types
router.get('/types', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const types = await logic.getAllTypes()
        response.json(types)
    } catch (err: any) {
        next(err)
    }
})

//http://localhost:3001/api/furniture-by-type/2837423984
router.get('/furniture-by-type/:typeId', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const typeId = request.params.typeId
        const furniture = await logic.getFurnitureByType(typeId)
        response.json(furniture)
    } catch (err: any) {
        next(err)
    } 
})

//http://localhost:3001/api/furniture/
router.post('/furniture', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const furniture = new FurnitureModel(request.body)
        const addedFurniture = await logic.addFurniture(furniture)
        response.status(201).json(addedFurniture)
    } catch (err: any) {
        next(err)
    }
})
//http://localhost:3001/api/furniture/629647271d6894b1598298f8
router.delete('/furniture/:_id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id
        await logic.deleteFurniture(_id)
        response.sendStatus(204)
    } catch (err: any) {
        next(err)
    }
})

export default router 