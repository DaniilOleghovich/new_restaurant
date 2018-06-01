$(document).ready(function(){
  var menuBtn = $('.header-inner__btn');
  var menu = $('.navbar');

  menuBtn.click(function(){
    menu.slideToggle(500);
    $(this).toggleClass('header-inner__btn--active');
  });
  $(window).on('resize', function(){
  if ($(document).width() > 867){
     menu.attr('style', '');
     menuBtn.removeClass('header-inner__btn--active');
  }
});
});
