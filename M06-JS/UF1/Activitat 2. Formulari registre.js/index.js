var form, mail, password1, password2, result;
var botonRegistro = document.querySelector('#enviar');


// const lista = document.getElementById("mensaje-de-validacion");
// const elementoLi = document.createElement("li");

validacionGlobal1 = false;
validacionGlobal2 = false;
validacionGlobal3 = false;


// let error = false;

var validationScreen = document.querySelector('#mensaje-de-validacion');

// contentEmail = document.querySelector('.eMail');

// var local = [24, 2352, 342]
function obtenerDatos(){

    // form = document.querySelector('#formulario');



    mail = document.getElementById('correo').value;
    password1 = document.querySelector('#password1').value;
    password2 = document.querySelector('#password2').value;

    
    var r = [mail, password1, password2];

    return r;


}

function validateEqualitiPassword(r){


    if(r[1] != r[2]){
        return "<li>Els passwords no son indentics </li>";
        // return "Els passwords no son indentics <br>";
    }
        
    

    validacionGlobal2=true
    return "";


}


function validatePassword(r){

    contraseña = r[1];

    comprovante = false;
    

    var error1, error2, error3="";

    if(contraseña.length < 9 ){

        error1 =  "<li>La longitud mínima del password és de 9 </li> ";
        // error1 =  "La longitud mínima del password és de 9 <br> ";
          
    }else{
        error1 = "";
        comprovante=true;
    } 

    
    comprovante3 = isThereNumbers(contraseña);

    if(!comprovante3){
        error2 = "<li>El password ha de contenir minim 1 numero </li>";
        // error2 = "El password ha de contenir minim 1 numero <br>";
        // error = true;
    }else error2 = "";


    comprovante2 = isThereUperCase(contraseña);
    if(!comprovante2){
        error3 =  "<li>El password ha de contenir minim 2 majuscules</li> ";
        // error3 =  "El password ha de contenir minim 2 majuscules <br>";
        // error = true;
    }else error3 = ""; 
    
    if(comprovante && comprovante2 && comprovante3){
        validacionGlobal1=true
        return "";
    }   
    else{
        return   error1+error2+error3 ;
    }

}

function validateUser(result){

    var correo;
    correo = result[0];
    // var contraseña = r[1];

    // validar eMail
    arroba = correo.indexOf("@");
    punto = correo.lastIndexOf(".");
    extension = correo.split(".")[1];

    if(arroba < 1 || ( punto - arroba < 2 )||correo==="" ){
        return "<li>eMail usuari amb format incorrecte </li>"; //false
        // return "eMail usuari amb format incorrecte <br>"; //false
        // error= true;
        
    }else{ //true
        if(extension.length <2 || extension.length> 3){ 
            // return "La extensió de domini a de ser entre 2 i 3 caracters, exemple: .cat, .es, etc. <br>";
            return "<li>La extensió de domini a de ser entre 2 i 3 caracters, exemple: .cat, .es, etc. </li>";
            // error = true;

        }
    }
    validacionGlobal3=true
    return "";

}

botonRegistro.addEventListener('click', (e)=>{
    e.preventDefault();

    valid= false;

    result = obtenerDatos();

    console.log(result);

    errorMail = validateUser(result);
    errorPassword = validatePassword(result);
    errorNotEqualPassword = validateEqualitiPassword(result);
    
    
        
    
    // document.querySelector("#mensaje-de-validacion").innerHTML = errorMail +errorPassword + errorNotEqualPassword;

    if(validacionGlobal1 && validacionGlobal2  && validacionGlobal3 ){
        document.querySelector("#mensaje-de-validacion").innerText = "DADES REGISTRE CORRECTES";
        var element = document.getElementById("mensaje-de-validacion");
        element.classList.add("green");
    }else{
        document.querySelector("#mensaje-de-validacion").innerHTML = errorMail +errorPassword + errorNotEqualPassword;
        var element = document.getElementById("mensaje-de-validacion");
        element.classList.add("red");
    }



});



function isThereUperCase(string){

    stringLowerCase = string.toLowerCase();
    verificado = false;

    contadorMayusculas = 0;

    for(i=0; i<string.length; i++){
        if( !(stringLowerCase.charAt(i) == string.charAt(i)) ){
            contadorMayusculas++;
            // verificado = false;
        }
    }

    if(contadorMayusculas>=2){
        return  true;
    }else{
        return false;
    }

}


function isThereNumbers(string){
    var numeros = "0123456789";
    var contadorNumeros= 0;


    for(i=0; i<string.length; i++){
        if( (numeros.indexOf(string.charAt(i),0)!=-1) ){
            contadorNumeros++;
        }
    }

    if(contadorNumeros > 0){
        return true;
    }else{
        return false;
    }    
}