let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",() => {
    if(hamburger.classList.contains("active")) {
        hamburger.src = "./images/icon-hamburger.svg";
    } else {
        hamburger.src = "./images/icon-close.svg";
    }
    hamburger.classList.toggle("active");
})