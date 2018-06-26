'use strict';

module.exports = function(msg) {
  alert(`Welcome ${msg}`);
}

let productItemOverlay = $(".overlay-block");

$(".product-item .img-wrapper").hover(function() {
  $(productItemOverlay).animate({top: "0px"}, 500);
}, function() {
  $(productItemOverlay).animate({top: "-18rem"}, 500);
});
