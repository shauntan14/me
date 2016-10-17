$(document).ready(function() {
  $('#schoolimg').hide();
  $('#breakfastvideo').hide();
  $('#slider').hide();
  $('#work-desc').hide();
  $('#school').hover(function() {
    $(this).addClass('damp');
  },
    function() {
      $(this).removeClass('damp');
    }
  );

   $("#school").click(function() {
        $('#schoolimg').fadeIn('slow');
   });
   $("#videos").click(function() {
        $('#breakfastvideo').fadeIn('slow');
   });
   $("#photography").click(function() {
        $('#slider').fadeIn('slow');
   });
   $("#work").click(function() {
        $('#work-desc').fadeIn('slow');
   });


});
