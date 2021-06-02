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
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

(function () {
  var buttonMenu = document.querySelector('.btn-menu')

  if (buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      var menu = document.querySelector('.rightside-menu')
      menu.classList.remove('rightside-menu-close')
    })
  }

  var rightsideMenuButton = document.querySelector('.rightside-menu-btn')

  if (rightsideMenuButton) {
    rightsideMenuButton.addEventListener('click', function () {
      var menu = document.querySelector('.rightside-menu')
      menu.classList.add('rightside-menu-close')
    })
  }
})();

$(document).ready(function () {
  $('.hamburger').click(function (event) {
    $('.hamburger, nav').toggleClass('active');
  });

  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    $videoControls.toggleClass('pause', $video.paused);
    $videoContainer.toggleClass('video-is-playing', !$video.paused);

    if ($video.paused) {
      $video.play();
    } else {
      $video.pause();
      $video.load();
    }
  });

  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
  
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
  
  var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  });

  var galleryContainers = document.querySelectorAll('.container-gallery');

  if (galleryContainers.length) {
    var mixer = mixitup(galleryContainers, {
      load: {
        filter: '.living'
      }
    });
  }
});
