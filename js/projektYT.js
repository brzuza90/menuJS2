const icon = document.querySelector('.burger');
icon.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
})