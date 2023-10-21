let swiper = new Swiper(".mySwiper", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,
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
        entry.target.classList.add('animate');
      }
    });
 });

document.querySelectorAll('.fade').forEach((i) => {
   if (i) {
       observer.observe(i);
   }
});




const observerRight = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate-right');
      }
    });
 });

document.querySelectorAll('.fade-right').forEach((i) => {
   if (i) {
       observerRight.observe(i);
   }
});


const observerLeft = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate-left');
      }
    });
 });

document.querySelectorAll('.fade-left').forEach((i) => {
   if (i) {
       observerLeft.observe(i);
   }
});