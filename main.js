window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 70)
})

// nav //

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        }else{
            icon.className = 'uil uil-plus';
        }
    })
})

// SWIPER //


// SHOW/HIDE //

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// ****** MODAL ****** //

const ethics = document.getElementById("btnethics")
const img1 = document.getElementById("img1")
const backgroundModal = document.querySelector(".backgroundModal")
const close = document.getElementById("close")

ethics.addEventListener("click", () => {
    img1.style.display = "block"
    backgroundModal.style.display = "block"
})

close.addEventListener("click", () => {
    img1.style.display = "none"
    backgroundModal.style.display = "none"
})