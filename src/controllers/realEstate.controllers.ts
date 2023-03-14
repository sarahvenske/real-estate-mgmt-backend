import { Request, Response } from "express"
import { IRealEstateRequest } from "../interfaces"
import {
    createRealEstateService,
    listAllRealEstateService,
} from "../services"

const createPropertyController = async (req: Request, res: Response) => {
    
    const realEstateData: IRealEstateRequest = req.body
    const newRealEstate = await createRealEstateService(realEstateData)
    
    return res.status(201).json(newRealEstate)

}


const listAllPropertiesController = async (req: Request, res: Response) => {
   
    const realEstates = await listAllRealEstateService()
    
    return res.status(200).json(realEstates)
    
}

export {
    createPropertyController,
    listAllPropertiesController
}

