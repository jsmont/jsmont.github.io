$(document).ready(function(){

    $.post(
        "http://api.justyo.com/yo/",
        JSON.stringify({
            api_token:"aa27b4f7-dbf6-4abe-b72c-75cf2881d30d", 
            username: "GILBERTOMY",
            text: "It worked! lel"
        }),
        function(resp){console.log(resp)},
        "json");

});
