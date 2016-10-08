$('.readMore1').click(function () {

    $('.articleBodyMore1').slideToggle(1000, function () {
        $('.readMore1').text(function () {
            return $('.articleBodyMore1').is(':visible') ? 'Read Less': 'Read More';
        });
    });

});

$('.readMore2').click(function () {

    $('.articleBodyMore2').slideToggle(1000, function () {
        $('.readMore1').text(function () {
            return $('.articleBodyMore2').is(':visible') ? 'Read Less': 'Read More';
        });
    });
});

$('.readMore3').click(function () {

    $('.sideBarTextMore').slideToggle(1000, function () {
        $('.readMore3').text(function () {
            return $('.sideBarTextMore').is(':visible') ? 'Read Less': 'Read More';
        });
    });
});
/*
$('.navHeader').click(function() {

    $('.navigationLink').slideToggle(1000, function () {
        $('.navHeader').text(function () {
            return $('.navigationLink').is(':visible') ? 'More': 'Less';
        });
    });
});
*/
