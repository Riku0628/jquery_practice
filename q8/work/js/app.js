$(function() {
  const messNone = $("<div class='message'>" + "検索結果が見つかりませんでした。" + "<br>" + "別のキーワードで検索して下さい。" + "</div>");
  errMes = $('<div class="message">' + "正常に通信できませんでした。" + '<br>' + "インターネットの接続の確認をしてください" + '</div>');
  let air = "";
  pageCount = 1


  $('.search-btn').on('click',function() {
    //.search-btnがクリックされたとき
    let searchWord = $('#search-input').val();
    //searchWordにsearch-input内容を取得する
    searchWord !== air ? (pageCount=1,$(".lists").empty(), $(".message").remove() ) : pageCount++;
    //searchWordとairの内容を比較して違う場合pageCountを1にしてlistsを消去して、messageも消去する。同じ場合pageCountを+1にする
    air = searchWord
    //airにsearchWorldの内容を格納する
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",}
    $.ajax(settings).done(function (response) { //成功の処理
      const result = response['@graph'];
      displayResult(result)
      }).fail(function (err) { //失敗の処理
      displayError(err)
      });


    function displayResult(result) {
      result[0].items == void 0 ? $('.inner').prepend(messNone) :
      //result[0].itemsの中が0ではないか比較する。0ならばmessNoneを表示させる。0でないならeachの処理に移る。
      $.each(result[0].items, function(index, library) {
        //result[0].itemsに含まれている要素をループ処理させる。
        const dsp = $("<li class='lists-item'>" + "<div class='list-inner'>" +
        "<p>タイトル：" + (library.title ? library.title : "タイトル不明" )  + "</p>" +
        //library.titleとundefinedを比較する。一致しなかった場合library.titleを、一致した場合「タイトル不明」をそれぞれ表示する。
        "<p>作者：" + (library['dc:creator'] ? library['dc:creator'] : "作者不明" ) + "</p>" +
        //library['dc:creator']とundefinedを比較する。一致しなかった場合library['dc:creator']を、一致した場合「作者不明」をそれぞれ表示する。
        "<p>出版社：" +(library['dc:publisher'] ? library['dc:publisher'] : "[出版者不明]"  )+ "</p>" +
        //library['dc:publisher']とundefinedを比較する。一致しなかった場合library['dc:publisher']を、一致した場合「出版社不明」をそれぞれ表示する。
        "<a href =" + library['@id'] + " " + 'target="_blank">' + "書籍情報" + "</a>" +
        //library['@id']リンクを含んだ書籍情報を表示する。
        '</div>' + '</li>') ;
        $(".lists").prepend(dsp) ; //dspを表示する
      });
    };

    function displayError(err) {　//通信が失敗したときの処理
      $(".lists").empty();　//listsの中を消去する
      $(".message").remove(); //messageを消去する
      $('.inner').prepend(errMes); //eroMesを表示する
    }
  });

  $(".reset-btn").on("click", function () { //.reset-btnをクリックしたときの処理
    pageCount = 1;　//ページカウントを１に戻す
    $(".lists").empty();　//listsの中を消去する
    $(".message").remove();　//messageを消去する
    $("#search-input").val("")　//serch-inputの中を消去する
  });
});






// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

