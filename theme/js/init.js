(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.dropdown-taglist').dropdown();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('#search').focusin(function() {
      $(this).css('width', '200px');
    });
    $('#search').focusout(function() {
      $(this).css('width', '0');
    });
  });
  //document.addEventListener("DOMContentLoaded", function(){
  //  $('.preloader-background').delay(100).fadeOut('slow');
  //  
  //  $('.preloader-wrapper')
  //    .delay(100)
  //    .fadeOut();
  //});
})(jQuery);
