

$(document).ready(function () {

    
    
    //漢堡選單
    $('.hambar').click(function () {
       
        $('.navmobile').slideToggle(600);
    });

    $('.navmobile li a').click(function () {
       
        //收起來
        $('.navmobile').slideUp(600);
    });



    //常見問題
    
    $(".faqcontent").click(function (e) {
        e.preventDefault();
        //增加「e」表示event, 是為了要把a連結特有的會跳轉到其他頁的特性取消掉，會使用a連結是為了讓它有可點擊性
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

    //Page top

    $(".pagetopbtn").click(function(e){
        e.preventDefault();
        $("html").animate({

            scrollTop:0,
        },
        500);

        //500為0.5秒，為animate裡用來設定滑動到最上方(scrollTop:0)時的秒數
    });







});