// 第一个函数里面是 就业指导轮播图
(function(){
    var swiper = new Swiper('.get_job_fo', {
        // 能够显示的slider的个数
        slidesPerView: 2,
        // 每一个slide之间的距离
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        // 添加左右箭头
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
})();
// 第二个函数的轮播图
(function(){
    // 如果有多个轮播图最好修改下 swiper-container
    var swiper = new Swiper('.study_fo', {
        slidesPerView: 2.2, //显示的个数，支持小数
        spaceBetween: 20,
      });
})();