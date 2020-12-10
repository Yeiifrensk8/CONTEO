$(function(){
    $(".boxG").on("click", function(){
        var hid = $(".gaseosas").toggle(400);
    });
    $(".boxC").on("click", function(){
        var hid = $(".cervezas").toggle(400)
    });
    $(".boxA").on("click", function(){
        var hid = $(".aguas").toggle(400)
    });
})