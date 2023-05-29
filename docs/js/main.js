jQuery(function($) {
    $(document).ready(function(){
        $('.slider').slick({
            dots:true,
            slidesToShow:3,
            infinite: true, 
            responsive:[
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow:3,
                    }
                },
                {
                    breakpoint: 768,
                    settings:{
                        slidesToShow:1,
                        arrows: false, 
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow:1,
                        arrows: false, 
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
            ]
        });
    });

    //ハンバーガーメニュー
function toggleNav() {
    const body = document.body;
    const hamburger = document.getElementById("js_hamburger");
    const overlay = document.getElementById("js_overlay");
    hamburger.addEventListener("click", function () {
      body.classList.toggle("nav_open"); //クラスが含まれていれば削除、含まれていなければ追加する
    });
    overlay.addEventListener("click", function () {
      body.classList.remove("nav_open"); //クラスを削除する
    });
  }
  toggleNav();
          
});

