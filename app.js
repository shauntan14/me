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

  $('#videos').hover(function() {
    $(this).addClass('damp');
  },
    function() {
      $(this).removeClass('damp');
    }
  );


   $("#school").click(function() {
        $('#schoolimg').toggle('slow');
   });

   $("#videos").click(function() {
        $('#breakfastvideo').toggle('slow');
   });
   $("#photography").click(function() {
        $('#slider').toggle('slow');
   });
   $("#work").click(function() {
        $('#work-desc').toggle('slow');
   });


});
