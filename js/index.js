
//! Owl library
$(document).ready(function(){
    $(".owl-carousel.owl-panner").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:true,
        stagePadding: 150,
    });
});

//! AOS library
AOS.init();

//! Navbar
const menu = document.querySelector('.responsive-Menu');
const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.close');

showMenu.addEventListener('click', () => {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});

// Card Icon Heart
const iconHeartContainer = document.querySelectorAll('.card .card-title .icon');
const iconsHeart = document.querySelectorAll('.card .card-title .icon i');
// console.log(iconHeart);

{/* <i class="fa-solid fa-heart"></i> */}
{/* <i class="fa-regular fa-heart"></i> */}

iconHeartContainer.forEach((container, index) => {
    container.addEventListener("click", () => {
        container.classList.toggle("active");

        const icon = iconsHeart[index];
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
    });
});



//! particlesJS library
    // particlesJS("particles-js", {
    //     particles: {
    //         number: { value: 200, density: { enable: true, value_area: 800 } },
    //         color: { value: "#FFD23F" },
    //         shape: { type: "circle" },
    //         opacity: { value: 0.6 },
    //         size: { value: 2 },
    //         move: {
    //         enable: true,
    //         speed: 2,
    //         direction: "none",
    //         random: true,
    //         straight: false,
    //         outModes: "out",
    //         },
    //         line_linked: {
    //         enable: false,
    //         },
    //     },
    //     interactivity: {
    //         detect_on: "canvas",
    //         events: {
    //         onhover: { enable: false },
    //         onclick: { enable: false },
    //         },
    //     },
    //     retina_detect: true,
    // });





    //! إظهار وإخفاء الباسورد
const passIcons = document.querySelectorAll(".eye-icon");

passIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        const input = this.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            this.classList.add("fa-eye");
            this.classList.remove("fa-eye-slash");
        }
        else {
            input.type = "password";
            this.classList.add("fa-eye-slash");
            this.classList.remove("fa-eye");
        }
    });
});


//! Verify-Code
const inputs = document.querySelectorAll(".verify-input-container .verify-input");
const firstInput = document.querySelector(".verify-input.firstInput");

    // Inupt يعمل فوكس ع أول
    firstInput?.focus();

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, ""); // يكتب ارقام بس

        // لما أكتب رقم ف الدايرةالمؤشر يروح تلقائي ع اللي بعده
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus(); // اللى بعده input يروح ع ال
        }
    });

    // فاضى يرجع ع اللي قبلها input وال Backspace لو ضغطت
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Array لما المستخدم يكتب آخر رقم بيجمع الكود كله ف
// inputs[inputs.length - 1].addEventListener("input", () => {
//     const code = Array.from(inputs).map(input => input.value).join("");
//     console.log("رمز التحقق:", code);
// });

// كل رقم لوحده
// inputs[inputs.length - 1].addEventListener("input", () => {
//     const codeArray = Array.from(inputs).map(input => input.value);
//     console.log("كل رقم لوحده:", codeArray);
// });

//! VanillaTilt.js ====> بيخلى الكارد يتحرك حسب حركة الماوس
// VanillaTilt.init(document.querySelectorAll(".card"), {
//     max: 25, // درجة الميل
//     speed: 400, // سرعة الحركة
//     glare: true, // اللمعة
//     "max-glare": 0.4, // شدة اللمعة
// });









//! GSAP
// const cards = document.querySelectorAll(".card");

// cards.forEach(card => {
//     card.addEventListener("mouseenter", () => {
//         gsap.to(card, {
//             y: -10,
//             scale: 1.05,
//             boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
//             duration: 0.5,
//             ease: "power3.out"
//         });
//     });

//     card.addEventListener("mouseleave", () => {
//         gsap.to(card, {
//             y: 0,
//             scale: 1,
//             boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//             duration: 0.5,
//             ease: "power3.inOut"
//         });
//     });
// });



//! Anime.js
    // const card = document.querySelector(".card");

    // card.addEventListener("mouseenter", () => {
    //     anime({
    //     targets: card,
    //     scale: [1, 1.1],
    //     rotateY: [0, 180],
    //     boxShadow: [
    //         "0 0 0 rgba(255,255,255,0)",
    //         "0 0 40px rgba(255,255,255,0.3)"
    //     ],
    //     easing: "easeInOutQuad",
    //     duration: 1000
    //     });
    // });

    // card.addEventListener("mouseleave", () => {
    //     anime({
    //     targets: card,
    //     scale: 1,
    //     rotateY: 0,
    //     boxShadow: "0 0 0 rgba(255,255,255,0)",
    //     easing: "easeInOutQuad",
    //     duration: 1000
    //     });
    // });


    // const card = document.querySelector(".card");
    // let hoverAnimation;

    // card.addEventListener("mouseenter", () => {
    //     hoverAnimation = anime({
    //     targets: card,
    //     scale: [1, 1.05],
    //     rotate: [0, 5],
    //     duration: 1000,
    //     easing: "easeInOutExpo",
    //     direction: "alternate",
    //     loop: true
    //     });
    // });

    // card.addEventListener("mouseleave", () => {
    //     if (hoverAnimation) hoverAnimation.pause();
    //     anime({
    //     targets: card,
    //     scale: 1,
    //     rotate: 0,
    //     duration: 500,
    //     easing: "easeOutExpo"
    //     });
    // });

