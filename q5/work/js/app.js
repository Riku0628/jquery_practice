$(".dropdwn li").hover(function() {
  //dropdwn liにホバー時に
  $(this).children('.dropdwn_menu').stop().slideDown();
  //dropdwn_menuをslideDownさせる
}, function() {
  $(this).children('.dropdwn_menu').stop().slideUp();
  //.dropdwn_menuをslideUpさせる
});