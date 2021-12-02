
// activities drowdown
document.querySelector('.activities-dropdown-toggle').addEventListener('click', () => {
    var dropdown = document.querySelector('.activities-dropdown-menu');
    var toggleButton = document.querySelector('.button-dropdown i');

    if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none';
        toggleButton.classList.remove('fa-caret-up');
        toggleButton.classList.add('fa-caret-down');
    } else {
        dropdown.style.display = 'block';
        toggleButton.classList.remove('fa-caret-down');
        toggleButton.classList.add('fa-caret-up');
    }
})