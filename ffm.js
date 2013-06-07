var INDEX = 'landing.html';
var FOOTER = 'footer.html';
function oldHash() {
  return location.hash ? location.hash.slice(1) + '.html' : '';
}
function loadContent(newHash) {
  $('.container').load(newHash || oldHash() || INDEX);
}
$(document).ready(function() {
  $(window).bind('hashchange', function() {
    loadContent();
  });
});