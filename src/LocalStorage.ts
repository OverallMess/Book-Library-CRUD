import { Book } from './Book';

export class LocalStorage {
  static add(book: Book): void {
    localStorage.setItem(book.id.toString(), JSON.stringify(book));
  }
  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static update(book: Book): void {
    localStorage.setItem(book.id.toString(), JSON.stringify(book));
  }

  static getLocalStorageItems(books: Book[]): void {
    let keys = Object.keys(localStorage);

    keys.forEach(k => {
      const newBook = Book.createBookFromInterface(
        JSON.parse(localStorage.getItem(k) as string)
      );
      books.push(newBook);
    });
  }
}
