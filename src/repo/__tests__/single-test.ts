import getAuthorCore from '../../core/implementation/author.core';
import authorRepo from '../author';
import { AuthorRepo } from '../../core/interfaces/repo.interfaces';
import { NewAuthor } from '../../core/entities/author.entities';
import setupRepo from '../setup';

describe('Basic test', () => {
   let connection: any;

   beforeAll(async () => {
      connection = await setupRepo();
   });

   afterAll(async () => {
      await connection.disconnect();
   });


   test('Author core create', async () => {
      /**
       * You can easily mock any repo.
       */
      const authorRepoMock: AuthorRepo = {
         getAuthors() { throw new Error(); },
         async createAuthor(author: NewAuthor) {
            return {
               id: '12345',
               name: author.name,
            };
         },
         seedAuthors() { throw new Error(); },
      };

      const authorCore = getAuthorCore({ repo: authorRepoMock });

      const newAuthorPayload = { name: 'CJ' };
      const newAuthor = await authorCore.createAuthor(newAuthorPayload);
      expect(newAuthor).toEqual({
         id: expect.any(String),
         name: newAuthorPayload.name,
      });
   });

   /**
    * You can use a repo implementation independent of the core.
    */
   test('Author core create', async () => {
      const authors = await authorRepo.getAuthors();
      expect(Array.isArray(authors)).toBe(true);
   });
});
