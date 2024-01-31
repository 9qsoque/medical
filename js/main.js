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

    //   /*mobile swiper*/





      if (matchMedia) {
        var screen1200 = window.matchMedia ("(max-width:1200px)");
        screen1200.addListener(changes1200);
        changes1200(screen1200);
      }

      function changes1200(screen1200){
        if (screen1200.matches) {
            var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 2.2,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });
    }
    else{
      var swiper = new Swiper(".mySwiper", {
                  rewind: true,
      slidesPerView: 4.2,
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
      slidesPerView: 3.1,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false
    });      
    }
  }    


      if (matchMedia) {
        var screen992 = window.matchMedia ("(max-width:992px)");
        screen992.addListener(changes992);
        changes992(screen992);
      }

      function changes992(screen992){
        if (screen992.matches) {
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
      slidesPerView: 1.16,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });
      var swiper = new Swiper(".mySwiper", {
                  rewind: true,
      slidesPerView: 3.25,
            navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      allowTouchMove:false
    });         
    }
    else{
      changes1200(screen1200);
    }
  }


      if (matchMedia) {
        var screen875 = window.matchMedia ("(max-width:875px)");
        screen875.addListener(changes875);
        changes875(screen875);
      }
      function changes875(screen875){
        if (screen875.matches) {   
      var swiper = new Swiper(".mySwiperBlogs", {
                  rewind: true,
      slidesPerView: 2,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false
    });
      var swiper = new Swiper(".mySwiperOfferAbout", {
                  rewind: true,
      slidesPerView: 2,
            navigation: {
        nextEl: ".swiper-button-next-about",
        prevEl: ".swiper-button-prev-about",
      },
      allowTouchMove:true
    });              
    }
    else{
      changes1200(screen1200);
    }      
  }


      if (matchMedia) {
        var screen844 = window.matchMedia ("(max-width:844px)");
        screen844.addListener(changes844);
        changes844(screen844);
      }

      function changes844(screen844){
        if (screen844.matches) {   
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 1.154,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });
      var swiper = new Swiper(".mySwiperOfferAbout", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-about",
        prevEl: ".swiper-button-prev-about",
      },
      allowTouchMove:true
    });         
    }
    else{
      changes992(screen992);
    }      
  }



      if (matchMedia) {
        var screen726 = window.matchMedia ("(max-width:726px)");
        screen726.addListener(changes726);
        changes726(screen726);
      }

      function changes726(screen726){
        if (screen726.matches) {   
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 1.141  ,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:true,
    });    
    }
    else{
      changes844(screen844);
    }      
  }  


        if (matchMedia) {
        var screen603 = window.matchMedia ("(max-width:603px)");
        screen603.addListener(changes603);
        changes603(screen603);
      }

      function changes603(screen603){
        if (screen603.matches) {   
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 1.13,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:false,
    });  
      var swiper = new Swiper(".mySwiperBlogs", {
                  rewind: true,
      slidesPerView: 0.975,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:true
    });       
    }
    else{
      changes726(screen726);
    }      
  }  



        if (matchMedia) {
        var screen545 = window.matchMedia ("(max-width:545px)");
        screen545.addListener(changes545);
        changes545(screen545);
      }

      function changes545(screen545){
        if (screen545.matches) {   
      var swiper = new Swiper(".mySwiperRev", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
      },
      allowTouchMove:true,
    });    
      var swiper = new Swiper(".mySwiperNews", {
                  rewind: true,
      slidesPerView: 1,
            navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
      },
      allowTouchMove:true
    });            
    }
    else{
      changes603(screen603);
    }      
  }    













  //     if (matchMedia) {
  //       var screen1200 = window.matchMedia ("(max-width:1200px)");
  //       screen1200.addListener(changes1200);
  //       changes1200(screen1200);
  //     }

  //     function changes1200(screen1200){
  //       if (screen1200.matches) {
  //         console.log("<1200")

  //   }
  //   else{
  //               console.log(">1200")
      
  //   }
  // }  



  //     if (matchMedia) {
  //       var screen992 = window.matchMedia ("(max-width:992px)");
  //       screen992.addListener(changes992);
  //       changes992(screen992);
  //     }

  //     function changes992(screen992){
  //       if (screen992.matches) {
  //         console.log("<992")

  //   }
  //   else{
  //     changes1200(screen1200);

  //   }
  // }  