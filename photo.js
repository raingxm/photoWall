$(function() {
  $("img").click(openThisPhoto);
  $(".overlayer").click(showPhotosList);
  $(".show").click(stay);
});

function openThisPhoto() {
  var photoPath = $(this).attr("src");
  $(".overlayer").fadeIn().find("img").attr("src",photoPath);
}

function showPhotosList() {
  $(".overlayer").fadeOut();
}

function stay() {
  return false;
}
