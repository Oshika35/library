function init() {
    const modal = document.querySelector(".book__modal");

    let myLibrary = [];
    const pageTitle = document.querySelector('.container__header h1');
    pageTitle.addEventListener('click', () => {
        console.log(myLibrary);
    });

    class Book {
        constructor(title, author, nbOfpages, read) {
            this.title = title;
            this.author = author;
            this.nbOfpages = nbOfpages;
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
                hideModal();
            } else {
                return alert("Please fill the inputs");
            }
        });
    }

    function addBookToLibrary(title, author, nbOfPages, read) {
        myLibrary.push(new Book(title, author, nbOfPages, read));
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
        form.forEach(e => e.value = '');
    }

    displayModal();
    submitForm();
}
init();