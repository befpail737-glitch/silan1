document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.classList.add('hamburger-menu');
    document.querySelector('header .container').appendChild(hamburger);

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
