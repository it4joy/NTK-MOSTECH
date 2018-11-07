'use strict';

module.exports = function(msg) {
  alert(`Welcome ${msg}`);
}


// product item overlay

let productItemOverlay = $(".overlay-block");

$(".product-item").hover(function() {
  $(this).find(productItemOverlay).animate({top: "0px"}, 500);
}, function() {
  $(this).find(productItemOverlay).animate({top: "-18rem"}, 500);
});

$(".product-item .fa-shopping-cart").on("click", function() {
  $(this).removeClass("fa-shopping-cart");
  $(this).addClass("fa-check");
});


// sidebar menu

let sidebarInnerWidth = $(".sidebar-menu").innerWidth();

$(".dropdown-sidebar-menu").css("left", sidebarInnerWidth);
$(".dropdown-sidebar-menu").css("width", sidebarInnerWidth);

$(".has-dropdown").hover(function() {
  $(this).children(".link").addClass("current");
  $(this).children(".dropdown-sidebar-menu").show();
}, function() {
  $(this).children(".link").removeClass("current");
  $(this).children(".dropdown-sidebar-menu").hide();
});


// sticky top navbar & btn-to-top

$(".btn-to-top").hide();

let topNavStartPos = $(".navbar-wrapper").offset();
let topNavStartPosTop = topNavStartPos.top;

let windowInnerHeight = $(window).innerHeight();

$(window).scroll(function() {
  if ( $(this).scrollTop() > topNavStartPosTop ) {
    $(".navbar-wrapper").addClass("fixed-top");
  } else {
    $(".navbar-wrapper").removeClass("fixed-top");
  }

  if ( $(this).scrollTop() >= windowInnerHeight / 2 ) {
    $(".btn-to-top").fadeIn();
  } else {
    $(".btn-to-top").fadeOut();
  }
});

$(".btn-to-top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
});


// tabs

$(".tab .tab-link").on("click", function(e) {
  e.preventDefault();
  
  $(".tab .tab-link").removeClass("active");
  
  let tabLink = $(this).attr("href");
  tabLink = tabLink.replace("#", "");
  
  $(".tab-content").slideUp(600);
  
  $(this).addClass("active");
  
  $(".tab-content").each(function(i, el) {
    if( $(el).attr("id") == tabLink )
      $(el).slideDown(600);
  });
});
