$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();
        
        $("header > nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");
    });
    
    $(window).resize(function() {
        if($( window ).width() >= "600") {
            $("header > nav").css("display", "block");
            
            if($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
            
//            http://www.adam-bray.com/blog/115/how-to-create-mobile-friendly-html-5-css-3-fixed-responsive-navigation-menu/#comment-2134630880
            $("header > nav > ul > li > a").siblings().removeAttr("style");
        }
        else {
            $("header > nav").css("display", "none");
        }
    });
    
    $("header > nav > ul > li > a").click(function(e) {
        if($( window ).width() <= "600") {
            if($(this).siblings().size() > 0 ) {
			    e.preventDefault();
                $(this).siblings().slideToggle("fast");
                $(this).children(".toggle").html($(this).children(".toggle").html() === 'close' ? 'expand' : 'close');
            }
        }
    });
});