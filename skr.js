var nav = document.getElementById('nav'),
    offset = nav.getBoundingClientRect(),
    toScroll = offset.top + offset.height - offset.height / 2;

addEventListener('scroll', function ala() {
    if (window.scrollY > toScroll)
        nav.classList.add('clicknav')
    else
        nav.classList.remove('clicknav');
}, false);