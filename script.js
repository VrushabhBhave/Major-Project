var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      850: {
        slidesPerView: 3,
      },

      500: {
        slidesPerView: 2,
      },

      300: {
        slidesPerView: 1,
      },
    },
  });


  const toTop = document.querySelector("#scroll");

  window.addEventListener("scroll", () =>{
    if(window.scrollY > 300){
      toTop.classList.add("active");
    }else{
      toTop.classList.remove("active");
    }
  });