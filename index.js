$(document).ready(function(){

    initAnimationEvents();
    initRandomStuff();
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

function initRandomStuff(){

    var doggo = "https://youtube.com/embed/KVk5m3lospk?autoplay=1&controls=0&showinfo=0&autohide=1";
    $(document).keydown(function(e){
        if(e.keyCode == 16 || e.keyCode == 68){
            if(!$("#youtube-background").hasClass("playing")){
                $("#youtube-background").addClass("playing");
                player.playVideo();
				setTimeout(function(){
                    $("#youtube-background").removeClass("playing");
                },30*1000);
				setTimeout(function(){
					player.pauseVideo();
					player.seekTo(0,true);
                },32*1000);
            }
        }

    });

}
