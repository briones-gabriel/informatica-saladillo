function main() {
        const toggleButton = document.getElementsByClassName("toggle-button")[0];
        const navbarLinks = document.getElementsByClassName("nav-links")[0];
        const buttonHome = document.getElementsByClassName("menu-item-home")[0];
        const buttonUs = document.getElementsByClassName("menu-item-us")[0];
        
        toggleButton.addEventListener('click', () => {
                navbarLinks.classList.toggle('active');
        });
        buttonUs.addEventListener('click', () => {
                navbarLinks.classList.toggle('active');
        });

        buttonHome.addEventListener('click', () => {
                navbarLinks.classList.toggle('active');
        });
}

window.onload = main;