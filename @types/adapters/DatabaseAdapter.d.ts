import { Book } from "@prisma/client";

export interface DatabaseAdapter {
  // search
  findBookByTitle(title: string): Promise<Book | null>;
  findCategoryByName(name: string): Promise<Category | null>;

  // create
  createBook(book: CreateBook): Promise<Book>;

  // create category
  createCategory(category: CreateCategory): Promise<Category>;
}
