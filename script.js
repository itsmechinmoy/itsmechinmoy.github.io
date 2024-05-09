// header scrolling effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("nav-show");
  } else {
    $("header").removeClass("nav-show");
  }
});

//hamburger
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");

  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");

    //Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    //hamburger animation
    hamburger.classList.toggle("toggle");
  };
};

window.onload = () => navSlide();

//#TIME AND DATE BOTH-->
/*`use strict`;
function refreshTime() {
	const timeDisplay = document.getElementById("time");
	const dateString = new Date().toLocaleString();
	const formattedString = dateString.replace(", ", " - ");
	timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);*/

//#TIME ONLY-->
`use strict`;
const timeDisplay = document.getElementById("time");
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
});

//counter through api

const updateVisitorCount = async () => {
  try {
    const response = await fetch(
      "https://api.countapi.xyz/hit/vanitasprofile.netlify.app/index.html"
    );
    const result = await response.json();
    document.getElementById("visitor-count").innerHTML = result.value;
  } catch (error) {
    console.error(error);
  }
};
updateVisitorCount();
