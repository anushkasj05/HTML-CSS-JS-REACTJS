$(document).ready(function () {
  $("#btn1").click(function () {
    $(".para").toggle();
  });
  //   $("#demo").mouseover(function () {
  //     alert("mouse enter");
  //   });
  //   $("#demo").mouseleave(function () {
  //     alert("mouse leave");
  //   });
  $("#demo").click(function () {
    $(this).hide();
  });
  $("#fadeOut").click(function () {
    $(".div1").fadeOut(1000);
    $(".div2").fadeOut(2000);
    $(".div3").fadeOut(3000);
  });
  $("#fadeIn").click(function () {
    $(".div1").fadeIn(1000);
    $(".div2").fadeIn(2000);
    $(".div3").fadeIn(3000);
  });
  $("#fadeToggle").click(function () {
    $(".div1").fadeToggle(1000);
    $(".div2").fadeToggle(2000);
    $(".div3").fadeToggle(3000);
  });
  $("#fadeTo").click(function () {
    $(".div1").fadeTo(1000, 0.2);
    $(".div2").fadeTo(2000, 0.5);
    $(".div3").fadeTo(3000, 0.8);
  });
});
// selectors elements,id,class
// events-click,dblclick,load,mousedown,mouseover,mouseleave
