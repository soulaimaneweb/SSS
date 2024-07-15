




let popup = document.querySelector(".hello-poppup")
console.log(popup);
window.addEventListener("scroll" , () => {
    popup.classList.toggle("active" , window.scrollY >= 3319)
})
console.log(window.scrollY);



// ________________ Header Scroll ________________ 
let header = document.querySelector(".header-section")
window.addEventListener("scroll" , () => {
    header.classList.toggle("active" , window.scrollY > 10)
})


// ________________ Button To Top ________________ 
let btnTop = document.querySelector(".btn-top")
window.addEventListener("scroll" , () => {
    btnTop.classList.toggle("active" , window.scrollY > 300)
})
btnTop.addEventListener("click" , () => {
    window.scrollTo({
        top,
        behavior:"smooth"
    })
})


// ________________ Nav Bar Toggle ________________ 
let navBar = document.querySelector(".nav-list")
let openBtn = document.querySelector(".nav-open-btn")
let closeBtn = document.querySelector(".nav-close-btn")
let navLinks = document.querySelectorAll(".nav-bar li a ")

openBtn.addEventListener("click" , () => {
    navBar.classList.add("active")
})
closeBtn.addEventListener("click" , () => {
    navBar.classList.remove("active")
})
navLinks.forEach(el => {
        el.addEventListener("click" , () => {
            navBar.classList.remove("active")
        })
});


// ________________Scroll Reveal________________ 

let sr = ScrollReveal({
    distance:"30px",
    duration:2000,
    delay:200,
    reset:true
})

sr.reveal(".home-img, .about-top .left, form")
sr.reveal(".home-data, .progress-item, .about-card, .top-section, .project-item, .contact-data" , {origin:"top" , interval:true})







