import { ListFormat } from 'typescript';
import { Book } from './Book';
import { LocalStorage } from './LocalStorage';

const output = document.querySelector('.output') as HTMLElement;
const outputMessage = document.querySelector('#output-message') as HTMLElement;
const submitBtn = document.querySelector('#submit') as HTMLButtonElement;
let books: Book[] = [];

output.addEventListener('click', e => {
  const currentElement = e.target as HTMLElement;
  const parent = currentElement.closest('.book') as HTMLElement;

  if (!parent) return;
  const id = Number(parent.dataset.id);

  if (doesContainClass(currentElement, 'delete')) {
    handleBookDelete(id);
  } else if (doesContainClass(currentElement, 'update')) {
    handleBookUpdate(parent, id);
  }
});

submitBtn.addEventListener('click', e => {
  const inputFields = document.querySelectorAll(
    '.form input'
  ) as NodeListOf<HTMLInputElement>;

  if (!checkEmptyFields(inputFields)) {
    writeMessage('Please fill in all the input fields.', 'red');
    return;
  }

  books.push(Book.createBook(inputFields, books.length));
  writeMessage('Successfuly added new book.', 'green');
  displayBooks();
});

function writeMessage(message: string, color: string) {
  outputMessage.style.color = color;
  outputMessage.textContent = message;
}

function checkEmptyFields(inputs: NodeListOf<HTMLInputElement>) {
  const inputArr = Array.from(inputs);

  let returnVal = true;

  for (let input of inputArr) {
    returnVal = returnVal && input.value.length !== 0;
  }
  return returnVal;
}

function doesContainClass(el: HTMLElement, str: string) {
  return el.classList.contains(str);
}

function handleBookDelete(id: number) {
  LocalStorage.remove(id.toString());
  books = books.filter(book => book.id !== id);
  writeMessage('Successfuly deleted a book.', 'orangered');
  displayBooks();
}

function handleBookUpdate(parentEl: HTMLElement, bookId: number) {
  const foundBook = books.find(book => book.id === bookId);
  if (!foundBook) return;

  parentEl.innerHTML = foundBook.toUpdateHTML();

  const btnSubmit = parentEl.querySelector('#submit')!;
  const inputs = parentEl.querySelectorAll('input');

  disableButtons();

  btnSubmit.addEventListener('click', () => {
    parentEl.innerHTML = foundBook.toHTML();
    foundBook.updateBook(inputs);
    LocalStorage.update(foundBook);
    writeMessage('Successfuly updated a book.', 'cyan');
    submitBtn.disabled = false;
    displayBooks();
  });
}

function displayBooks() {
  output.innerHTML = '';
  books.forEach(book => {
    output.innerHTML += book.toHTML();
  });
}

function disableButtons() {
  submitBtn.disabled = true;
  document
    .querySelectorAll('.delete')
    .forEach(btn => ((btn as HTMLButtonElement).disabled = true));
}

const book1 = new Book('Book 1', 'Author 1', false, 0);
const book2 = new Book('Book 2', 'Author 2', true, 1);
LocalStorage.add(book1);
LocalStorage.add(book2);
LocalStorage.getLocalStorageItems(books);
displayBooks();
