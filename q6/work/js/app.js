$(function() {
  const selectContent = $(".select-box");
  selectContent.on("change", function() { //select-boxの内容が変わったときに
    let selectcategory = $(selectContent).val()
    if ( "all" === selectcategory ){  //allとselectcategoryを比較して一致すれば.food-list liを表示する
      $(".food-list li").show();
    } else {  //一致しなければelseの処理にうつる
    $('.food-list li').each(function() { //food-listをeachでループ処理する
      if ($(this).data('category-type') === selectcategory) { //food-list liのcategory-typeとselectcategoryを比較する
        $(this).show(); //一致すれば表示する
      } else {
        $(this).hide(); //一致しなければ表示しない
    }
  })
  }
  })
 });
