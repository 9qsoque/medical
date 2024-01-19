// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("review__article");

//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n<1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i<slides.length; i++){
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }


    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

    /*slider*/
            var swiper = new Swiper(".mySwiper", {
                  rewind: true,
      slidesPerView: 3.05,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
            navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });