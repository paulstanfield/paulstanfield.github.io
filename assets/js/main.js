var kDribbbleOAuthToken = '1113cb0e449afd60f904b370763a29ac74434f267c53e3fa11d122e3e01cfb26';
var kDribbbleAPIUrl = 'https://api.dribbble.com/v1';

$(function () {
  fetchDribbbleShots();
});

var fetchDribbbleShots = function() {
  var url = authorize(getEndpoint('/user/shots'));
  $.ajax({
    type: 'GET',
    url: url
  }).done(function(shots) {
    renderShots(shots);
  });
};

var renderShots = function(shots) {

  for(var i = 0; i < (shots.length > 9 ? 9 : shots.length); i++) {
    var shot = shots[i];

    var title = shot.title;
    var imageUrl = shot.images.hidpi;

    $('.shots').append('<li><a href="' + shot.html_url + '"><img src="' + imageUrl + '" alt="' + title + '" /></a></li>');
  }
};

// URL Helpers
var getEndpoint = function(str) {
  return kDribbbleAPIUrl + str;
}

var authorize = function(endpoint) {
  return endpoint + '?access_token=' + kDribbbleOAuthToken;
}