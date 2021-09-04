let hamburger = document.getElementById("hamburger"),
illustrationEditor = document.getElementById("illustration-editor"),
nav = document.querySelector("header nav"),
arrows = document.querySelectorAll(".arrow"),
selects = document.querySelectorAll(".select"),
options = document.querySelectorAll(".select div");

// for handling nav
hamburger.addEventListener("click",() => {
    if(hamburger.classList.contains("active")) {
        hamburger.src = "./images/icon-hamburger.svg";
        nav.classList.add("hide");
    } else {
        hamburger.src = "./images/icon-close.svg";
        nav.classList.remove("hide");
    }
    hamburger.classList.toggle("active");
});

for(let i=0; i<arrows.length; i++) {
    arrows[i].addEventListener("click",() => {
        selects[i].classList.toggle("active");
        options[i].classList.toggle("hide");
    })
}

// for handling nav when page loads
if(window.innerWidth > 700) {
    desktopLayout();
}

// for handling nav when window resizes
window.addEventListener("resize",() => {
    if(window.innerWidth > 700) {
        desktopLayout();
    } else {
        mobileLayout();
    }
})

function mobileLayout() {
    
} 

function desktopLayout() {

} 