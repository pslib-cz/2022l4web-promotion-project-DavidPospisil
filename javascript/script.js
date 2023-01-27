const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navbar");


hamburger.addEventListener("click", () =>{
    navlist.classList.toggle("active");
    hamburger.classList.toggle("active");    

});