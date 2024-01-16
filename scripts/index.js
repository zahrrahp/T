$(window).on('load', function () {
    $('.overlay-loading').fadeOut('200')
})
/*/////////////////////*/
$(function () {


    $('.menu ul li').hover(function () {

        $(this).children('ul').show()

    }, function () {
        $(this).children('ul').hide()
    })

    /*for level 1*/
    $('.menu>ul>li').has('ul').children('a').append('<i class="fa-solid fa-angle-down"></i>')


    /*for level 2*/
    $('.menu>ul>li>ul>li').has('ul').children('a').append('<i class="fa-solid fa-angle-left"></i>')


    /*//////////////////////////////////////////////*/
    /*form head*/

    $('.containI').click(function () {

        let className = $(this).children('i').attr('class')

        let search = className.includes('fa-search')
        let close = className.includes('fa-close')

        if (search) {
            $(this)
                .children('i')
                .removeClass('fa-search')
                .addClass('fa-close')


            $('.form-head')
                .slideDown('slow')
                .css({
                    'display': 'block'
                })


        } else if (close) {
            $(this)
                .children('i')
                .removeClass('fa-close')
                .addClass('fa-search')


            $('.form-head')
                .slideUp('slow')
                .css({
                    'display': 'none'
                })
        }

    })


    /*////////////////////////////////////////*/
    let currentAngle = 0;
    $('.prev').click(function () {
        currentAngle += 60;
        $('ul.rotateC').css({
            'transform-origin': 'center',
            'transform': 'rotate(' + currentAngle + 'deg)'
        });
    })

    $('.next').click(function () {
        currentAngle -= 60;
        $('ul.rotateC').css({
            'transform-origin': 'center',
            'transform': 'rotate(' + currentAngle + 'deg)'
        });
    })


    $('.icon-product').click(function () {

        $('.icon-product')
            .parent('li')
            .removeClass('active-product-li')

        $(this)
            .parent('li')
            .addClass('active-product-li')


        $('.animate-product .animate')
            .removeClass('active')

        let className = $(this).parent('li').attr('class')

        if (className.includes('desktop')) {
            $('.animate-product .desktop')
                .addClass('active')
        } else if (className.includes('android')) {
            $('.animate-product .android')
                .addClass('active')
        } else if (className.includes('apple')) {
            $('.animate-product .apple')
                .addClass('active')
        } else if (className.includes('cloud')) {
            $('.animate-product .cloud')
                .addClass('active')
        } else if (className.includes('mobile')) {
            $('.animate-product .mobile')
                .addClass('active')
        } else if (className.includes('tv')) {
            $('.animate-product .tv')
                .addClass('active')
        }
        /*////////////////////////*/


        let count = $(this).parent('li').data('angle')

        let rotate = count * (-60)

        console.log(rotate)

        $('ul.rotateC').css({
            'transform': 'rotate(' + rotate + 'deg)'
        })

    })

    /*////////////////////////////////////////////////////////////////*/

    /* our-services   tab  */

    $('#nav-tab a').click(function () {

        $('#nav-tab a')
            .removeClass('active-tab')

        $(this)
            .addClass('active-tab')

        $('#nav-tabContent div').removeClass('active show')


        let className = $(this).attr('class')

        let moPrimary = "images/icon/mobile_icon.svg";
        let narPrimary = "images/icon/call primary_icon.svg";
        let QAPrimary = "images/icon/data_primary_icon.svg";
        let desPrimary = "images/icon/dashboard_icon.svg";

        let moWhite = "images/icon/mobile_white_icon.svg";
        let narWhite = "images/icon/call white_icon.svg";
        let QAWhite = "images/icon/data_white_icon.svg";
        let desWhite = "images/icon/dashboard_white_icon.svg";

        if (className.includes('active-tab')) {
            if (className.includes('mobile')) {
                $('#nav-tabContent .mobile').addClass('active show')
                $('.mo').attr("src", moWhite)
                /*$('.mo').attr("src", moPrimary)*/
                $('.nar').attr('src', narPrimary)
                $('.QA').attr('src', QAPrimary)
                $('.des').attr('src', desPrimary)
            } else if (className.includes('narm')) {
                $('.nar').attr('src', narWhite)
                $('#nav-tabContent .narm').addClass('active show')
                $('.mo').attr("src", moPrimary)
                /*$('.nar').attr('src', narPrimary)*/
                $('.QA').attr('src', QAPrimary)
                $('.des').attr('src', desPrimary)
            } else if (className.includes('QA')) {
                $('.QA').attr('src', QAWhite)
                $('#nav-tabContent .QA').addClass('active show')
                $('.mo').attr("src", moPrimary)
                $('.nar').attr('src', narPrimary)
                /*$('.QA').attr('src', QAPrimary)*/
                $('.des').attr('src', desPrimary)
            } else if (className.includes('design')) {
                $('.des').attr('src', desWhite)
                $('#nav-tabContent .design').addClass('active show')
                $('.mo').attr("src", moPrimary)
                $('.nar').attr('src', narPrimary)
                $('.QA').attr('src', QAPrimary)
                /*$('.des').attr('src', desPrimary)*/
            }
        }

        return false;
    })

    /*//////////////////////////////////////////////*/

    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#backTop').fadeIn('slow').css('display', 'flex');
        } else {
            $('#backTop').fadeOut('slow').css('display', 'none');
        }
    })

})

