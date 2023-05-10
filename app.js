let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "70px",
  duration: 2700,
  reset: false,
});

sr.reveal(".hero-text", { delay: 200, origin: "bottom" });
sr.reveal(".hero-img", { delay: 350, origin: "top" });
sr.reveal(".down-arrow", { delay: 450, origin: "right" });
sr.reveal(".about-title", { delay: 450, origin: "left" });
sr.reveal("#aboutBx", { delay: 450, origin: "right" });
sr.reveal(".check-container", { delay: 450, origin: "right" });

document
  .querySelector(".switch .check-input")
  .addEventListener("click", function (event) {
    var detailedGalleryView = document.querySelector("#detailedGalleryView");
    var normalView = document.querySelector(".normalViewGalley");

    if (event.target.checked) {
      detailedGalleryView.style.display = "block";
      normalView.style.display = "none";
      var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: 1,
        },
        // loop: true,
        rewind: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // pagination: {
        //     el: ".swiper-pagination",
        // },
      });
    } else {
      detailedGalleryView.style.display = "none";
      normalView.style.display = "flex";
      normalView.style.justifyContent = "center";
    }
  });
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#my-form");
  var successMsg = document.querySelector("#success-msg");
  const canvas = document.getElementById('#success-msg')
  const jsConfetti = new JSConfetti({ canvas })


  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission behavior
    const outputs = document.querySelectorAll("#output");
    outputs.forEach((output) => {
      output.value = "";
    });
    successMsg.classList.remove("hidden");
    jsConfetti.addConfetti({
      confettiRadius: 4,
    })

    setTimeout(function () {
      successMsg.classList.add("hidden");
    }, 3000);
  });
});

// inputs.forEach((input) => {
    //   input.value = "";
    // });
    // textarea.forEach((input) => {
    //   input.value = "";
    // });
