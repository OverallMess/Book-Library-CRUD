import { Book } from './Book';
import { LocalStorage } from './LocalStorage';

const output = document.querySelector('.output') as HTMLElement;
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
    'form input'
  ) as NodeListOf<HTMLInputElement>;
  books.push(Book.createBook(inputFields, books.length));
  displayBooks();
});

function doesContainClass(el: HTMLElement, str: string) {
  return el.classList.contains(str);
}

function handleBookDelete(id: number) {
  LocalStorage.remove(id.toString());
  books = books.filter(book => book.id !== id);
  displayBooks();
}

function handleBookUpdate(parentEl: HTMLElement, bookId: number) {
  const foundBook = books.find(book => book.id === bookId);
  if (!foundBook) return;

  submitBtn.disabled = true;
  parentEl.innerHTML = foundBook.toUpdateHTML();

  const btnSubmit = parentEl.querySelector('#submit')!;
  const inputs = parentEl.querySelectorAll('input');

  btnSubmit.addEventListener('click', () => {
    parentEl.innerHTML = foundBook.toHTML();
    foundBook.updateBook(inputs);
    LocalStorage.update(foundBook);
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

books.push(new Book('ShIT', 'CRAP', true, 69));
books.push(new Book('dASDLA', 'DJSAKLDJSAK:', false, 70));
LocalStorage.getLocalStorageItems(books);
displayBooks();
