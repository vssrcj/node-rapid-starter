import { connect } from 'mongoose';
import 'reflect-metadata';

export default async function setupRepository() {
   const { NODE_ENV, MONGODB_URI } = process.env;

   try {
      const connection = await connect(
         MONGODB_URI,
         { useNewUrlParser: true, useUnifiedTopology: true },
      );

      console.log(`connected to mongo ${NODE_ENV}`);

      connection.set('useFindAndModify', false);
      return connection;
   } catch (err) {
      console.error('Could not connect to MongoDB');
      throw err;
   }
}
