/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Book = void 0;\nclass Book {\n    constructor(name, author, hasRead, id) {\n        this.name = name;\n        this.author = author;\n        this.hasRead = hasRead;\n        this.id = id;\n    }\n    static createBook(inputFields, id) {\n        return new Book(inputFields[0].value, inputFields[1].value, inputFields[2].checked, id);\n    }\n    updateBook(inputFields) {\n        this.name = inputFields[0].value;\n        this.author = inputFields[1].value;\n        this.hasRead = inputFields[2].checked;\n    }\n    toHTML() {\n        return `\n      <div class=\"book\" data-id=\"${this.id}\">\n        <p class=\"name\">${this.name}</p>\n        <p class=\"author\">${this.author}</p>\n        <p class=\"status\">${this.hasRead === true ? 'read' : 'not read'}</p>\n        <button class=\"delete\">Delete</button>\n        <button class=\"update\">Update</button>\n      </div>\n      `;\n    }\n    toUpdateHTML() {\n        return `\n        <label for=\"book-name\">Book</label>\n        <input type=\"text\" id=\"book-name\" value=\"${this.name}\" />\n        <label for=\"book-name\">Author</label>\n        <input type=\"text\" id=\"author\" value=\"${this.author}\" />\n        <label for=\"book-name\">Status</label>\n        <input type=\"checkbox\" id=\"have-read\" ${this.hasRead ? 'checked' : ''}/>\n        <button id=\"submit\">submit</button>\n      `;\n    }\n}\nexports.Book = Book;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQm9vay50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDLDBCQUEwQixVQUFVO0FBQ3BDLDRCQUE0QixZQUFZO0FBQ3hDLDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQSxnREFBZ0QsOEJBQThCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvQm9vay50cz83M2UwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Cb29rID0gdm9pZCAwO1xuY2xhc3MgQm9vayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYXV0aG9yLCBoYXNSZWFkLCBpZCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICAgICAgdGhpcy5oYXNSZWFkID0gaGFzUmVhZDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlQm9vayhpbnB1dEZpZWxkcywgaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb29rKGlucHV0RmllbGRzWzBdLnZhbHVlLCBpbnB1dEZpZWxkc1sxXS52YWx1ZSwgaW5wdXRGaWVsZHNbMl0uY2hlY2tlZCwgaWQpO1xuICAgIH1cbiAgICB1cGRhdGVCb29rKGlucHV0RmllbGRzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGlucHV0RmllbGRzWzBdLnZhbHVlO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGlucHV0RmllbGRzWzFdLnZhbHVlO1xuICAgICAgICB0aGlzLmhhc1JlYWQgPSBpbnB1dEZpZWxkc1syXS5jaGVja2VkO1xuICAgIH1cbiAgICB0b0hUTUwoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9va1wiIGRhdGEtaWQ9XCIke3RoaXMuaWR9XCI+XG4gICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dGhpcy5uYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJhdXRob3JcIj4ke3RoaXMuYXV0aG9yfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGF0dXNcIj4ke3RoaXMuaGFzUmVhZCA9PT0gdHJ1ZSA/ICdyZWFkJyA6ICdub3QgcmVhZCd9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ1cGRhdGVcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG4gICAgdG9VcGRhdGVIVE1MKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWwgZm9yPVwiYm9vay1uYW1lXCI+Qm9vazwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYm9vay1uYW1lXCIgdmFsdWU9XCIke3RoaXMubmFtZX1cIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiYm9vay1uYW1lXCI+QXV0aG9yPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhdXRob3JcIiB2YWx1ZT1cIiR7dGhpcy5hdXRob3J9XCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImJvb2stbmFtZVwiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImhhdmUtcmVhZFwiICR7dGhpcy5oYXNSZWFkID8gJ2NoZWNrZWQnIDogJyd9Lz5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgYDtcbiAgICB9XG59XG5leHBvcnRzLkJvb2sgPSBCb29rO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Book.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Book_1 = __webpack_require__(/*! ./Book */ \"./src/Book.ts\");\nconst output = document.querySelector('.output');\nconst submitBtn = document.querySelector('#submit');\nlet books = [];\noutput.addEventListener('click', e => {\n    //Delete button is pressed\n    if (doesContainClass(e.target, 'delete')) {\n        const parent = e.target.closest('.book');\n        const id = Number(parent.dataset.id);\n        handleBookDelete(id);\n    }\n    //Update button is pressed\n    else if (doesContainClass(e.target, 'update')) {\n        const parent = e.target.closest('.book');\n        const id = Number(parent.dataset.id);\n        handleBookUpdate(parent, id);\n    }\n});\nsubmitBtn.addEventListener('click', e => {\n    const inputFields = document.querySelectorAll('form input');\n    books.push(Book_1.Book.createBook(inputFields, books.length));\n    displayBooks();\n});\nfunction doesContainClass(el, str) {\n    return el.classList.contains(str);\n}\nfunction handleBookDelete(id) {\n    books = books.filter(book => book.id !== id);\n    displayBooks();\n}\nfunction handleBookUpdate(parentEl, bookId) {\n    const foundBook = books.find(book => book.id === bookId);\n    if (!foundBook)\n        return;\n    submitBtn.disabled = true;\n    parentEl.innerHTML = foundBook.toUpdateHTML();\n    const btnSubmit = parentEl.querySelector('#submit');\n    const inputs = parentEl.querySelectorAll('input');\n    btnSubmit.addEventListener('click', () => {\n        parentEl.innerHTML = foundBook.toHTML();\n        foundBook.updateBook(inputs);\n        submitBtn.disabled = false;\n        displayBooks();\n    });\n}\nfunction displayBooks() {\n    output.innerHTML = '';\n    books.forEach(book => {\n        output.innerHTML += book.toHTML();\n    });\n}\nbooks.push(new Book_1.Book('ShIT', 'CRAP', true, 69));\nbooks.push(new Book_1.Book('dASDLA', 'DJSAKLDJSAK:', false, 70));\ndisplayBooks();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJvb2tfMSA9IHJlcXVpcmUoXCIuL0Jvb2tcIik7XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0cHV0Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG5sZXQgYm9va3MgPSBbXTtcbm91dHB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIC8vRGVsZXRlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgaWYgKGRvZXNDb250YWluQ2xhc3MoZS50YXJnZXQsICdkZWxldGUnKSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuYm9vaycpO1xuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihwYXJlbnQuZGF0YXNldC5pZCk7XG4gICAgICAgIGhhbmRsZUJvb2tEZWxldGUoaWQpO1xuICAgIH1cbiAgICAvL1VwZGF0ZSBidXR0b24gaXMgcHJlc3NlZFxuICAgIGVsc2UgaWYgKGRvZXNDb250YWluQ2xhc3MoZS50YXJnZXQsICd1cGRhdGUnKSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCcuYm9vaycpO1xuICAgICAgICBjb25zdCBpZCA9IE51bWJlcihwYXJlbnQuZGF0YXNldC5pZCk7XG4gICAgICAgIGhhbmRsZUJvb2tVcGRhdGUocGFyZW50LCBpZCk7XG4gICAgfVxufSk7XG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXQnKTtcbiAgICBib29rcy5wdXNoKEJvb2tfMS5Cb29rLmNyZWF0ZUJvb2soaW5wdXRGaWVsZHMsIGJvb2tzLmxlbmd0aCkpO1xuICAgIGRpc3BsYXlCb29rcygpO1xufSk7XG5mdW5jdGlvbiBkb2VzQ29udGFpbkNsYXNzKGVsLCBzdHIpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0cik7XG59XG5mdW5jdGlvbiBoYW5kbGVCb29rRGVsZXRlKGlkKSB7XG4gICAgYm9va3MgPSBib29rcy5maWx0ZXIoYm9vayA9PiBib29rLmlkICE9PSBpZCk7XG4gICAgZGlzcGxheUJvb2tzKCk7XG59XG5mdW5jdGlvbiBoYW5kbGVCb29rVXBkYXRlKHBhcmVudEVsLCBib29rSWQpIHtcbiAgICBjb25zdCBmb3VuZEJvb2sgPSBib29rcy5maW5kKGJvb2sgPT4gYm9vay5pZCA9PT0gYm9va0lkKTtcbiAgICBpZiAoIWZvdW5kQm9vaylcbiAgICAgICAgcmV0dXJuO1xuICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGFyZW50RWwuaW5uZXJIVE1MID0gZm91bmRCb29rLnRvVXBkYXRlSFRNTCgpO1xuICAgIGNvbnN0IGJ0blN1Ym1pdCA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICBjb25zdCBpbnB1dHMgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGFyZW50RWwuaW5uZXJIVE1MID0gZm91bmRCb29rLnRvSFRNTCgpO1xuICAgICAgICBmb3VuZEJvb2sudXBkYXRlQm9vayhpbnB1dHMpO1xuICAgICAgICBzdWJtaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZGlzcGxheUJvb2tzKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkaXNwbGF5Qm9va3MoKSB7XG4gICAgb3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICAgIGJvb2tzLmZvckVhY2goYm9vayA9PiB7XG4gICAgICAgIG91dHB1dC5pbm5lckhUTUwgKz0gYm9vay50b0hUTUwoKTtcbiAgICB9KTtcbn1cbmJvb2tzLnB1c2gobmV3IEJvb2tfMS5Cb29rKCdTaElUJywgJ0NSQVAnLCB0cnVlLCA2OSkpO1xuYm9va3MucHVzaChuZXcgQm9va18xLkJvb2soJ2RBU0RMQScsICdESlNBS0xESlNBSzonLCBmYWxzZSwgNzApKTtcbmRpc3BsYXlCb29rcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;