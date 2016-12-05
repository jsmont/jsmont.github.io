$(document).ready(function(){

    initAnimationEvents();
    initRandomStuff();
    initMenu();
    function animate(){

        if($("#main_container").hasClass("sidebar"))
            $("#main_container").removeClass("sidebar");
        else $("#main_container").addClass("sidebar");
    }

    //setInterval(animate, 5000);
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
    
    $(".profile-pic").mouseenter(roll);
    $(".profile-pic").click(roll);

}

function initRandomStuff(){

    var doggo = "https://youtube.com/embed/KVk5m3lospk?autoplay=1&controls=0&showinfo=0&autohide=1";
    $(document).keydown(function(e){
        console.log(e.keyCode);
        if(e.keyCode == 66){
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

function initMenu(){

    $(".more_info").click(function(){

        $("#main_container").addClass("sidebar");

    });

    $(".home").click(function(){

        $("#main_container").removeClass("sidebar");

    });

}
