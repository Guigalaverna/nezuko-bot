import { Book, Category, prisma } from "@prisma/client";
import { DatabaseAdapter } from "../../@types/adapters/DatabaseAdapter";
import { prismaClient } from "src/lib/prismaClient";

interface CreateBook {
  title: string;
  language: string;
  category: string;
  path: string;
}

interface CreateCategory {
  name: string;
}

export class PrismaAdapter implements DatabaseAdapter {
  findBookByTitle(title: string): Promise<Book | null> {
    try {
      return new Promise(async (resolve, reject) => {
        const book = await prismaClient.book.findMany();

        resolve(book.filter(book => book.title === title)[0]);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }

  findCategoryByName(name: string): Promise<Category> {
    try {
      return new Promise(async (resolve, reject) => {
        const allCategories = await prismaClient.category.findMany();

        resolve(allCategories.filter(category => category.name === name)[0]);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }

  createBook(book: CreateBook): Promise<Book> {
    try {
      return new Promise(async (resolve, reject) => {
        const selectedCategory = await prismaClient.category.findFirst({
          where: {
            name: book.category,
          },
        });

        if (!selectedCategory) {
          return reject(new Error("Category not found"));
        }

        const createdBook = await prismaClient.book.create({
          data: {
            title: book.title,
            language: book.language,
            category: {
              connect: {
                id: selectedCategory.id,
              },
            },
            path: book.path,
          },
        });

        return resolve(createdBook);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }

  createCategory(category: CreateCategory): Promise<Category> {
    try {
      return new Promise(async (resolve, reject) => {
        const createdCategory = await prismaClient.category.create({
          data: {
            name: category.name,
          },
        });

        return resolve(createdCategory);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
  }
}
