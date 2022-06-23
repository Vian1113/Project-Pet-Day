

$(document).ready(function () {

    //漢堡選單
    $('.hambar').click(function (event) {
        event.preventDefault();
        $('.navmobile').slideToggle(600);
    });

    $('.navmobile li a').click(function (event) {
        event.preventDefault();
        //收起來
        $('.navmobile').slideUp(600);
    });



    //常見問題
    
    $(".faqcontent").click(function (e) {
        e.preventDefault();
        
        $(this).find("h5").toggleClass("active");
        var y=true;
        var x = $(this).siblings("p");
        if (x.css("display") == "none") {
            x.slideDown();
            $(this).find("img").attr("src","img/dash.svg")
        } else {
            x.slideUp();
            $(this).find("img").attr("src","img/plus.svg")
        };
        y =!y;
        
    });

    
    //懸浮常用icon與pagetop
    $(window).scroll(function () {

        var scrolltop = $(window).scrollTop();

        if (scrolltop >= 500) {
            $("#pagetop").show();
            $("#fixedicon").show();
            $("#socialicon").show();
        } else {
            $("#pagetop").hide();
            $("#fixedicon").hide();
            $("#socialicon").hide();
        }



    });










});