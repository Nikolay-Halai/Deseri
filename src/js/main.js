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

  // mixitUp for gallery
  
   var mixer = mixitup('.container-gallery',{
    load: {
      filter: '.living'
    }
  });


     // slider swiper

  var swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    freeMode: true,
    pagination: {        
        el: '.swiper-pagination',
        clickable: true,
        
      },   
  });
