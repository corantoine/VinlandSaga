window.addEventListener('load', () => {
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let btn = document.querySelector('.contact-button')
let aftercontact = document.querySelector('.contact-container')
let counter = 0;
const images = ["/attachments/1.webp","/attachments/2.webp","/attachments/3.webp"]

setTimeout(() => {
    const links = document.querySelectorAll("nav li");
    const icons = document.getElementById("icons");
    
    icons.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
    
    links.forEach((link) => {
        link.addEventListener("click", () =>{
            nav.classList.remove("active")
        })
    })
}, 2000);


document.querySelector('header').innerHTML = `<div  class="nav-container">
    <nav id="nav">
        <h3> <a href="index.html" class="logo">&#9876;</a></h3>
        <ul>
            <li>
                <a href="about.html">VINLAND SAGA</a>
            </li>
            <li>
                <a href="boutique.html">BOUTIQUE</a>
            </li>
            <li>
                <a href="contact.html">CONTACT </a>
            </li>
        </ul>
        <div id="icons"></div>
    </nav>
</div>`

document.querySelector('footer').innerHTML = `<footer>
<img src="/attachments/vinland-saga.png" class="vinland" alt="Logo Vinland Saga">
</footer>`

next.addEventListener("click", (e) => {
    if (counter < images.length - 1) {
        counter++
    } else {
        counter = 0;
    }
    document.getElementById('slider').src = images[counter];
})

prev.addEventListener("click", (e) => {
    if (counter > 0) {
        counter--
    } else {
        counter = images.length - 1
    }
    document.getElementById('slider').src = images[counter];
})

});




