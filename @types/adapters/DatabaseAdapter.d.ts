export interface DatabaseAdapter {
  findBookByTitle(title: string): Promise<Book | null>;
  findBookByAuthor(author: string): Promise<Book | null>;
  findBookByPublisher(publisher: string): Promise<Book | null>;
}
