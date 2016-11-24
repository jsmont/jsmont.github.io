$(document).ready(function(){

    initAnimationEvents();

});

function initAnimationEvents(){
    
    function roll(){

        var that  = this;
        if(!$(this).hasClass("spin")){

            $(this).addClass("spin");


            setTimeout(function(){
                $(that).removeClass("spin");
            }, 1000);
        }

    }
    
    $("#profile-pic").mouseenter(roll);
    $("#profile-pic").click(roll);

}
