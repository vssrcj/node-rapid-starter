import { AuthorCore } from '../interfaces/core.interfaces';
import { AuthorRepo } from '../interfaces/repo.interfaces';
import { NewAuthor } from '../entities/author.entities';

export default function authorCore({ repo }: { repo: AuthorRepo }): AuthorCore {
   return {
      async getAuthors() {
         return repo.getAuthors();
      },
      async seedAuthors(authors: NewAuthor[]) {
         await repo.seedAuthors(authors);
      },
      async createAuthor(author: NewAuthor) {
         return repo.createAuthor(author);
      },
   };
}
