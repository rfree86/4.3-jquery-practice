
/*$(document).ready(function(){
$('h3').click(function(){
  $('.list_ul').slideUp();
  if (!$(this).next().is(':visible'))
  {
    $(this).next().slideDown();
  }
});
});
*/


$(document).ready(function(){
  $('h3').click(function(){
    $('.list_ul').slideUp();
    if (!$(this).next().is(':visible'))
    {
      $(this).next().slideDown();
    }
  });
});
