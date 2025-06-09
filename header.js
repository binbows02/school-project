let hamburger = document.getElementById(`hamburgerOpenJS`);
let hamburgerOpen;

function openHamburger() {
    if (!hamburgerOpen) {
        hamburger.classList.remove(`hamburgerClosed`);
        hamburgerOpen = true
    } else {
        hamburger.classList.add(`hamburgerClosed`);
        hamburgerOpen = false;
    }
}

