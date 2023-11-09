const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#ffffff';
    }else{
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
        icon.style.color = '#000000';
    }
})