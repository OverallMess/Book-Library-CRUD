import { LocalStorage } from './LocalStorage';

export interface bookInterface {
  name: string;
  author: string;
  hasRead: boolean;
  id: number;
}

export class Book {
  private name: string;
  private author: string;
  private hasRead: boolean;
  public id: number;

  constructor(name: string, author: string, hasRead: boolean, id: number) {
    this.name = name;
    this.author = author;
    this.hasRead = hasRead;
    this.id = id;
  }

  static createBook(inputFields: NodeListOf<HTMLInputElement>, id: number) {
    const newBook = new Book(
      inputFields[0].value,
      inputFields[1].value,
      inputFields[2].checked,
      id
    );
    LocalStorage.add(newBook);
    return newBook;
  }

  static createBookFromInterface(newBook: bookInterface) {
    return new Book(newBook.name, newBook.author, newBook.hasRead, newBook.id);
  }

  updateBook(inputFields: NodeListOf<HTMLInputElement>) {
    this.name = inputFields[0].value;
    this.author = inputFields[1].value;
    this.hasRead = inputFields[2].checked;
  }

  toHTML() {
    return `
    <tr class="book" data-id=${this.id}>
      <th scope="row">${this.id}</th>
      <td>${this.name}</td>
      <td>${this.author}</td>
      <td>${this.hasRead === true ? 'read' : 'not read'}</td>
      <td><button class="btn btn-danger delete">Delete</td>
      <td><button class="update btn btn-primary">Update</td>
    </tr>
      `;
  }

  toUpdateHTML() {
    return `
    <tr class="book" data-id=${this.id}>
      <th scope="row">${this.id}</th>
      <td>
        <input
          required
          type="text"
          class="form-control"
          aria-label="Book name"
          value="${this.name}"
        />
      </td>
      <td>
      <input
          required
          type="text"
          class="form-control"
          aria-label="Book name"
          value="${this.author}"
        />
      </td>
      <td>
      <div class="col form-check form-switch">
          <input
            required
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            ${this.hasRead ? 'checked' : ''}
          />
          <label class="form-check-label" for="flexSwitchCheckChecked"
            >Have you read it?</label
          >
        </div>
      </td>
      <td><button class="update btn btn-primary" id="submit">Submit</td>
    </tr>
      `;
  }
}

// <label for="book-name">Book</label>
//         <input type="text" id="book-name" value="${this.name}" />
//         <label for="book-name">Author</label>
//         <input type="text" id="author" value="${this.author}" />
//         <label for="book-name">Status</label>
//         <input type="checkbox" id="have-read" ${this.hasRead ? 'checked' : ''}/>
//         <button id="submit">submit</button>
