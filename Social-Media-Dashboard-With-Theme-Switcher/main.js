const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    //Change the theme to Dark/Light Mode
    document.body.classList.toggle('dark');
})