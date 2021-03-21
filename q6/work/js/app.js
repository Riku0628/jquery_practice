$(function() {
  const selectContent = $(".select-box");
  selectContent.on("change", function() {
    let selectcategory = $(selectContent).val()
    "all" === selectcategory ? $(".food-list li").show() :
    $('.food-list li').each(function() {
      if ($(this).data('category-type') === selectcategory) {
        $(this).show();
      } else {
        $(this).hide();
    }
  })
  })
 });
