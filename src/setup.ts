import setupRepo from './repo/setup';
import authorRepo from './repo/author';
import createServer from './server/server';
import getAuthorCore from './core/implementation/author.core';
import * as authorData from './seed/authors.json';

export default async function setup() {
   /**
    * Setup repo.
    */
   await setupRepo();

   /**
    * Dependency inject all of the core modules.
    */
   const authorCore = getAuthorCore({ repo: authorRepo });

   /**
    * Do necessary seeding.
    */
   if (!(await authorCore.getAuthors()).length) {
      await authorCore.seedAuthors(authorData);
   }

   /**
    * Create server with injected core dependencies.
    */
   const port: number = Number.parseInt(process.env.PORT as string, 10) || 3000;
   const address = process.env.address || '0.0.0.0';
   await createServer(port, address, { authorCore });
}
