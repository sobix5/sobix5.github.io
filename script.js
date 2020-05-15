$(document).ready(function(){

    $("#setTitle").click(function(){
        $("#title").text($("#newTitle").val());
    });

    $("#setMaxVal").click(function(){
        $("#maxVal").text("/ " + $("#newMaxVal").val());
    });

    var liveValue;
    liveValue = "0";

    $("#minus").click(function(){
        if (liveValue > 0){
            liveValue --;
        $("#valueText").text(liveValue);
        }
        else if (liveValue <= 1) {
            $("#minus").prop('disabled', true);
        }
        
    });

    $("#plus").click(function(){
        liveValue ++;
        $("#valueText").text(liveValue);
        $("#minus").prop('disabled', false);
    });


    $("#setValue").click(function(){
        liveValue = $("#newValue").val()
        $("#valueText").text(liveValue);
    });

    if(liveValue <= 0){
        $("#minus").prop('disabled', true);
    }
    if(liveValue > 0){
        $("#minus").prop('active', true);
    }

    //////////
    // COLOR
    //////////

    $("#bgRed").click(function(){
        $("#show").css("background-color", "red");
      });

    $("#bgGreen").click(function(){
        $("#show").css("background-color", "green");
    });

    $("#bgBlue").click(function(){
        $("#show").css("background-color", "blue");
    });

    $("#bgBlack").click(function(){
        $("#show").css("background-color", "black");
    });

    $("#bgWhite").click(function(){
        $("#show").css("background-color", "white");
    });
    //TEXT COLOR
    $("#txtRed").click(function(){
        $("#show h2, h1").css("color", "red");
      });

    $("#txtGreen").click(function(){
        $("#show h2, h1").css("color", "green");
    });

    $("#txtBlue").click(function(){
        $("#show h2, h1").css("color", "blue");
    });

    $("#txtBlack").click(function(){
        $("#show h2, h1").css("color", "black");
    });

    $("#txtWhite").click(function(){
        $("#show h2, h1").css("color", "white");
    });
  });