const pics_src = [
  "img/brian-miller-KErtoj7LZYQ-unsplash.jpg",
  "img/kazuo-ota-bjKoa34Iv_I-unsplash.jpg",
  "img/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash.jpg",
  "img/patrick-tomasso-SVVTZtTGyaU-unsplash.jpg",
  "img/raychel-sanner-z0hK819LWac-unsplash.jpg",
];
let num = -1;

function slideshow_timer() {
  if (num === 4) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("main-slide").src = pics_src[num];
}

setInterval(slideshow_timer, 4000);

const searchBtn = document.getElementById("search-btn");
const menubg = document.getElementById("menu-bg");
const menu = document.getElementById("search-by");

searchBtn.addEventListener("click", function () {
  menubg.classList.toggle("open-menubg");
  menu.classList.toggle("open-menu");
});

const targets = document.getElementsByClassName("fade");
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets[i]);
}

const downArrow = document.getElementById("clickArrow");
downArrow.addEventListener("click", function () {
  window.location.href = "#sights";
});

const hamburgerMenubg = document.getElementById("hamburger-menubg");
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
  hamburgerMenubg.classList.toggle("open-hamburgerMenubg");
  hamburgerMenu.classList.toggle("open-hamburgerMenu");
});
