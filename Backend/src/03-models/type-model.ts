import { Document, model, Schema } from "mongoose";

//1. Interface describing Type:
export interface ITypeModel extends Document {
   type: string
}

//2. Schema describing Type:
const TypeSchema = new Schema<ITypeModel>({
    type: {
        type: String,
        required: [true, "Missing type"],
        minlength: [2, "Type too short"],
        maxlength: [100, "Type too long"],
        trim: true,
        unique: true
    }
}, {
    versionKey: false
})

// 3. Type Model:
export const TypeModel = model<ITypeModel>('TypeModel', TypeSchema, 'types')