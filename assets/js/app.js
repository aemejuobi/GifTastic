$(document).ready(function(){

    var topics = ["acura", "alfa romeo", "aston martin", "audi", "bently", "bmw", "bugatti", "buick", "chevy", "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep", "kia" ,"koenigsegg", "lamborghini", "land rover", "lexus" , "maserati", "mazda", "mclaren", "mercedes" , "mini", "mitsubishi", "nissan", "pagani", "peugeot", "porsche", "renault", "rolls royce", "saab", "subaru", "suzuki", "tesla", "toyota", "volkswagon", "volvo"];

    var btn;
    
    function populateButtons(){
        btn = $("<button>");
        
        for(var i = 0; i < topics.length; i++){
            btn = $("<button>").text(topics[i]);
            btn.addClass("topicBtn");
            btn.attr("data-car", topics[i] + "-car");
            $("#carButtons").append(btn);

            //populate car gifs on click of the car buttons
            btn.on("click", populateGifs);
        }

        // $("#searchBtn").on("click", function(e){
        //     e.preventDefault();
        //     btn = $("<button>").text($("#carInput").val());
        //     btn.addClass("topicBtn");
        //     btn.attr("data-car", $("#carInput").val());
        //     $("#carButtons").append(btn);

        //     topics.push($("#carInput").val());
        //     console.log(topics);
        //     console.log($("#carInput").val());
            
        // });

    }
    populateButtons();

    
    function populateGifs(){
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
                var carGif = $("<img>");
                var rating = $("<p>");
                rating.text(response.data[j].rating);
                carGif.attr("src", response.data[j].images.fixed_height_still.url);
                carGif.attr("id", "image" + j);
                carGif.attr("data-state", "still");
                // carGif.attr("data-still-url", response.data[j].images.fixed_height_still.url);
                // carGif.attr("data-animate-url", response.data[j].images.fixed_height.url);
                // carGif.addClass('gif');
                $("#cars").append(rating);
                $("#cars").append(carGif);
            }

            
            function startStopGifAnimations(){
                // $(document).on('click', '.gif', function() {
                //     var elementClicked = $(this);
                //     console.log(elementClicked.attr('data-state'));
                //     var state = $(this).attr("data-state");
                    
                //     if(state === "still"){
                //         elementClicked.attr("src", data-animate-url);
                //         elementClicked.attr("data-state", "animate");
                //     }else if(state === "animate"){
                //         elementClicked.attr("src", data-still-url);
                //         elementClicked.attr("data-state", "still");
                //     }
                // });

                $("#image0").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[0].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[0].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image1").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[1].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[1].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image2").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[2].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[2].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image3").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[3].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[3].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image4").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[4].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[4].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image5").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[5].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[5].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image6").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[6].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[6].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image7").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[7].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[7].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image8").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[8].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[8].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

                $("#image9").on("click", function(){
                    var state = $(this).attr("data-state");
                    if(state === "still"){
                        $(this).attr("src", response.data[9].images.fixed_height.url);
                        $(this).attr("data-state", "animate");
                    }else if(state === "animate"){
                        $(this).attr("src", response.data[9].images.fixed_height_still.url);
                        $(this).attr("data-state", "still");
                    }
                });

            }
            startStopGifAnimations();
            
            
        });
    }

});