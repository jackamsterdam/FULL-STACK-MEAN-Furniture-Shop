
import { TypeModel } from "./type.model"

export class FurnitureModel {
    _id: string 
    dimension: string
    color: string
    price: number
    typeId: string 
    type: TypeModel

}