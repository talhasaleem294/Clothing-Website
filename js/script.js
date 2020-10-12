$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() < 500) {
            $('.navbar').css({
                'background-color':'#222'
            });
        } else {
            $('.navbar').css({
                'background-color':'#f4f4f4'
            });
        }
    })
});

$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() < 500) {
            $('.navbar a').css({
                'color':'#f4f4f4'
            });
        } else {
            $('.navbar a').css({
                'color':'#222'
            });
        }
    })
});

$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() < 500) {
            $('.navbar-brand').css({
                'color':'#f4f4f4'
            });
        } else {
            $('.navbar-brand').css({
                'color':'#222'
            });
        }
    })
});


// Contact Page According

$('.according1').click(function(){
    $('.content1').slideToggle();
})

$('.according2').click(function(){
    $('.content2').slideToggle();
})

$('.according3').click(function(){
    $('.content3').slideToggle();
})

$('.according4').click(function(){
    $('.content4').slideToggle();
})

//pre loader

  setTimeout(function(){ 
      $('#preloader').fadeOut(); }, 350);