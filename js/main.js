//MixIT UP 

$(document) .ready(function(){
    var mixer = mixitup('.my-mixitup')
});


//Countup 
  $(document).ready(function(){
    $(".counter").counterUp({
      delay: 10,
      time: 1200
    });
  });


//Owl Carousel 

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Easy Paichart 

$(function() {
    $('.chart').easyPieChart({
        barColor: '#ffe600'
    });
});

//Navbar scrolling animation

$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('.logo').css("width","80px");
            $('.nav-ul').css("margin","0");
            $('.nav-bg').css("opacity",".75");
        } else {
            $('.logo').css("width","150px");
            $('.nav-ul').css("margin","25px 0px");
            $('.nav-bg').css("opacity",".3");
        }
    });
});

// Scroll Animation
AOS.init({
    offset: 180,
    duration: 2000
});