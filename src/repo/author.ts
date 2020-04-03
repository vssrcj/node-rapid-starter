import { AuthorRepo } from '../core/interfaces/repo.interfaces';
import AuthorModel from './models/Author';
import { Author, NewAuthor } from '../core/entities/author.entities';

const authorRepo: AuthorRepo = {
   async getAuthors() {
      const authors = await AuthorModel.find();
      return authors.map((author) => ({
         name: author.name,
         id: author.id,
      }));
   },
   async seedAuthors(authors: Author[]) {
      const repoAuthors = authors.map((author) => ({
         name: author.name,
      }));
      await AuthorModel.create(repoAuthors);
   },
   async createAuthor(author: NewAuthor) {
      const newAuthor = await AuthorModel.create(author);

      return {
         id: newAuthor.id,
         name: newAuthor.name,
      };
   },
};

export default authorRepo;
