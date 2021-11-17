$(document).ready(function(){
     function scrchk(){
         var scr = $(document).scrollTop();
         if(scr > 0){
             $("header").addClass("shadow");
         }else{
             $("header").removeClass("shadow");
         }
     }
    scrchk();
    $(window).scroll(function(){scrchk();});
    
    
    
    
    $("#ham").click(function(){
        $("#mmenu").stop().animate({
            right: 0
        });
        $("#mback").stop().fadeIn();
        $("html,body").stop().css("overflow","hidden");
    });  
    
    $("#mclose,#mback").click(function(){
        $("#mmenu").stop().animate({
            right: "-290px"
        });
        $("#mback").stop().fadeOut();
        $("html,body").stop().css("overflow","auto");
    });
    
   
    
    $(".accbtn").click(function(event){
        event.preventDefault();
        $(this).parent("a").parent(".mmain").siblings(".mmain").children(".msub").stop().slideUp();
        $(".accbtn").not($(this)).removeClass("rot");
        if($(this).parent("a").next(".msub").is(":visible")){
            $(this).removeClass("rot");
        }else{
            $(this).addClass("rot");
        }
        $(this).parent().next(".msub").stop().slideToggle();
    });
    
    
    
    
    
    $(".multiline").each(function(){
    var t = $(this).text();
    $(this).attr("data", t);
    });

    function multiline(){
        $(".multiline").each(function(){
            var h = $(this).height();
            $(this).empty().append("<div></div>");
            var word = $(this).attr("data").split(" ");
            for(i=0; i<word.length; i++){
                $(this).children("div").append("<span>"+word[i]+" </span>");     
                if($(this).children("div").height() > h+5){
                    $(this).children("div").children("span").last().remove();
                    $(this).children("div").children("span").last().remove();
                    $(this).children("div").append("<span>...</span>");
                    break;
                }
            }
        });
    }

    multiline();
    setTimeout(multiline, 500);

    $(window).resize(function(){
        multiline();
    });

    
    
    var num = 0;
    $(".fambtn").change(function(){
        var address = $(this).val();
        if(address != ""){
            num++;
            window.open(address, "aaa"+num);
        }
    });
    
    
    function scrchk() {
        var scr = $(window).scrollTop();
        if(scr > 200){
            $("#topbtn").stop().fadeIn();
        }else{
            $("#topbtn").stop().fadeOut();
        }
    }
    
    scrchk();
    $(window).scroll(function(){
        scrchk();
    });
    
    $("#topbtn").click(function(){
        $("body,html").stop().animate({scrollTop:0},400);
    });
    
    
    
    
    $(".bmain").click(function(){
        $(this).parent(".bdep").siblings().children(".bsub").stop().fadeOut();
        $(this).siblings(".bsub").fadeToggle();
    });
    
    $("body *").click(function(){
        if($(this).parents(".bdep").length == 0 && $(this).find(".bdep").length == 0 && !$(this).is(".bdep")){
            $(".bdep .bsub").stop().fadeOut();
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});