import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import { SwaggerRouter } from 'koa-swagger-decorator';
import errorHandler from './error-handler';
import { configureSwaggerPlugin } from './plugins/swagger';
import getControllers from './controllers';
import { AuthorCore } from '../core/interfaces/core.interfaces';

// const log = JSON.stringify(process.env.NODE_ENV) === 'development';

export default function createServer(
   port: number, address: string, { authorCore }: { authorCore: AuthorCore },
) {
   /**
    * Create swagger routes.
    */
   const router = new SwaggerRouter();
   configureSwaggerPlugin(router);

   /**
    * Injects the swagger router into all the controllers.
    */
   const controllers = getControllers(router);

   /**
    * Configure the swagger-enabled controllers by injecting core modules.
    */
   controllers.author({ authorCore });

   /**
    * Create Koa server.
    */
   const koa = new Koa();

   koa
      .use(bodyParser({
         enableTypes: ['text', 'json', 'form'],
      }))
      .use(cors({
         origin: '*',
      }))
      .use(errorHandler())
      .use(router.routes())
      .use(router.allowedMethods());

   // console.log(`logging enabled - ${log}`);
   // if (log) {
   //    koa.use(logger());
   // }

   router.get('/', (ctx) => {
      ctx.body = {
         date: new Date().toString(),
         port,
         NODE_ENV: process.env.NODE_ENV,
      };
   });

   koa.listen(port, address);

   return koa;
}
