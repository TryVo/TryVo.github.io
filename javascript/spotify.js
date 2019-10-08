$('#jazz-button').click(function(){
  $('#jazz').show();
  $('#classical').hide();
  $('#electronic').hide();
});

$('#classical-button').click(function(){
  $('#classical').show();
  $('#jazz').hide();
  $('#electronic').hide();
});

$('#electronic-button').click(function(){
  $('#electronic').show();
  $('#classical').hide();
  $('#jazz').hide();
});
