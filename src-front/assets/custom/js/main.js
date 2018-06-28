'use strict';

module.exports = function(msg) {
  alert(`Welcome ${msg}`);
}


// product item overlay

let productItemOverlay = $(".overlay-block");

$(".product-item .img-wrapper").hover(function() {
  $(this).find(productItemOverlay).animate({top: "0px"}, 500);
}, function() {
  $(this).find(productItemOverlay).animate({top: "-18rem"}, 500);
});


// sidebar menu

let sidebarInnerWidth = $(".sidebar-menu").innerWidth();

$(".dropdown-sidebar-menu").css("left", sidebarInnerWidth);
$(".dropdown-sidebar-menu").css("width", sidebarInnerWidth);

$(".has-dropdown").hover(function() {
  $(this).children(".link").addClass("current");
  $(".dropdown-sidebar-menu").show();
}, function() {
  $(this).children(".link").removeClass("current");
  $(".dropdown-sidebar-menu").hide();
});
