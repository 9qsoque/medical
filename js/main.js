    var accItem = document.getElementsByClassName('faq__item');
    var accHD = document.getElementsByClassName('faq__heading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'faq__item close';
        }
        if (itemClass == 'faq__item close') {
            this.parentNode.className = 'faq__item open';
        }
    }

    /*slider*/
      var swiper = new Swiper(".mySwiper", {
                  rewind: true,
      slidesPerView: 0.95,
            navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      allowTouchMove:false
    });
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 3,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });
      var swiper = new Swiper(".mySwiperBlogs", {
                  rewind: true,
      slidesPerView: 3,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false
    });

      /*burger menu*/
      const burger = document.querySelector('.header__burger');
      const slide = document.querySelector('.header__slide');

      burger.addEventListener('click', () => {
        slide.classList.toggle('disp');
      });
      
      const mburger = document.querySelector('.mobile__bur');
      const mslide = document.querySelector('.mobile__sl');

      mburger.addEventListener('click', () => {
        mslide.classList.toggle('dis');
      });

      /*mobile swiper*/

      var swiper = new Swiper(".mySwiperOffer", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-offer",
        prevEl: ".swiper-button-prev-offer",
      },
      allowTouchMove:false,
    });
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });
      var swiper = new Swiper(".mySwiperNews", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
      },
      allowTouchMove:false
    });      