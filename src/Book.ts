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
    return new Book(
      inputFields[0].value,
      inputFields[1].value,
      inputFields[2].checked,
      id
    );
  }

  updateBook(inputFields: NodeListOf<HTMLInputElement>) {
    this.name = inputFields[0].value;
    this.author = inputFields[1].value;
    this.hasRead = inputFields[2].checked;
  }

  toHTML() {
    return `
      <div class="book" data-id="${this.id}">
        <p class="name">${this.name}</p>
        <p class="author">${this.author}</p>
        <p class="status">${this.hasRead === true ? 'read' : 'not read'}</p>
        <button class="delete">Delete</button>
        <button class="update">Update</button>
      </div>
      `;
  }

  toUpdateHTML() {
    return `
        <label for="book-name">Book</label>
        <input type="text" id="book-name" value="${this.name}" />
        <label for="book-name">Author</label>
        <input type="text" id="author" value="${this.author}" />
        <label for="book-name">Status</label>
        <input type="checkbox" id="have-read" ${this.hasRead ? 'checked' : ''}/>
        <button id="submit">submit</button>
      `;
  }
}
