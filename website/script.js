const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

const section = document.querySelectorAll("[data-section");

const scrollReveal = function () {
    for (let i = 0; i < section.length; i++) {
        if (section[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            section[i].classList.add("active");
        } else {
            section[i].classList.remove("active");
        }
    }
}

scrollReveal();
addEventOnElem(window, "scroll", scrollReveal);