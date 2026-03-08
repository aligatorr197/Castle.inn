/* SCROLL PROGRESS BAR */

const progress = document.createElement("div")

progress.style.position = "fixed"
progress.style.top = "0"
progress.style.left = "0"
progress.style.height = "4px"
progress.style.background = "#38bdf8"
progress.style.zIndex = "9999"

document.body.appendChild(progress)

window.addEventListener("scroll",()=>{

let scroll = document.documentElement.scrollTop
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

progress.style.width = (scroll/height)*100 + "%"

})



/* HEADER SHADOW ON SCROLL */

const header = document.querySelector("header")

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)"

}else{

header.style.boxShadow = "none"

}

})



/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".post, section, h2")

function reveal(){

revealElements.forEach(el=>{

let windowHeight = window.innerHeight
let elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){

el.style.opacity = "1"
el.style.transform = "translateY(0)"

}

})

}

revealElements.forEach(el=>{
el.style.opacity = "0"
el.style.transform = "translateY(40px)"
el.style.transition = "all .8s ease"
})

window.addEventListener("scroll",reveal)



/* CURSOR GLOW EFFECT */

const glow = document.createElement("div")

glow.style.width="20px"
glow.style.height="20px"
glow.style.borderRadius="50%"
glow.style.position="fixed"
glow.style.background="rgba(56,189,248,.6)"
glow.style.pointerEvents="none"
glow.style.filter="blur(10px)"

document.body.appendChild(glow)

document.addEventListener("mousemove",e=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})



/* SMOOTH PAGE LOAD */

window.addEventListener("load",()=>{

document.body.style.opacity="1"

})

document.body.style.opacity="0"
document.body.style.transition="opacity 1s"
