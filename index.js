
// activities drowdown
if (document.querySelector('.activities-dropdown-toggle')) {
    document.querySelector('.activities-dropdown-toggle').addEventListener('click', () => {
        var dropdown = document.querySelector('.activities-dropdown-menu');
        var toggleButton = document.querySelector('.activities-dropdown-toggle i');

        if (dropdown.style.display == 'block') {
            dropdown.style.display = 'none';
            toggleButton.classList.remove('fa-caret-up');
            toggleButton.classList.add('fa-caret-down');
        } else {
            dropdown.style.display = 'block';
            document.querySelector('.partners-dropdown-menu').style.display = 'none';
            toggleButton.classList.remove('fa-caret-down');
            toggleButton.classList.add('fa-caret-up');
        }
    })
}


//partners dropdown
if (document.querySelector('.partners-dropdown-toggle')) {
    document.querySelector('.partners-dropdown-toggle').addEventListener('click', () => {
        var dropdown = document.querySelector('.partners-dropdown-menu');
        var toggleButton = document.querySelector('.partners-dropdown-toggle i');

        if (dropdown.style.display == 'block') {
            dropdown.style.display = 'none';
            toggleButton.classList.remove('fa-caret-up');
            toggleButton.classList.add('fa-caret-down');
        } else {
            dropdown.style.display = 'block';
            document.querySelector('.activities-dropdown-menu').style.display = 'none';
            toggleButton.classList.remove('fa-caret-down');
            toggleButton.classList.add('fa-caret-up');
        }
    })
}
