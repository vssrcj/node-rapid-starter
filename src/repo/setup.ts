import { connect } from 'mongoose';
import 'reflect-metadata';

export default async function setupRepository(connectionString: string) {
   const { NODE_ENV } = process.env;

   try {
      const connection = await connect(
         connectionString,
         { useNewUrlParser: true, useUnifiedTopology: true },
      );
      if (NODE_ENV === 'development') {
         console.log('connected to mongo dev');
      } else {
         console.log('connected to mongo prod');
      }

      connection.set('useFindAndModify', false);
      return connection;
   } catch (err) {
      console.error('Could not connect to MongoDB');
      throw err;
   }
}
