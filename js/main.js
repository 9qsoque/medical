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
      slidesPerView: 4,
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

      const burger = document.querySelector('.header__burger');
      const slide = document.querySelector('.header__slide');

      burger.addEventListener('click', () => {
        slide.classList.toggle('disp');
      });
