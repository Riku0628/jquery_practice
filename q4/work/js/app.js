$(function() {
  　$(".nav li").click(function() {
    //nav liをクリックしたときに
  　　const index = $(".nav li").index(this);
  //indexにクリックされたnav liを格納する
  　　$(".description li").addClass("is-hidden");
  //description liにis-haiddenをつける
  　　$(".description li").eq(index).removeClass("is-hidden")
  //indexに格納されている番号と同じdescription liにis-haiddenをはずす
  　})
  });