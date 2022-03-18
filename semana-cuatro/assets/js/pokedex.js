let pokedex = document.querySelector('#pokedex');
let xInic, yInic;
let estaPulsado = false;
/* Mover la pokedex */

if(pokedex.addEventListener){
    pokedex.addEventListener("mousedown", pokedown,false);
    pokedex.addEventListener("mousemove", mousemove,false);
    pokedex.addEventListener("mouseup", mouseup,false);
    
}

function pokedown(e) {
    xInic = e.clientX;
    yInic = e.clientY;    
    estaPulsado = true;
}

function mousemove(e) {
    if(estaPulsado) {
        //Calcular la diferencia de posición
        let xActual = e.clientX;
        let yActual = e.clientY;    
        let xInc = xActual-xInic;
        let yInc = yActual-yInic;
        xInic = xActual;
        yInic = yActual;
        
        //Establecer la nueva posición
        let position = getPosicion(pokedex);
        pokedex.style.top = (position[0] + yInc) + "px";
        pokedex.style.left = (position[1] + xInc) + "px";
    }
}

function mouseup() {
    estaPulsado = false;
}

function getPosicion(elemento) {
    let posicion = new Array(2);
    if(document.defaultView && document.defaultView.getComputedStyle) {
        posicion[0] = parseInt(document.defaultView.getComputedStyle(pokedex, null).getPropertyValue("top"))
        posicion[1] = parseInt(document.defaultView.getComputedStyle(pokedex, null).getPropertyValue("left"));
    } else {
        //Para Internet Explorer
        posicion[0] = parseInt(pokedex.currentStyle.top);             
        posicion[1] = parseInt(pokedex.currentStyle.left);               
    }      
    return posicion;
}