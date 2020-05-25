function changeText(){
    var message = document.getElementById("message"); 
    if(message.innerHTML == "Hello World!"){
        message.innerHTML = "Vanilla JS is superior!"; 
    }else{
        message.innerHTML = "Hello World!"; 
    }
}