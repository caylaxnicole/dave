$(document).ready(function() {
  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $(".clickable").click(function() {
    $("#cat-hidden").toggle();
    $("#cat-showing").toggle();

  });
});
