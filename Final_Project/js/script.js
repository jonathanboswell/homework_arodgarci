$('#robotText1').click(function(){
	$('body').removeClass();
	$('body').addClass('backgroundContainer2');
	$('#mainHeader').show();
	$('#mainContainer2').show();
	$('#mainContainer1').hide();
});

var svg = d3.select("#robotText2")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 100 100")

console.log(1);