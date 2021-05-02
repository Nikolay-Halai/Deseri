// slider swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    pagination: {
        autoHeight: true,
        el: '.swiper-pagination',
        clickable: true,
      },
    
  });

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

    // mixitUp for gallery
    var mixer = mixitup('.container-gallery',{
      load: {
        filter: '.living'
      }
    });

    // btn menu 

    (function (){
      ('.btn-menu').on('click', function () {
        ('.rightside-menu').removeClass('rightside-menu-close');
      });
     
      ('.rightside-menu-btn').on('click', function () {
        ('.rightside-menu').addClass('rightside-menu-close');
      });
    })