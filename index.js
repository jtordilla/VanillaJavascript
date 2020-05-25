//DOM: innerHTML, style, animations and intervals, event listeners, and nodes
//BOM: 

function changeAppear(){
    var message = document.getElementById("message"); 
    if(message.innerHTML == "Hello World!"){
        if(prompt("Are you sure you want to continue?") === "Yes"){
            message.innerHTML = "Vanilla JS is superior!"; 
        }else{
            message.innerHTML = "Hello World!"; 
        }
    }else{
        message.innerHTML = "Hello World!"; 
    }

    var brothers = document.getElementById("brothers"); 
    if(brothers.src == "https://cdn.shopify.com/s/files/1/0956/6826/products/jf008_1024x1024.jpeg?v=1439517370"){
        brothers.src = "https://i.ytimg.com/vi/dAE2WWus2Dc/hqdefault.jpg"; 
    }else{
        brothers.src = "https://cdn.shopify.com/s/files/1/0956/6826/products/jf008_1024x1024.jpeg?v=1439517370"; 
    } 
}

function changeText(){
    var text = document.getElementById("text"); 
    if(text.style.fontSize == "50px"){
        text.style.fontSize = "100px"; 
    }else{
        text.style.fontSize = "50px"; 
    }
}

function hideAll(){
    var container = document.getElementById("main"); 
    var animation = document.getElementById("animation");
    if(container.style.display != "none"){
        container.style.display = "none";
        animation.style.display = "block"; 
    }else{
        container.style.display = "block"; 
        animation.style.display = "none"; 
    }
}

function animateSquare(){
    if(confirm("Are you sure you want to continue?")){
        var pos = 100; 
        var timer = setInterval(frame, 5); 
        var square = document.getElementById("object"); 
        function frame(){
            if(pos == 350){
                clearInterval(timer); 
            }else{
                pos++; 
                square.style.bottom = pos + "px"; 
                square.style.left = pos + "px"; 
            }
        }
    }else{
        console.log("animation cancelled"); 
    }
}