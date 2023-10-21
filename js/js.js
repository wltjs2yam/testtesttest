/* 스크롤이 되면 헤더 모양 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
  if(window.scrollY > 800){
    header.classList.add('on');} 
    
  if( window.scrollY <= 800){
    header.classList.remove('on');
  }
}) */


// 모바일 상태에서 메뉴슬라이드 / 닫기
const triggerBtn = document.querySelector('.trigger')
const moNav = document.querySelector('nav')
const closeBtn = document.querySelector('.close')

triggerBtn.addEventListener('click',function(e){
    e.preventDefault();
    moNav.classList.add('active');

closeBtn.addEventListener('click',function(){
    moNav.classList.remove('active')
})   
})

// // 명소, 음식 등의 메뉴 아이템과 각 섹션을 연결
// const navLinks = document.querySelectorAll('nav ul li a');
// const sections = document.querySelectorAll('section');

// // 각 메뉴 아이템 클릭 시 해당 섹션으로 스크롤 이동
// // navLinks.forEach((link, index) => {
// //   link.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     sections[index].scrollIntoView({ behavior: 'smooth' });
// //   });
// // });

// // 햄버거 버튼에서 섹션 스크롤 안먹히게 
// navLinks.forEach((link, index) => {
//   link.addEventListener('click', function (e) {
//     console.log(window.innerWidth);
//     e.preventDefault();
//     if (window.innerWidth > 831) {
//       sections[index].scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// 김지선 메인 (명소부분 ) js
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay: {
    delay:3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 여기까지


//김유리 메인(쇼핑부분) js
$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
});


//pc상태였을때 서브메뉴 슬라이드다운
$('.header_in_navbar,.header_in_bar_suv_shadow').on('mouseenter mouseleave',function(e){
  if(window.innerWidth > 830){  //pc상태였을때만

    if(e.type == 'mouseenter'){  //마우스 올려놨을때만     
      $('.header_in_bar_suv').stop().slideDown()
      $('.header_in_bar_suv_shadow').stop().   fadeIn();
    }
    else {
      $('.header_in_bar_suv').stop().slideUp(200,function(){ 
        $('.header_in_bar_suv').removeAttr('style') });

      $('.header_in_bar_suv_shadow').stop().fadeOut(200,function(){  
        $(this).removeAttr('style') } ); 
    }  
  } 
});