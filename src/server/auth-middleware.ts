import { Unauthorized } from '../common/errors';

export default function authMiddleware() {
   return async function auth(ctx: any, next: any) {
      const { authorization } = ctx.request.headers;
      console.log({ authorization });
      if (!authorization) {
         console.log('No auth headers');
         throw new Unauthorized();
      }

      /**
       * Typically validate with jwt, and user in the database.
       */
      if (authorization !== '1234') {
         throw new Unauthorized('Token incorrect');
      }

      /**
       * Attach logged in user here;
       */
      // ctx.user = user;

      await next();
   };
}
