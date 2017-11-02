$(document).ready(function() {
  $('#mobileMenu').hide();
  $('#loader').delay(100).fadeOut();

  $('#inactive').click(function(){
    $('nav').css('height', '200px');
    $('#mobileMenu').delay(100).fadeIn();
    $('#inactive').hide();
    $('#active').show();
    console.log('I work');
  });
  $('#active').click(function(){
    $('nav').css('height', '70px');
    $('#mobileMenu').hide();
    $('#active').hide();
    $('#inactive').show();
    console.log('I work');
  });

  $('.yes').hide();
  $('.no').hide();

  $('#yes').click(function(){
    $('#question').hide();
    $('.yes').fadeIn();
    console.log('I work');
  });

  $('#no').click(function(){
    $('#question').hide();
    $('.no').fadeIn();
    console.log('I work');
  });


  $('.freebirdFormviewerViewFormBanner').css('display', 'none');
});
