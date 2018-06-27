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


