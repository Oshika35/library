function init() {
    const modal = document.querySelector(".book__modal");

    let myLibrary = [];
    const pageTitle = document.querySelector('.container__header h1');
    pageTitle.addEventListener('click', () => {
        console.log(myLibrary);
        console.log(myLibrary[0].title);
    });

    class Book {
        constructor(title, author, nbOfPages, read) {
            this.title = title;
            this.author = author;
            this.nbOfPages = nbOfPages;
            this.read = read;
        }
    }

    function submitForm() {
        const submit = document.querySelector(".button__addButton");

        submit.addEventListener('click', () => {
            const title = document.getElementById("row__title").value;
            const author = document.getElementById("row__author").value;
            const nbOfPages = document.getElementById("row__pages").value;
            const read = document.getElementById("row__read").checked;

            if (title !== "" && author !== "" && nbOfPages !== "") {
                addBookToLibrary(title, author, nbOfPages, read);
                displayBook();
                hideModal();
            } else {
                return alert("Please fill the inputs");
            }
        });
    }

    function addBookToLibrary(title, author, nbOfPages, read) {
        myLibrary.unshift(new Book(title, author, nbOfPages, read));
    }

    function displayBook() {
        addBookToDOM();
        const title = document.querySelector(".header__title");
        const author = document.querySelector(".header__author");
        const nbOfPages = document.querySelector(".footer__numberOfPages");
        const read = document.querySelector(".checkbox__switch input");
        const currentBook = myLibrary[0];
        title.textContent = currentBook.title;
        author.textContent = currentBook.author;
        nbOfPages.textContent = currentBook.nbOfPages;
        read.checked = currentBook.read;
    }

    function addBookToDOM() {
        const library = document.querySelector(".library__book--add");
        library.insertAdjacentHTML("afterend", `
        <div class="library__book">
        <div class="book__header">
          <div class="header__title"></div>
          <div class="header__author"></div>
        </div>
        <div class="book__body">
          <div class="body__icon"><svg class="w-6 h-6" fill="#9A67EA" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z">
              </path>
            </svg></div>
        </div>
        <div class="book__footer">
          <div class="footer__numberOfPages"></div>
          <div class="footer__checkbox">
            <div class="checkbox__read">Read</div>
            <label class="checkbox__switch">
              <input type="checkbox">
              <span class="switch__slider"></span>
            </label>
          </div>
        </div>
      </div>`);
    }

    // modal
    function displayModal() {
        const openModal = document.querySelector(`.library__book--add`);
        const span = document.querySelector(".header__close");

        openModal.addEventListener('click', () => {
            modal.classList.remove('hidden');
            bodyScrollLock.disableBodyScroll(modal);
        });

        span.addEventListener('click', () => {
            hideModal();
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                return hideModal();
            }
        });
    }

    function hideModal() {
        const form = document.querySelectorAll(".content__body input")
        modal.classList.add('hidden');
        bodyScrollLock.enableBodyScroll(modal);
        form.forEach(e => {
            e.value = '';
            e.checked = false;
        });
    }

    displayModal();
    submitForm();
}
init();