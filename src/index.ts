import { Book } from './Book';

const output = document.querySelector('.output') as HTMLElement;
const submitBtn = document.querySelector('#submit') as HTMLButtonElement;
let books: Book[] = [];

output.addEventListener('click', e => {
  //Delete button is pressed
  if (doesContainClass(e.target as HTMLElement, 'delete')) {
    const parent = (e.target as HTMLElement).closest('.book') as HTMLElement;
    const id = Number(parent.dataset.id);
    handleBookDelete(id);
  }
  //Update button is pressed
  else if (doesContainClass(e.target as HTMLElement, 'update')) {
    const parent = (e.target as HTMLElement).closest('.book') as HTMLElement;
    const id = Number(parent.dataset.id);
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
displayBooks();
