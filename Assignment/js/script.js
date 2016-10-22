var cities = ['NYC', 'LA', 'SF', 'ATX','SYD'];
cities.forEach(function(value, key){
    $('#city-type').append('<option class="city" value=' + key + '>' + value + '</option> ');
    console.log(value, key);
});

var city_abbr = ['nyc','la','sf','austin','sydney'];
$('select').click(function(){
    index = $(this).val();
    $('body').removeClass();
    $('body').addClass(city_abbr[index]);
    console.log(index);
});