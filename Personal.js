"use strict";
//JS for Codepen navigation bar
/*jslint browser: true*/
/*global $, jQuery, alert*/
//
//
//
//$(document).ready(function () {
//    // Add smooth scrolling to all links
//    $("a").on('click', function (event) {
//        // Make sure this.hash has a value before overriding default behavior
//        //***********************************************************************USABLE
//        if (this.hash !== "") {
//            // Prevent default anchor click behavior
//            event.preventDefault();
//            // console.log("hello");
//            // Store hash
//            var hash = this.hash;
//
//            // Using jQuery's animate() method to add smooth page scroll
//            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//            $('html, body').animate({
//                scrollTop: $(hash).offset().top
//            }, 800, function () {
//
//                // Add hash (#) to URL when done scrolling (default click behavior)
//                window.location.hash = hash;
//            });
//        } // End if
//    });
//});








// for the tabs in navigation bar
$(function () {
    $("#fullPage").click(function () {
        $("#rightWrapper").toggleClass("full-page");
        $("#header").toggleClass("full-page");
    });
});

$(function () {
    $("#listView li").click(function () {
        if ($("#listView li").hasClass("list-item-active")) {
            $("#listView li").removeClass("list-item-active");
            $("#rightWrapper").toggleClass("full-page");
            $("#header").toggleClass("full-page");
        }
        $(this).addClass("list-item-active");
    });
});



//For profile picture; adjust top padding depending on screen size
function screenWidthImgPadding(width) {
    width = $(document).width();
    if (width < 765) {
        $("#profileImg").css("padding-top", "10%");
        $("#name").css("margin-left", "10px");
    } else {
        $("#profileImg").css("padding-top", "75%"); //was 48% originally
    }
}




$(document).ready(function () {

    screenWidthImgPadding();
    //    alert($(document).width());

    /* .imageZoom */
    $('.imageZoom').hover(function () {
        $(this).addClass('transition');

    }, function () {
        $(this).removeClass('transition');
    });

});


//
//function getJson(urlString, tippy) {
//    // dosomehting with string
//
//    var result = '...';
//    tippy(result);
//}
//
////function handleResult(json) {
//    console.log(json)
//}
//
//getJson('http://www.google.ca', handleResult);
//getJson('http://www.cnn.com', handleResult);
//getJson('http://www.cnn.com', handleResult);
//
//getJson('http://www.google.ca', function (json) {
//    console.log(json);
//});






/*


$(document).ready(function () {

    // create a LatLng object containing the coordinate for the center of the map
    "use strict";
    var latlng = new google.maps.LatLng(-33.86455, 151.209);

    // prepare the map properties
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        mapTypeControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    };

    // initialize the map object
    var map = new google.maps.Map(document.getElementById('google_map'), options);

    // add Marker
    var marker1 = new google.maps.Marker({
        position: latlng,
        map: map
    });

    // add listener for a click on the pin
    google.maps.event.addListener(marker1, 'click', function () {
        infowindow.open(map, marker1);
    });

    // add information window
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
    });
}); */