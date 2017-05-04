$(document).ready(function(){
$('#allps').hide();
$('#allps').delay(250).fadeIn(2000);
  });

$("#crete").on("click", function(){
  $('#around').show();
});

function newComment() {
  var $input = $('#userComment').val();
  var $nextGen = $('p.nextGen');
  $nextGen.text($input);
  $nextGen.append('<a href="" style="float:right;background:#FFFFFF;">Overwrite your advertising pitch</a>');
  $('.new').fadeIn(100);
  $('#around').hide();
};