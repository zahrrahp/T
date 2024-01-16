
$(function () {
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
})


