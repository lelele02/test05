$(function(){
    $(".pager>li").click(function(){
        var sNum=$(this).index();

        $(this).addClass("active")
        .siblings().removeClass("active");

        $(".mainBannerWrap").stop().animate({
            "margin-left":-sNum*100+"%"
        },1000)
    })

    $(".hamBox").click(function(){
        if ($("#nav").css("display") == "none") { 
             $("#nav").show(); 
         } else {
             $("#nav").hide();  
         }
   })
   $(window).resize(function(){
        if(window.innerWidth > 1700){
             $("#nav").css("display", "block")
        } else if (window.innerWidth < 1700){
             $("#nav").css("display", "none")
        }
   })



})
