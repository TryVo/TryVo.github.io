$('#chess-button').click(function(){
  $('#chess').show();
  $('#sudoku').hide();
  $('#crossword').hide();
});

$('#crossword-button').click(function(){
  $('#crossword').show();
  $('#chess').hide();
  $('#sudoku').hide();
});

$('#sudoku-button').click(function(){
  $('#sudoku').show();
  $('#chess').hide();
  $('#crossword').hide();
});

var sud = document.getElementById("sudoku");
var sudbod = sud.contentWindow.document.getElementsByTagName("body")[0];
sudbod.setAttribute('style', 'background-color: = rgba(0,0,0,0)');
