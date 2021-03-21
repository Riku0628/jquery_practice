$(function() {
    $('.modal_open_button').on('click',function() {
      //modal_open_buttonをクリックしたときに
      $('.modal_win').fadeIn();
      //modal_winをフェードイン
    });
    $('.modal_close_button').on('click',function() {
      //modal_close_buttonをクリックしたときに
      $('.modal_win').fadeOut();
      //modal_winをフェードアウト
    });
});