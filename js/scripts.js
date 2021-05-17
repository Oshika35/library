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