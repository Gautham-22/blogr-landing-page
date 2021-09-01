let hamburger = document.getElementById("hamburger");
let illustrationEditor = document.getElementById("illustration-editor");

hamburger.addEventListener("click",() => {
    if(hamburger.classList.contains("active")) {
        hamburger.src = "./images/icon-hamburger.svg";
    } else {
        hamburger.src = "./images/icon-close.svg";
    }
    hamburger.classList.toggle("active");
})

// for handling page layout when page loads
if(window.innerWidth > 700) {
    desktopLayout();
}

// for handling page layout when window resizes
window.addEventListener("resize",() => {
    if(window.innerWidth > 700) {
        desktopLayout();
    } else {
        mobileLayout();
    }
})

function mobileLayout() {
    // illustrationEditor.src = "./images/illustration-editor-mobile.svg";  
} 

function desktopLayout() {
    // illustrationEditor.src = "./images/illustration-editor-desktop.svg";  
} 