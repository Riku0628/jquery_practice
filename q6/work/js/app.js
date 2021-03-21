$(function() {
  $(".select-box").click("change", function() {
    //select-boxの内容が変わったときに
    const selectContent = $(".select-box").val();
    //selectContentにslect-boxの内容を格納する
    food = $(".food-list li");
    //food-list liの内容をfoodに格納する
    "all" === selectContent ? food.show():$.each(food, function(index, category) {
      //allとselectContentを比較する
      //同じだった場合foodを表示する
      //違う場合foodに対してeachで繰り返し処理を行う
      const text = $(category).data("category-type");
      //textにcategory-typeを格納する。
      selectContent === text ? $(category).show() : $(category).hide()
       //selectContentとtextを比較する。同じだった場合categoryの内容を表示する。違う場合categoryを非表示する。
    })
  })
});



