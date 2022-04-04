window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 70)
})

// nav //

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //icon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        }else{
            icon.className = 'uil uil-plus';
        }
    })
})


// SHOW/HIDE //

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => (
    menu.style.display = "flex",
    closeBtn.style.display = "inline-block",
    menuBtn.style.display = "none"
))

const closeNav = () => {
    menu.style.display = "none",
    closeBtn.style.display = "none",
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)


// COUNTER OUTPUT //
 
function countTo() {
    let from = 0;
    let to = 15;
    let step = to > from ? 1 : -1;
    let interval = 100

    if (from == to) {
        document.querySelector("#output").textContent = from;
        return;
    }

    let counter = setInterval(function() {
        from += step;
        document.querySelector("#output").textContent = from;

        if(from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo();