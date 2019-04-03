$("button").click(function() {
    var num = $(".num").val();
    var pass = $(".pass").val();

if(num > 75 && pass === "light"){
    $('.message').text("You're Zavok");
}
else if(num > 75 && pass === "dark"){
    $('.message').text("You are Infinite ");
}    
else if(num < 75 && pass === "light"){
    $('.message').text("You are Chaos.");
}   
else if(num < 75 && pass === "dark"){
    $('.message').text("You are Eggman.");    
}
else{
    $('.message').text("You may not be a villian at all.");
}


});