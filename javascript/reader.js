$('h4 > a').click(function(event) {
  event.preventDefault();
  // var w = document.getElementById('column2').clientWidth;
  var link = $(this).attr("href");
  console.log(link);
  var pdflink = link.replace("?rss=1&ssource=mfr", ".full.pdf");
  var article = document.createElement("iframe");
  article.setAttribute("src", pdflink);
  document.getElementById('pdf').appendChild(article);
  article.style.height= "100%";
  article.style.width = "100%";
  article.style.display = "block";
  $('#feed').hide();
  $('#pdf').show();
});

$('#pdf  a').click(function(){
  $('#feed').show();
  $('#pdf').hide();
  $('#pdf iframe').remove();
});
