$(function() {
  $('.drawer_button').click(function() {
    //drawer_buttonをクリックしたときに//
    $('.drawer_button').toggleClass('active');
    //drawer_buttonにactiveクラスをつけたり、はずしたり切り替える
    $('.drawer_bg').fadeToggle();
    //フェードイン、アウトを切り替える
    $('.drawer_nav_wrapper').toggleClass('open');
    //drawer_nav_wrapperにopenクラスをつけたり、はずしたり切り替える

  if ($('.drawer_button').hasClass('active')) { //もし.drawer_buttonに'active'というクラスがあったら
    $('.drawer_bg').on('click',function () {  //
      $('.drawer_nav_wrapper').removeClass('open');
      $('.drawer_button').removeClass('active');
      $('.drawer_bg').fadeOut();
    });
  }});
});
