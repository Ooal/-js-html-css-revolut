$(document).ready(function(){
  $("i.fa-bars").click( function(){
    $(".hamburger-menu").addClass("active");
  });
  $("i.fa-times").click( function(){
    $(".hamburger-menu").removeClass("active");
  });
  $('.parent-dropdown').mouseenter(function() {
    $(this).children('.dropdown').toggle();
  });
  $('.parent-dropdown').mouseleave(function() {
    $(this).children('.dropdown').toggle();
  });
  $('.parent-dropdown-xs').click(function() {
    $(this).children('.dropdown').toggle(300);
  });

});
