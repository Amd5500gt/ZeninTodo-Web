// ======================================
// Zenin Todo
// Premium Script
// ======================================

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// FAQ
// ===============================

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(item => {

    const btn = item.querySelector("button");

    btn.addEventListener("click", () => {

        faqItems.forEach(i => {

            if (i != item) {

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// ===============================
// Navbar Active
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal
// ===============================

const reveal = document.querySelectorAll(

".feature,.card,.review,.screenCard,.counter,.banner,.faqItem"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

reveal.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".7s";

    observer.observe(item);

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter h1");

let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".statsSection");

    if (!section) return;

    if (window.scrollY > section.offsetTop - 400 && !started) {

        started = true;

        counters.forEach(counter => {

            let target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

        });

    }

});

// ===============================
// Download Toast
// ===============================

const downloadBtns = document.querySelectorAll("a[download]");

downloadBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        showToast("Downloading Zenin Todo...");

    });

});

function showToast(text) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML =

    `<i class="fa-solid fa-circle-check"></i> ${text}`;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}

// ===============================
// Image Lightbox
// ===============================

const images = document.querySelectorAll(".screenCard img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

})

})

// ===============================
// Floating Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="none";

}

})

// ===============================
// Progress Bar
// ===============================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const value=(window.scrollY/total)*100;

progress.style.width=value+"%";

})

// ===============================
// Mouse Glow Effect
// ===============================

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(

"--x",

e.clientX+"px"

);

document.documentElement.style.setProperty(

"--y",

e.clientY+"px"

);

});

console.log("Zenin Todo Loaded Successfully 🚀");