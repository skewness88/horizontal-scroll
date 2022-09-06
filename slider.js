
$ (document).ready(function(){
    $(".nav-link").click(function(event){
        var $link = $ (this).attr("href");
        $("#mainContent").animate({
            scrollLeft: $("container").scrollLeft() + $($link).offset().left
        }, 500);
        event.preventDefault();
    });
});