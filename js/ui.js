$(function(){

    //section height
    function sectionHeight(){
        $('.resizable').css({
            height:$(window).height()
        });
    }
    sectionHeight();

    $(window).resize(function(){
        sectionHeight();
    });

    // var item = $('.work-list li')
    // item.css({
    //     height: item.width()
    // });

});