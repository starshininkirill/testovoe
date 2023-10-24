let menuBtn = document.getElementById('menu-btn')
let closeBtn = document.getElementById('close')
let menu = document.getElementById('menu')


menuBtn.addEventListener('click', function(e){   
   menu.classList.add('menu-active')
})

closeBtn.addEventListener('click', function(e){
   menu.classList.remove('menu-active')
})


let currnetWidth = window.innerWidth 

let slides = null
if(window.innerWidth > 1200){
   slides = 3
}else if (window.innerWidth <= 1200 && window.innerWidth > 900){
   slides = 2
}else{
   slides = 1
}

let swiper = new Swiper(".mySwiper", {
   slidesPerView: slides,
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   keyboard: true,
 });


 const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }
      if (entry.isIntersecting) {
         if(entry.target.classList.contains('fade')){
            entry.target.classList.add('animate');
         }else if(entry.target.classList.contains('fade-left')){
            entry.target.classList.add('animate-left');
         }else if(entry.target.classList.contains('fade-right')){
            entry.target.classList.add('animate-right');
         }
        
      }
    });
 });

document.querySelectorAll('.fade').forEach((i) => {
   if (i) {
       observer.observe(i);
   }
});

document.querySelectorAll('.fade-left').forEach((i) => {
   if (i) {
       observer.observe(i);
   }
});
document.querySelectorAll('.fade-right').forEach((i) => {
   if (i) {
       observer.observe(i);
   }
});

window.addEventListener('resize', function (e) {
   if(e.target.innerWidth < 1200 && e.target.innerWidth > 900){ 
      swiper.destroy(); 
      swiper = new Swiper('.mySwiper', {
         loop: true,
         slidesPerView: 2,
         spaceBetween: 30,
         navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
         },
         keyboard: true,
      });
   } else if(e.target.innerWidth >= 1200){
      swiper.destroy(); 
      swiper = new Swiper('.mySwiper', {
         loop: true,
         slidesPerView: 3,
         spaceBetween: 30,
         navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
         },
         keyboard: true,
      });
   }else{
      swiper.destroy(); 
      swiper = new Swiper('.mySwiper', {
         loop: true,
         slidesPerView: 1,
         spaceBetween: 30,
         navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
         },
         keyboard: true,
      });
   }
 });

