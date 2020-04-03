import { Author, NewAuthor } from '../entities/author.entities';

export interface AuthorRepo {
   getAuthors(): Promise<Author[]>;
   createAuthor(author: NewAuthor): Promise<Author>;
   seedAuthors(authors: NewAuthor[]): Promise<void>;
}
