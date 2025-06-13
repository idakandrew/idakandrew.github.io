function scrollAnim() {
    document.getElementById("title").classList.remove("animate-bottom");
    document.getElementById("title").classList.add("animate-top-out");
    document.getElementById("bar").classList.remove("animate-bottom");
    document.getElementById("bar").classList.add("animate-top-out");
    document.getElementById("desc").classList.remove("animate-bottom");
    document.getElementById("desc").classList.add("animate-top-out");
    document.getElementById("btn").classList.remove("animate-bottom");
    document.getElementById("btn").classList.add("animate-top-out");
}

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        scrollAnim();
    }

    lastScrollY = currentScrollY;
})

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    scrollAnim();
});

document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    scrollAnim();
});