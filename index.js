let hamburger = document.getElementById("hamburger"),
illustrationEditor = document.getElementById("illustration-editor"),
nav = document.querySelector("header nav"),
selects = document.querySelectorAll(".select"),
options = document.querySelectorAll(".select div"),
mobileArrows = document.querySelectorAll(".mobile-arrow"),
desktopArrows = document.querySelectorAll(".desktop-arrow");

// for handling nav
hamburger.addEventListener("click",() => {
    handleHamburgerAndNav();
});

function handleHamburgerAndNav() {
    if(hamburger.classList.contains("active")) {
        hamburger.src = "./images/icon-hamburger.svg";
        nav.classList.add("hide");
    } else {
        hamburger.src = "./images/icon-close.svg";
        nav.classList.remove("hide");
    }
    hamburger.classList.toggle("active");
}

for(let i=0; i<mobileArrows.length; i++) {
    mobileArrows[i].addEventListener("click",() => {
        selects[i].classList.toggle("active");
        options[i].classList.toggle("hide");
    });
    desktopArrows[i].addEventListener("click",() => {
        selects[i].classList.toggle("active");
        options[i].classList.toggle("hide");
    })
}

let currentLayout = "mobile";

// for handling nav when page loads
if(window.innerWidth > 850) {
    desktopLayout();
    currentLayout = "desktop";
}

// for handling nav when window resizes
window.addEventListener("resize",() => {
    if(window.innerWidth > 850 && currentLayout=="mobile") {
        desktopLayout();
        currentLayout ="desktop";
    } else if(window.innerWidth <= 850 && currentLayout=="desktop"){
        mobileLayout();
        currentLayout ="mobile";
    }
})

function mobileLayout() {
    hamburger.classList.remove("hide");
    nav.classList.remove("desktop-nav");
    nav.classList.add("mobile-nav");
    handleHamburgerAndNav();
    for(let i=0; i<mobileArrows.length; i++) {
        mobileArrows[i].classList.remove("hide");
        desktopArrows[i].classList.add("hide");
    }
} 

function desktopLayout() {
    hamburger.classList.add("hide");
    nav.classList.remove("mobile-nav");
    nav.classList.remove("hide");
    nav.classList.add("desktop-nav");
    handleHamburgerAndNav();
    for(let i=0; i<desktopArrows.length; i++) {
        desktopArrows[i].classList.remove("hide");
        mobileArrows[i].classList.add("hide");
    }
}