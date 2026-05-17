// Adding a modal
const gallery = document.querySelector('.grid_container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(event) {
    let imageSrc = event.target.src;
    modalImage.src = imageSrc.replace("-sm", "-full");
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Making the menu open
let menuButton = document.querySelector('.menu');
menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    let navigationMenu = document.querySelector("nav");
    navigationMenu.classList.toggle("hide");
    menuButton.classList.toggle("change");
}