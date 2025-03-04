// main
$('.nationBox').slick({
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   autoplaySpeed: 1000,
   slidesToShow: 7,
   //fade: true,
   adaptiveHeight: true,
   responsive: [
      {
         breakpoint: 2560,
         settings: {
            slidesToShow: 7,
         },
         breakpoint: 1024,
         settings: {
            slidesToShow: 5,
         },
      },
   ],
});

// 반응형 내비탭
var menuLeft = document.getElementById('cbp-spmenu-s1'),
   showLeft = document.getElementById('showLeft'),
   body = document.body;

showLeft.onclick = function () {
   classie.toggle(this, 'active');
   classie.toggle(menuLeft, 'cbp-spmenu-open');
   disableOther('showLeft');
};

function disableOther(button) {
   if (button !== 'showLeft') {
      classie.toggle(showLeft, 'disabled');
   }
}
