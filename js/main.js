$(document).ready(function(){
    /*Put the background to the active button, and remove from 
his siblings*/
    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).css('backgroundImage','url("../imgs/trace1.png")');
        $(this).siblings().css('backgroundImage','none');
        var button_id = $(this).attr('id');
    });    
});




