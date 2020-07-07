$(document).ready(function(){
  $("i.fa-bars").click( function(){
    $(".hamburger-menu").addClass("active");
  });
  $("i.fa-times").click( function(){
    $(".hamburger-menu").removeClass("active");
  });
});
