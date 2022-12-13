class WhereDuoGame{
    
    idToPlay;
    couplesNumber;

    constructor(idToPlay, couplesNumber){ // el constructor la considerem com el main que executa tot el codi.
        this.idToPlay = idToPlay;
        this.couplesNumber = couplesNumber;
        
        // randomNumber(idToPlay, couplesNumber);

        if(this.couplesNumber == 8 || this.couplesNumber == 10 || this.couplesNumber == 12  ){
            addCard(idToPlay, couplesNumber, randomNumber(this.idToPlay, this.couplesNumber));
            // console.log("🚀 ~ file: WhereDuoGame.js:22 ~ WhereDuoGame ~ constructor ~ randomNumber()", randomNumber())
        }else{
            alert("La grandaria del tauler no és valid, les grandaries disponibles són: 8, 10 i 12");            
        }
    }
}

// class Card{


// }

var selectBolean = false;
var intents = 0;
var encerts = 0;
var t = 2000;



function addCard( tablero, cardsNumb, randomNums ){

    // var contenedorPrincipal= document.getElementById("game");
        var setNumbers = randomNums;


        console.log(setNumbers);
        var tarjetas = []; var numeroColumnas = 0; 
        var widthMax = 0;

        var tableroJs = document.getElementById(tablero);
        
        var mensajeFelicitacion = document.createElement("span");
        mensajeFelicitacion.setAttribute("id", "felicitacion");
            
        

        if(cardsNumb==12){
            numeroColumnas = 6;
        }else if(cardsNumb==10){
            numeroColumnas = 5;
        }else if(cardsNumb==8){
            numeroColumnas = 4;
        }

        var contenedorLabels = document.createElement("div"); // aqui es on es fiquen els labels amb el puntatje del joc.
        var contenedorJuego  = document.createElement("div"); // aqui és on es ficaran les cartes.
        
        contenedorJuego.setAttribute("id", "tableroCartas");

        tableroJs.appendChild(contenedorLabels);
        tableroJs.appendChild(contenedorJuego);
        tableroJs.appendChild(mensajeFelicitacion);

        // mensajeFelicitacion.textContent = "Felicitat, has trobat totes les parelles";

        contenedorLabels.style.background = "#2196f3";
        

        // <-------------establiment del puntatge ------------------>

        var labelIntents = document.createElement("div");
        labelIntents.setAttribute("id", "intents");
        labelIntents.textContent = "Intents: " + 0;

        var labelEncertats = document.createElement("div");
        labelEncertats.setAttribute("id", "encertats");
        labelEncertats.textContent = "Encertats: " + 0;



        contenedorLabels.appendChild(labelIntents);
        contenedorLabels.appendChild(labelEncertats);

        // <------------------------------------------------------------>

        // <--------------establiment del joc ---------------------->

        contenedorJuego.style.display = "grid";
        contenedorJuego.style.gridTemplateColumns = "repeat("+numeroColumnas+", auto)";
        contenedorJuego.style.gridTemplateRows = "repeat("+4+", auto)";
        tableroJs.style.maxWidth = widthMax
        contenedorJuego.style.background = "#2196f3";
        

        

        for (let i = 0; i <randomNums.length; i++) {

            // console.log(" setNumbers", randomNums[i])   
                
            tarjetas.push(
                '<div class="card-container" onclick="seleccionarTargeta('+i+','+cardsNumb+')">'+
                    '<div class="tarjeta" id="targeta'+i+'">'+
                        '<div class="cara frontal" id ="frontal'+i+'">'+
                            '<img src="imgs/frontal'+randomNums[i]+'.png" alt="targeta frontal '+randomNums[i]+'">'+
                        '</div>'+
                        '<div class="cara trasera">'+
                            '<img src="imgs/trasera.png" alt="targeta trasera">'+
                        '</div>'+
                    '</div>'+
                '</div>'
            );
        }
        contenedorJuego.innerHTML = tarjetas.join(" ");


        // <------------------------------------------------------------>

}


function randomNumber(tablero, nCards){

    // Aqui la idea és contar els números repetits i guardarles en un array per després desordenarles de forma aleatoria
    numeros = [];
    max = nCards;
    min = 1;
    let i = 0; let j = 1

    
    for(i = min; i<=max*2 ;  i++ && j++){
        if(j>max) j=1; // en cas que el iterador J arriba a ser major a la quantitat màxima de cartes, li fem un reset per a que continui contant i obtenir les cartes parelles
        numeros.push(j); 
    }
    
    var randomPosition = numeros.sort(function(){return Math.random()-0.5}); // aqui les desordenem per primer cop
    console.log(randomPosition);
        for (let i = 0; i < randomPosition.length; i++) { // aqui recorrem l'array per validar que els numeros que estiguin repetits no estiguin al cosat, és a dir, que la repetició no sigui seguida

            if(randomPosition[i]===randomPosition[i+1]){

                randomPosition = randomNumber(tablero, nCards); // cada cop que sorti repeticions de forma seguida, actualitzem l'array de forma recursiva fins que tinguem un array totalment desordenat
            }
        }
    // console.log(randomPosition)
    return randomPosition; 
    
}




let seleccionados = []

    function seleccionarTargeta(i, nrCartas){
        if(!selectBolean){ // En funció del valor del booleà desabilitem el joc o no.
            var targeta = document.getElementById("targeta"+i);
            if(targeta.style.transform != "rotateY(540deg)" && seleccionados.length!=2){ // li apliquem l'estil per a que giri la carta
                targeta.style.transform = "rotateY(540deg)";
                seleccionados.push(i);
            }

            if(seleccionados.length == 2){
                
                deseleccionar(seleccionados, nrCartas);
                seleccionados=[];

                
            }
        }
        

    }

    
    
    function deseleccionar(seleccionados, nrCartas){
            
        var label1 = document.getElementById("intents");
        var label2 = document.getElementById("encertats");

        let frontal1 = document.getElementById("frontal"+seleccionados[0]);
        let frontal2 = document.getElementById("frontal"+seleccionados[1]);

        selectBolean = true; // es torna true quan es selecciona les dues cartes, el qual ens desabilita els botons en aquest temps de pausa.
        intents++;


        // Aqui fem la validació per tal que en cas que s'encerti les parelles, que actualitzi el puntatge al instant sense pasar per la pausa.
        if(frontal1.innerHTML == frontal2.innerHTML){ 
            selectBolean = false;
            encerts++; 
            
            t = 0;
        }
        
        setTimeout(() => {

            console.log(seleccionados);

            // Dins del temporitzador estem fent aquesta validació per tal de retrasar el puntatge i les animacions, el que ens indica l'enunciat

            if(frontal1.innerHTML != frontal2.innerHTML){ // valida si el contingut dels dos ids son diferents 
                let targeta1 = document.getElementById("targeta"+seleccionados[0]);
                let targeta2 = document.getElementById("targeta"+seleccionados[1]);
                targeta1.style.transform = "rotateY(0deg)";
                targeta2.style.transform = "rotateY(0deg)";
                
                 // al acabar el temps es torna false, el que ens habilita els botons per continuar jugant
                console.log(intents); 
                
            }
            selectBolean = false;

        }, t);

        label1.textContent = "Intents: " + intents;
        label2.textContent = "Encertats: " + encerts;

        t=2000;


        
        if(encerts ==nrCartas){ // En funció del numero de parelles, validem si hem arribat el numero d'encertos comparant el numero de parelles existents
            var msjFeli = document.getElementById("felicitacion");

            msjFeli.textContent = "Felicitats! Has trobat totes les parelles.";

        }
        
    }




