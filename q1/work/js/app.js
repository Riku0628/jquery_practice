$(function() {
  $("#q1").css("color", "green");
});
//読み込まれたときにgreenに変える

$(function() {
  $("#q2").on("click", function() {
    $(this).css("background", "pink");
  })
});
//クリックしたときに背景をpinkに変える

$(function() {
  $("#q3").on("click", function() {
    $(this).fadeOut(3000);
  })
});
//クリックしたときに３秒かけてフェードアウト

$(function() {
  $("#q4").on("click", function() {
    $(this).addClass("large");
  })
});
//クリックしたときにlargeクラスをつける

$(function() {
  $("#q5").on("click", function() {
    $(this).before("DOMの前").prepend("DOMの中の前").append("DOMの中の後").after("DOMの後");
    //クリックしたときに要素の直前に挿入、要素の前に挿入、要素の後に挿入、要素の直後に挿入
    })
});


$(function() {
  $("#q6").on("click", function() {
    $(this).animate({marginTop:"100px", marginLeft:"100px"},2000);
  })
});
//クリックしたときに上に100px、左に100px空間を開ける

$(function() {
  $("#q7").on("click", function() {
    console.log(this);
  })
});
//クリックしたときにコンソールに内容を表示する

$(function() {
  $("#q8").mouseout(function() {
    $(this).removeClass("large");
  })
  $("#q8").mouseover(function() {
    $(this).addClass("large");
  })
});
//マウスをはずしたときにlargeクラスをはずす
//マウスをかぶせたときにlargeクラスをつける

$(function() {
  $("#q9 li").on("click", function() {
    let index = $(this).index();
    alert(index);
    })
});
//クリックしたときにアラートにindexの番号を表示する


$(function() {
  $("#q10 li").on("click", function() {
    let index = $(this).index();
    //indexにq10のliのクリックした番号を格納する
    $("#q11 li").eq(index).addClass("large-text");
    //q11のliにindexの番号と同じ番号にlarge-textクラスをつける。
  })

});