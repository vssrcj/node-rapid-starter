import { SwaggerRouter } from 'koa-swagger-decorator';
import getAuthorController from './author.controller';

export default function getControllers(router: SwaggerRouter) {
   const authorController = getAuthorController(router);
   return {
      author: authorController,
   };
}
