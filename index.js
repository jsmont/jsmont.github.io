$(document).ready(function(){

    initAnimationEvents();

});

function initAnimationEvents(){

    $("#profile-pic").mouseenter(function(){

        var that  = this;
        if(!$(this).hasClass("spin")){

            $(this).addClass("spin");


            setTimeout(function(){
                $(that).removeClass("spin");
            }, 1000);
        }

    });

}
