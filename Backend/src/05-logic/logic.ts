import { FurnitureModel, IFurnitureModel } from './../03-models/furniture-model';
import { TypeModel, ITypeModel } from './../03-models/type-model';
import ErrorModel from "../03-models/error-model"

async function getAllTypes():Promise<ITypeModel[]> {
    return TypeModel.find().exec()
}

async function getFurnitureByType(typeId: string):Promise<IFurnitureModel[]> {
  return FurnitureModel.find({typeId}).populate('type').exec()
}

async function addFurniture(furniture: IFurnitureModel):Promise<IFurnitureModel> {
    const errors = furniture.validateSync()
    if (errors) throw new ErrorModel(400, errors.message)

    return furniture.save()
}

async function deleteFurniture(_id: string):Promise<void> {
    const deletedFurniture = await FurnitureModel.findByIdAndDelete(_id).exec()
    if (!deletedFurniture) throw new ErrorModel(404, `Resource with _id ${_id} not found`)
}




export default {
    getAllTypes,
    getFurnitureByType,
    addFurniture,
    deleteFurniture
}