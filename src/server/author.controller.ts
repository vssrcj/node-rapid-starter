import {
   SwaggerRouter, request, summary, prefix,
   tags, responses, middlewares, body,
} from 'koa-swagger-decorator';
import Router from 'koa-router';
import { AuthorCore } from '../core/interfaces/core.interfaces';
import authMiddleware from './auth-middleware';
import { NewAuthor, Author } from '../core/entities/author.entities';

const tag = tags(['Authors']);


export default function getAuthorController(
   router: SwaggerRouter,
) {
   return ({ authorCore }: { authorCore: AuthorCore }) => {
      @prefix('/author')
      class AuthorController {
         @request('get', '')
         @summary('List authors')
         @middlewares([authMiddleware()])
         @tag
         @responses({
            200: {
               description: 'List of authors',
            },
            400: { description: 'error' },
         })
         async listAuthors(ctx: Router.IRouterContext) {
            const authors = await authorCore.getAuthors();

            ctx.response.status = 200;
            ctx.response.body = authors;
         }

         @request('post', '')
         @summary('Create author')
         @middlewares([authMiddleware()])
         @tag
         @body((NewAuthor as any).swaggerDocument)
         @responses({
            201: {
               description: 'Create an author',
               schema:
               {
                  type: 'object',
                  properties: (Author as any).swaggerDocument,
               },
            },
            400: { description: 'error' },
         })
         async createAuthor(ctx: Router.IRouterContext) {
            const author = await authorCore.createAuthor(ctx.request.body as NewAuthor);

            ctx.response.status = 201;
            ctx.response.body = author;
         }
      }

      return router.map(AuthorController, { doValidation: false });
   };
}
