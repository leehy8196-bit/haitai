$(document).ready(function () { //시작

  //main-visual
  const banner_list = new Swiper(".banner-list", {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      //길다란 페이지네이션 바
    },

    autoplay: {
      delay: 2500,
      // 슬라이드가 머무르는 시간 (2500 = 2.5초)
      disableOnInteraction: false,
      // 마우스로 클릭/터치해도 오토플레이가 멈추지 않고 계속 유지됨
    },
    speed: 1000,
  });

  //tasty pick
  const tasty_list = new Swiper(".tasty-list", {
    loop: true,

    autoplay: {
      delay: 2500,
      // 슬라이드가 머무르는 시간 (2500 = 2.5초)
      disableOnInteraction: false,
      // 마우스로 클릭/터치해도 오토플레이가 멈추지 않고 계속 유지됨
    },

    navigation: {
      nextEl: '#tasty-pick .swiper-button-next',
      // 다음 버튼 연결
      prevEl: '#tasty-pick .swiper-button-prev',
      // 이전 버튼 연결
    },

    speed: 2000,

    slidesPerView: 1.5,
    spaceBetween: 20,

    breakpoints: {
      768: { //가로 해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: { //가로 해상도가 1024px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

    centeredSlides: true,
  });

  //new prd
  const new_list = new Swiper(".new-list", {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.5,
      },
    },
    speed: 1000,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      // 다음 버튼 연결
      prevEl: '.swiper-button-prev',
      // 이전 버튼 연결
    },
  });

     $(window).on('scroll', function () {
    // 현재 스크롤 위치를 가져옵니다.
    if ($(window).scrollTop() > 1000) {
      // 스크롤이 내려갔을 때 클래스 추가
      $('header').addClass('active');
    } else {
      // 스크롤이 맨 위에 있을 때 클래스 제거
      $('header').removeClass('active');
    }
  });

  $("header .utill .lang>li").mouseenter(function () {
    $("header .utill .lang>li .depth2").stop().slideDown()
  });
  $("header .utill .lang>li").mouseleave(function () {
    $("header .utill .lang>li .depth2").stop().slideUp()
  }); //언어선택

  $(".ham").click(function () {
    $(".mgnb-wrap").animate({ "right": "0" });
  });

  $(".mgnb-close").click(function () {
    $(".mgnb-wrap").animate({ "right": "-100%" });
  });

}); //끝