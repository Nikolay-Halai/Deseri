 // function for webp work
 function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

  // btn menu 

    (function () {
        var buttonMenu = document.querySelector('.btn-menu')
      
        buttonMenu.addEventListener('click', function () {
          var menu = document.querySelector('.rightside-menu')
          menu.classList.remove('rightside-menu-close')
        })
      
        var rightsideMenuButton = document.querySelector('.rightside-menu-btn')
      
        rightsideMenuButton.addEventListener('click', function () {
          var menu = document.querySelector('.rightside-menu')
          menu.classList.add('rightside-menu-close')
        })
      })();

 // adaptiv menu burger

      $(document).ready(function() {
        $('.hamburger').click(function(event) {
          $('.hamburger, nav').toggleClass('active');      
        });    
      });

 // slider swiper

      var swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        // slidesPerView: 10,
        spaceBetween: 10,
        slidesPerGroup: 10,
        loop: true,
        freeMode: true,
        pagination: {        
            el: '.swiper-pagination',
            clickable: true,
            
          }, 
        breakpoints: {
          1200: {
            slidesPerView: 10,
          },

          800: {
            slidesPerView: 7,
          },

          640: {
            slidesPerView: 5,
          },

          400: {
            slidesPerView: 3,
          },

          300: {
            slidesPerView: 2,
          },
        },    
      });
    
