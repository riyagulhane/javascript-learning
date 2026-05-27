const button= document.getElementById("btn");
button.addEventListener("click", function(){
    // chaange the text when button will be clicked
    document.getElementById("title").textContent="button was clicked";
    alert("you clicked the button");
});