document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#nav-list a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            links.forEach(function(link) {
                link.classList.remove("ativo");
            });

            this.classList.add("ativo");
        });
    });
});

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#nav-list a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute("href"); 
            var targetSection = document.querySelector(targetId); 

            if (targetSection) {
                var offsetTop = targetSection.offsetTop; 
                
                
                var menuHeight = document.querySelector("#header").offsetHeight;
                var scrollToPosition = offsetTop - menuHeight;
                
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

const productContainers = document.querySelectorAll('#projeto-galeria');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((container, i) => {
    let startX;
    let scrollLeft;
    let isDown = false;
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; 
        container.scrollLeft = scrollLeft - walk;
    });

    nxtBtn[i].addEventListener('click', () => {
        container.scrollLeft += container.offsetWidth;
    });

    preBtn[i].addEventListener('click', () => {
        container.scrollLeft -= container.offsetWidth;
    });
});


const myObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show', 'show2');
    } else {
    entry.target.classList.remove('show', 'show2');
    }
});
});

const elements = document.querySelectorAll('.hide, .hide2');

elements.forEach((element) => myObserver.observe(element));








