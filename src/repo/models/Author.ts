import { SchemaDefinition } from 'mongoose';
import { wrapper, Document } from '../mongoose-helpers';

/**
 * All mongoose models require both an interface (for ts type checking) and a SchemaDefinition.
 */
export interface Author extends Document {
   name: string;
}

const AuthorSchema: SchemaDefinition = {
   name: { type: String, required: true },
};

export default wrapper<Author>('Author', AuthorSchema);
