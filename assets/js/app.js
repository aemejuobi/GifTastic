$(document).ready(function(){

    $(document).on("click", ".topicBtn", function() {
        $("#cars").empty();
        var car = $(this).attr("data-car"); 
        var apiKey = "IMszIx7KIet6HUsUhLKtSwlbUlMvryrz";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=" + apiKey;
        

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            console.log(response);
            
            

            for(var j = 0; j < 10; j++){
                var imgBox = $("<div>");
                var rating = $("<p>");
                var carGif = $("<img>");

                imgBox.addClass("imageBox");
                rating.text("Rated: " + response.data[j].rating);
                carGif.attr("src", response.data[j].images.fixed_height_still.url);
                // carGif.attr("id", "image" + j);
                carGif.attr("data-state", "still");
                carGif.attr("data-still-url", response.data[j].images.fixed_height_still.url);
                carGif.attr("data-animate-url", response.data[j].images.fixed_height.url);
                carGif.addClass('gif');

                imgBox.append(rating);
                imgBox.append(carGif);
                $("#cars").append(imgBox);
            }

            
            function startStopGifAnimations(){
                $(document).on('click', '.gif', function() {
                    var elementClicked = $(this);
                    var state = $(this).attr("data-state");
                    
                    if(state === "still"){
                        var urlOfAnimatedGif = elementClicked.attr('data-animate-url');
                        elementClicked.attr("src", urlOfAnimatedGif);
                        elementClicked.attr("data-state", "animate");
                    }else if(state === "animate"){
                        var urlOfStillGif = elementClicked.attr("data-still-url");
                        elementClicked.attr("src", urlOfStillGif);
                        elementClicked.attr("data-state", "still");
                    }
                });
            }
            startStopGifAnimations();
        });
    });

    var topics = ["acura", "alfa romeo", "aston martin", "audi", "bently", "bmw", "bugatti", "buick", "chevy", "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep", "kia" ,"koenigsegg", "lamborghini", "land rover", "lexus" , "maserati", "mazda", "mclaren", "mercedes" , "mini", "mitsubishi", "nissan", "pagani", "peugeot", "porsche", "renault", "rolls royce", "saab", "subaru", "suzuki", "tesla", "toyota", "volkswagon", "volvo"];

    var btn;
    
    function populateButtons(){
        btn = $("<button>");
        
        for(var i = 0; i < topics.length; i++){
            btn = $("<button>").text(topics[i]);
            btn.addClass("topicBtn");
            btn.attr("data-car", topics[i] + "-car");
            $("#carButtons").append(btn);
        }

        $("#searchBtn").on("click", function(e){
            e.preventDefault();
            var newCarInput = $("#carInput").val();
            btn = $("<button>").text(newCarInput);
            btn.addClass("topicBtn");
            btn.attr("data-car", newCarInput + "-car");
            $("#carButtons").append(btn);

            topics.push(newCarInput);
            console.log(topics);
            console.log(newCarInput);
        });

    }
    populateButtons();
});