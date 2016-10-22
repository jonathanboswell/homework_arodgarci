
var breakfast = [
"Waffles",
"Fried egg",
"Fruit salad",
"Tea/Coffee"
];

var breakfastDescriptions = [
"Fluffy and soft whole-wheat waffles",
"Sunny-side up egg",
"Chopped strawberries, bananas and blueberries lightly drizzled with honey",
"Our daily selection of teas and coffees",
];


$('.navRightList').click(function(){
    for (var i = 0; i<4; i = i + 1) {
    $('#menu').append('<h1>' + breakfast[i] + '</h1>' + '<p>' + breakfastDescriptions[i] + '</p>');
    }
})