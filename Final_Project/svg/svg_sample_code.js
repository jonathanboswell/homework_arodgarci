var x=0;
$('.path').each(function () {
   x += 100;
   $(this).attr('transform', 'translate('+x+', 0)');
});