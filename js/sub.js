$(document).ready(function(){ //시작

    //about
$(".character-profile li").hide();

$(".character-img li").eq(0).addClass("active");
$(".character-profile li").eq(0).show();

$(".character-img li").click(function () {

    $(this).addClass("active").siblings().removeClass("active");
    
    const aa = $(this).index();
    console.log(aa);

    $(".character-profile li").eq(aa).show().siblings().hide();
});

//prd
$(".prd-list>li").hide();

$(".prd-select li").eq(0).addClass("active");
$(".prd-list>li").eq(0).show();

$(".prd-select li").click(function () {

    $(this).addClass("active").siblings().removeClass("active");
    
    const bb = $(this).index();
    console.log(bb);

    $(".prd-list>li").eq(bb).show().siblings().hide();
});

//news
$(".news-img li").hide();

$(".news-name li").eq(0).addClass("active");
$(".news-img li").eq(0).show();

$(".news-name li").click(function () {

    $(this).addClass("active").siblings().removeClass("active");
    
    const cc = $(this).index();
    console.log(cc);

    $(".news-img li").eq(cc).show().siblings().hide();
});

//prd
$(".event-list>li").hide();

$(".event-select li").eq(0).addClass("active");
$(".event-list>li").eq(0).show();

$(".event-select li").click(function () {

    $(this).addClass("active").siblings().removeClass("active");
    
    const bb = $(this).index();
    console.log(bb);

    $(".event-list>li").eq(bb).show().siblings().hide();
});

}); //끝