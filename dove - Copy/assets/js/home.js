let lastScrollTop = 0;
const headerContainer = document.querySelector('.c-header');
const navbar = document.querySelector(".c-header_main");
const dove = document.querySelector(".dove");
console.log(navbar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    headerContainer.style.top = '-60px';
    // dove.style.top = "110px"
    dove.style.marginTop = "110px";

    if (scrollTop >= 40) {
      headerContainer.style.top = "-180px";
      // dove.style.top = "45px";
      dove.style.marginTop = "45px";
    }
  } else {
    headerContainer.style.top = "-60px"
    // dove.style.top = "110px";
    dove.style.marginTop = "110px";
  }

  if (scrollTop > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const menuIcon1 = document.getElementById("menu-icon1");
const menuNav = document.getElementById("menu-nav");
const navSearch = document.querySelector(".nav-search");
const menuCta = document.getElementById("menu-cta");
menuIcon1.addEventListener("click", () => {
  menuIcon1.classList.toggle("open");
  menuNav.classList.toggle("show-nav");
  menuCta.classList.toggle("show-nav");
  // navSearch.classList.toggle("show-nav");
  document.body.classList.toggle("overFlow-hide");
});


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  // autoplay: {
  //     delay: 10000,
  //     disableOnInteraction: false
  // },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

// Testimonial slider
const testimonialBtns = document.querySelectorAll(".btn-testimonial");
const slideRow = document.getElementById("slide-row");
const testimonial = document.querySelector(".testimonial-container");

let currentIndex = 0;

function updateSlide() {
  const mainWidth = testimonial.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  testimonialBtns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

testimonialBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});


// customer review slide
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (slides.length > 0) {
  let slideIndex = 0;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');
    
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');

    setTimeout(() => plusSlides(1), 10000);
  }

  prev.addEventListener("click", () => {
      plusSlides(-1);
  });

  next.addEventListener("click", () => {
      plusSlides(1);
  });

  Array.from(dots).forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide(index);
    });
  });
}



