import { Schema, model, Document } from 'mongoose';

export interface IPerson extends Document {
  name: string;
  age: number;
  location: string;
  favoriteColor?: string;
}

const PersonSchema = new Schema<IPerson>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  favoriteColor: { type: String },
});

const Person = model<IPerson>('Person', PersonSchema);

export default Person;

