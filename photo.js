$(function() {
  $(".photo").click(openThisPhoto);
  $(".overlayer").click(showPhotosList);
  $(".show").click(stay);
});

function openThisPhoto() {
  var photoPath = $(this).find("img").attr("src");
  var describe = $(this).find("input").attr("text");
  $(".overlayer").fadeIn().find("img").attr("src",photoPath);
  $("p").html(describe);
}

function showPhotosList() {
  $(".overlayer").fadeOut();
}

function stay() {
  return false;
}
