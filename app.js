const toggle = document.querySelector(".menu-toggle");
const toggleMenu = document.querySelector("#mobile-menu");
const navLinkToggle = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  if (toggleMenu.classList.contains("is-active")) {
    toggleMenu.classList.remove("is-active");
  } else {
    toggleMenu.classList.add("is-active");
  }

  if (navLinkToggle.classList.contains("is-active")) {
    navLinkToggle.classList.remove("is-active");
  } else {
    navLinkToggle.classList.add("is-active");
  }
});

// $(".menu-toggle").click(function () {
//   //   $(".nav").toggleClass("mobile-nav");
//   $(this).toggleClass("is-active");
//   console.log("Clicked");
// });
