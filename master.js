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

  function mobileMenuClose() {
    $('nav').css('height', '70px');
    $('#mobileMenu').hide();
    $('#active').hide();
    $('#inactive').show();
    console.log('I work');
  }
  $('#active').click(function(){
    mobileMenuClose();
  });


  $('.yes').hide();
  $('.web').hide();
  $('.lease').hide();
  $('.finance').hide();
  $('.other').hide();

  $('#yes').click(function(){
    $('#question').hide();
    $('.yes').fadeIn();
    console.log('I work');
  });

  $('#finance').click(function(){
    $('#question').hide();
    $('.finance').fadeIn();
    console.log('I work');
  });

  $('#lease').click(function(){
    $('#question').hide();
    $('.lease').fadeIn();
    console.log('I work');
  });

  $('#web').click(function(){
    $('#question').hide();
    $('.web').fadeIn();
    console.log('I work');
  });
  $('#other').click(function(){
    $('#question').hide();
    $('.other').fadeIn();
    console.log('I work');
  });


  $('.freebirdFormviewerViewFormBanner').css('display', 'none');

});
