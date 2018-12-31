$(document).ready(function(){

    var topics = ["acura", "alfa romeo", "aston martin", "audi", "bently", "bmw", "bugatti", "buick", "chevy", "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep", "kia" ,"koenigsegg", "lamborghini", "land rover", "lexus" , "maserati", "mazda", "mclaren", "mercedes" , "mini", "mitsubishi", "nissan", "pagani", "peugeot", "porsche", "renault", "rolls royce", "saab", "subaru", "suzuki", "tesla", "toyota", "volkswagon", "volvo"];

    var btn;
    var carInputValue = $("#carInput").val();
    
    function populateButtons(){
        btn = $("<button>");;
        
        // $("#searchBtn").on("click", function(e){
        //     e.preventDefault();
        //     topics.push(carInputValue);
        //     console.log(carInputValue);
            
        // });

        for(var i = 0; i < topics.length; i++){
            btn = $("<button>").text(topics[i]);
            btn.addClass("topicBtn");
            btn.attr("data-car", topics[i]);
            $("#carButtons").append(btn);

            btn.on("click", populateGifs);
        }

    }
    populateButtons();

    function populateGifs(){
        var car = $(this).attr("data-car"); 
        var apiKey = "IMszIx7KIet6HUsUhLKtSwlbUlMvryrz";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=" + apiKey;
        

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response);
            
            
            for(var j = 0; j < 10; j++){
                var carGif = $("<img>");
                carGif.attr("src", response.data[j].images.fixed_height_still.url);
                carGif.attr("data-state", "still");
                $("#cars").append(carGif);


                $("img").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[j].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[j].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });
            }

            //https://media0.giphy.com/media/2RIj6QYkWrBWo/200.gif

            
        });
    }

});



// var state = $(this).attr("data-state");

//   if(state === "still"){
//     var animateUrl = $(this).attr("data-animate");
//     $(this).attr("src", animateUrl);
//     $(this).attr("data-state", "animate");
//   }else if(state === "animate"){
//     var stillImageUrl = $(this).attr("data-still");
//     $(this).attr("src", stillImageUrl);
//   }