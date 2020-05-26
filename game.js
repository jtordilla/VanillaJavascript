var white = document.getElementById("animation"); 
var position = 0; 
var project = document.createElement("div"); 

project.style.background = "red"; 
project.style.width = "100px"; 
project.style.height = "10px"; 
project.style.top = "250px"; 
project.style.left = "20px"; 
white.style.top = "225px"; 
white.style.left = "10px"; 

function moveSquare(){
    var timer = setInterval(frame, 5); 
    function frame(){
        if(position == 450){
            white.style.top = "225px"; 
            white.style.left = "10px"; 
            clearInterval(timer); 
        }else{
            position++; 
            white.style.top = position + "px"; 
            white.style.left = position + "px"; 
        }
    }
}

function shootProject(){

    var position = 0; 
    var timer = setInterval(frame, 5); 

    function frame(){
        if(position == 300){
            position = 0; 
            clearInterval(timer); 
        }else{
            position++; 
            project.style.left = position + "px"; 
        }
    }
}

