function init() {
    let myLibrary = [];
    const pageTitle = document.querySelector('.container__header h1');
    pageTitle.addEventListener('click', () => console.log(myLibrary));
        class Book {
            constructor(title, author, nbOfpages, read) {
                this.title = title;
                this.author = author;
                this.nbOfpages = nbOfpages;
                this.read = read;
            }
        }

    function addBookToLibrary() {
        const addButton = document.querySelector(".button__addButton");
        const title = document.getElementById("row__title").value;
        const author = document.getElementById("row__author").value;
        const nbOfPages = document.getElementById("row__pages").value;
        const read = document.getElementById("row__read");

        addButton.addEventListener('click', () => {
            myLibrary.push(new Book(title, author, nbOfPages, read))
            console.log(myLibrary);
        });
    }
    addBookToLibrary();

    // modal
    function displayModal() {
        const modal = document.querySelector(".book__modal");
        const btn = document.querySelector(`.library__book--add`);
        const span = document.querySelector(".header__close");
        const form = document.querySelectorAll(".content__body input")

        function hideModal() {
            modal.classList.add('hidden');
            bodyScrollLock.enableBodyScroll(modal);
            form.forEach(e => e.value = '');
        }

        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            bodyScrollLock.disableBodyScroll(modal);
        });

        span.addEventListener('click', () => {
            return hideModal();
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                return hideModal();
            }
        });
    }
    displayModal()
}
init();