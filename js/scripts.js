function init() {
    let myLibrary = [];

    function Book() {
        // the constructor...
    }

    function addBookToLibrary() {
        // do stuff here
    }

    // modal
    function displayModal() {
        const modal = document.querySelector(".book__modal");
        const btn = document.querySelector(`.library__book--add`);
        const span = document.querySelector(".modal__close");

        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            bodyScrollLock.disableBodyScroll(modal);
        });

        span.addEventListener('click', () => {
            modal.classList.add('hidden');
            bodyScrollLock.enableBodyScroll(modal);
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.classList.add('hidden');
                bodyScrollLock.enableBodyScroll(modal);
            }
        });
    }
    displayModal()
}
init();