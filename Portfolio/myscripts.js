document.getElementById('homee').addEventListener('click', function() {
    
    var scrollY = 10; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('about').addEventListener('click', function() {
    
    var scrollY = 800; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('portfolio').addEventListener('click', function() {
    
    var scrollY = 1600; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('contact').addEventListener('click', function() {
    
    var scrollY = 3200; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('about1').addEventListener('click', function() {
    
    var scrollY = 1200; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('portfolio1').addEventListener('click', function() {
    
    var scrollY = 2300; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('home1').addEventListener('click', function() {
    
    var scrollY = 0; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});
document.getElementById('contact1').addEventListener('click', function() {
    
    var scrollY = 3200; 
    window.scrollTo({
        top: scrollY,
        behavior: 'smooth' 
    });
});

// document.getElementsByClassName("dots")[0].style.transform = "scale(1)"
window.addEventListener('resize', function() {
const dotsDiv = document.querySelector('.dots');
const sideDiv = document.querySelector('.sidebar');
const windowWidth = window.innerWidth;

if (windowWidth <= 800) {
dotsDiv.style.display = "block";
sideDiv.style.display = "none";

} else {
dotsDiv.style.display = "none";
sideDiv.style.display = "flex";
}
});

// Call the event handler on page load to set the initial scale
window.dispatchEvent(new Event('resize'));

let bool = true;
const a = document.querySelector(".dot-item")
const b = document.querySelector(".side-bar2")
const c = document.getElementsByClassName("bar-item")
const d = document.getElementsByClassName("cross")[0]

b.style.width = "0rem"

for(let i = 0; i<c.length; i++)
c[i].style.display = "none"

a.addEventListener("click",()=>{
b.style.zIndex = "100"
if(!bool){
b.style.width = "20rem"
for(let i = 0; i<c.length; i++)
c[i].style.display = "block"
a.style.opacity = "0.6"
d.style.opacity = "1"

b.style.transition = "0.3s"
bool = !bool;
}
else{
b.style.width = "0rem"
for(let i = 0; i<c.length; i++)
c[i].style.display = "none"
a.style.opacity = "1"
d.style.opacity = "0"
bool = !bool
}
})
d.addEventListener("click", ()=>{
    b.style.width = "0rem"
for(let i = 0; i<c.length; i++)
c[i].style.display = "none"
a.style.opacity = "1"
d.style.opacity = "0"
bool = !bool
})