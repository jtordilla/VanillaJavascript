var white = document.getElementById("animation"); 
var project = document.getElementById("projectile"); 
var position = 0; 

white.style.top = "225px"; 
white.style.left = "10px"; 
project.style.display = "none"; 
project.style.top = "245px";
project.style.left = "20px"; 

function moveSquare(){
    if(confirm("Do you want to continue?")){
        var timer = setInterval(frame, 5); 
        function frame(){
            if(position == 450){
                position = 0; 
                white.style.top = "225px"; 
                white.style.left = "10px"; 
                clearInterval(timer); 
            }else{
                position++; 
                white.style.top = position + "px"; 
                white.style.left = position + "px"; 
            }
        }
    }else{
        white.style.display = "none"; 
    }
}

function shootProject(){
    project.style.display = "block"; 
    var position = 0; 
    var timer = setInterval(frame, 5); 

    function frame(){
        if(position == 300){
            position = 0; 
            project.style.display = "none"; 
            clearInterval(timer); 
        }else{
            position += 5; 
            project.style.left = position + "px"; 
        }
    }
}

