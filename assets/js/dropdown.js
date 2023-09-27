$('.dropdown-menu li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select').text(getValue);
  });

  $(".dropdown-menu li a").click(function(){
  
    $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
    
  });