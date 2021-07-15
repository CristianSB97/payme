function leftMenu (){
    var elemento = document.getElementById("nav"); //find the nav //
    if(elemento.classList.contains('none-display')){ //check if nav has the none-display class //
        elemento.className -= (" none-display") // It has, so js unadd the class //
    }
    else{
        elemento.className += (" none-display") // It hasn't, so js add the class //
    }
    
    
    
    
    
}