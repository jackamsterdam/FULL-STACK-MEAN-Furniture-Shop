import { Document, model, Schema } from "mongoose";
import { TypeModel } from "./type-model";

//1. Model interface describing the data in the model:
export interface IFurnitureModel extends Document {
    dimension: string
    color: string
    price: number
    typeId: Schema.Types.ObjectId
}

//2. Model Schema describing validation, constraints and more:
const FurnitureSchema = new Schema<IFurnitureModel>({
    dimension: {
        type: String,
        required: [true, "Missing dimension"],
        minlength: [3, "Dimension too short"],
        maxlength: [100, "Dimension too long"],
        trim: true,
    },
    color: {
        type: String,
        required: [true, "Missing color"],
        minlength: [3, "Color too short"],
        maxlength: [100, "Color too long"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Missing price"],
        min: [0, "Price can't be negative"],
        max: [1000, "Price can't exceed 1000"]
    },
    typeId: Schema.Types.ObjectId

}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
})

//Virtual Fields: 
FurnitureSchema.virtual('type', {
    ref: TypeModel,
    localField: 'typeId',
    foreignField: '_id',
    justOne: true

})

//3. Model Class - this is the final model class:
export const FurnitureModel = model<IFurnitureModel>('FurnitureModel', FurnitureSchema, 'furniture')

