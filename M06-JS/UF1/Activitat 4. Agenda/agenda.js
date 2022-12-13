var lista = document.querySelector("#lista");
// var registro = lista.getElementsByTagName("button");
var registro  = document.getElementsByTagName("li");
var add = document.querySelector("#add");

var inputNom = document.querySelector("#inNom");
var inputCognom = document.querySelector("#inCognom");
var inputTelefon = document.querySelector("#inTel");
var inputAdreça = document.querySelector("#inAdreça");
var inputLocalitat = document.querySelector("#inLocalitat");



// var tamañoArray
// var registreJSON={};

// let localItems=[];

let arrayJSONs=[];

let valoresStorageMOD=[];
// let valoresStorageREM=[];



var spanTextoNombre ="";
var spanTextoTelefono ="";
var spanTextoCalle ="";

// var editar = document.querySelector(".botonEditar");
// var borrar = document.querySelector(".botonBorrar");

var storage = window.localStorage;

var valoresStorage=[];
let valoresWeb=[];

var i=0;

const selector = document.getElementById("filtre");
const cercador = document.getElementById("cercador-input");



mostrarStorage();

// registro.addEventListener("click",()=>{
//     var botonBorrar = document.getElementsByName("botonBorrar");
//     var botonEditar = document.getElementsByName("botonEditar");
    
//     botonBorrar.style.display="flex"
//     botonEditar.style.display="flex"
// })



selector.addEventListener("change", ()=>{
    
    var select = document.getElementById("filtre");

    cercador.addEventListener("keyup", ()=>{
        var  filter, ul, li, dades, i, txtValue;

        filter = cercador.value.toUpperCase();

        if(select.options[select.selectedIndex].text == "Cercar per nom")
            var etiquetaHTML = "b";
        else 
            var etiquetaHTML = "span";

        ul = document.getElementById("lista");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {

            dades = li[i].getElementsByTagName(etiquetaHTML)[select.value];
            
            txtValue = dades.textContent || dades.innerText;

            

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                console.log(txtValue)
                li[i].style.display = "";
            } else {
                // console.log(txtValue)
                li[i].style.display = "none";
            }
        }
    })

    console.log(select.value +": "+select.options[select.selectedIndex].text);
});


add.addEventListener("click", ()=>{

    // var cont=0;

    var registreJSON = {
        // id:  valoresStorage.length,
        nom: inputNom.value,
        cognom: inputCognom.value,
        telefon: inputTelefon.value,
        adressa:  inputAdreça.value,
        localitat:  inputLocalitat.value
        
    };
    
    if(registreJSON.telefon != "" && registreJSON.nom != "" && registreJSON.adressa != "" &&registreJSON.localitat != ""){
        
        if(isNumber(registreJSON.telefon)){
            var contadorRep=0;
            for (let i = 0; i < valoresStorage.length; i++) {
                if(registreJSON.telefon== valoresStorage[i].telefon){
                    contadorRep++;
                }
            }
            if(contadorRep ==0){
                addElement(registreJSON);
            }else{
                var mensaje = "No se permiten telefonos repetidos.";
                mostrarModalError(mensaje);
            }
        }else{
            var mensaje = "Numero no valido!! no puede contener letras o caracteres que no sean numeros.";
            mostrarModalError(mensaje);
        }
        

    }
    else{
        var mensaje = "Los campos no pueden estar vacios, excepto el apellido."
        mostrarModalError(mensaje);
    }
        
    
})

function isNumber(n){

    numeros = "0123456789";
    contadorNumeros=0;

    for(i=0; i<n.length; i++){
        if( (numeros.indexOf(n.charAt(i),0)!=-1) ){
            contadorNumeros++;
        }
    }
    console.log(contadorNumeros);

    if(contadorNumeros == n.length){
        console.log("true")
        return true;
    }else{
        console.log("false")
        return false;
    }   

}

function mostrarModalError(mensaje){
    let modal = document.querySelector(".background-modal");
    let mensajeContain = document.getElementById("errorMessaje")
    
    modal.style.opacity = "1";
    modal.style.display= "flex";

    mensajeContain.textContent = mensaje;

    let confirm = document.querySelector(".confirm");

    confirm.addEventListener("click", ()=>{
        modal.style.display= "none";
    })
}

function mostrarStorage(){

    
    arrayJSONs = JSON.parse(localStorage.getItem("AgendaContactes"));
    
    // valoresStorage = arrayJSONs;

    if(arrayJSONs == null){
        valoresStorage=[]
    }else
        valoresStorage = arrayJSONs;
    
    

    const agenda = document.querySelector("ul");

    for(let i=0; i<valoresStorage.length; i++ ){
        
        

        var li = document.createElement("li");
        var id = document.createElement("span");  
        var b = document.createElement("b");  
        var span = document.createElement("span"); 
        var spanTel = document.createElement("span"); 
        var br = document.createElement("br"); 

        spanTel.classList ="telNumber";

        id.textContent = arrayJSONs[i].id;
        b.textContent = arrayJSONs[i].nom+" "+arrayJSONs[i].cognom;
        span.textContent =arrayJSONs[i].adressa+". "+arrayJSONs[i].localitat;
        spanTel.textContent = " ("+arrayJSONs[i].telefon+") ";

        // span.classList="tel_loc_info";

        agenda.appendChild(li);
        

        // id.classList="idClass";

        var itemLista=lista.appendChild(li);

        

        
        // itemLista.appendChild(id);
        itemLista.appendChild(b);
        itemLista.appendChild(spanTel);
        itemLista.appendChild(addBotonEditar());
        itemLista.appendChild(addBotonBorrar());
        itemLista.appendChild(br);
        itemLista.appendChild(span);
        

    }
    


}


lista.addEventListener("click", (e)=>{
    
    
    if(e.target.tagName === "BUTTON"){

        

        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;

        const nombreHijo = li.firstElementChild;
        const telefonoHijo = nombreHijo.nextSibling;
        const botonEditar = telefonoHijo.nextSibling;
        const botonBorrar = botonEditar.nextSibling;
        
        

        var telefonoInt=telefonoHijo.textContent;
        // console.log("tel:"+telefonoInt+" "+ telefonoInt.length);

        var spanTele = Number.parseInt(telefonoInt.slice(2,-2));

        if(button.textContent === 'borrar'){

            console.log(spanTele+":"+ typeof(spanTele));


            if(window.confirm("¿Estas seguro que quiere eliminar el elmento?")){
                for(var i = 0; i<valoresStorage.length;i++){

                    // console.log("pasa el bucle")
                    // console.log(span)
                    if(spanTele == valoresStorage[i].telefon ){
                        console.log(spanTele);
                        console.log("correcto");
                        valoresStorageMOD=valoresStorage.splice(i,1);

                        // console.log("aqui: "+valoresStorage[i].telefon);

                        localStorage.setItem("AgendaContactes", JSON.stringify(valoresStorage));
                    }

                }
                
                ul.removeChild(li);
            }
            
            
        }else if(button.textContent === 'editar'){
            console.log("edit");
            var span_nombre = li.firstElementChild;
            var span_telefono = span_nombre.nextSibling;

            var boton1 = span_telefono.nextSibling;
            var boton2 = boton1.nextSibling;

            var br = boton2.nextSibling;
            var span_calle = br.nextSibling;
            // var span_localidad = span_calle.nextSibling;

            var input_nombre = document.createElement("input");
            input_nombre.className = "input_editar_nombre";
            input_nombre.value=span_nombre.textContent;

            var input_telefono = document.createElement("input");
            input_telefono.className = "input_editar_telefono";
            input_telefono.value=span_telefono.textContent;

            var input_calle = document.createElement("input");
            input_calle.className = "input_editar_adressa_localitat";
            input_calle.value = span_calle.textContent;



            // var input_localidad = document.createElement("input");
            // input_localidad.className = "input_editar_localidad";
            // input_localidad.value=span.textContent;
            

            li.insertBefore(input_nombre, span_nombre);
            li.insertBefore(input_telefono, span_telefono);
            // li.createElement("br");
            li.insertBefore(input_calle, span_calle);


            li.removeChild(span_nombre);
            li.removeChild(span_telefono);
            li.removeChild(span_calle);

            spanTextoNombre = span_nombre.textContent;
            spanTextoTelefono = span_telefono.textContent;
            spanTextoCalle = span_calle.textContent;
            // console.log(i);

            // li.removeChild(botonBorrar);
            botonBorrar.style.display="none";
            button.textContent='guardar';



        }else if(button.textContent ==='guardar'){

            var error = false;
            var errorFormato = false;

            const textToEditNombre = li.firstElementChild;
            const textToEditTelefono = textToEditNombre.nextSibling; 
            const boton1 = textToEditTelefono.nextSibling; 
            const boton2 = boton1.nextSibling; 
            const br = boton2.nextSibling; 
            const textToEditCalle = br.nextSibling; 

            const bNombre = document.createElement("b");
            const spanTel = document.createElement("span");
            const spanCalle = document.createElement("span");

            // if(isNumber(textToEditTelefono)){
                bNombre.textContent = textToEditNombre.value;
                spanTel.textContent = textToEditTelefono.value;
                spanCalle.textContent = textToEditCalle.value;
            // }

            // }
            


            for(var i = 0; i<valoresStorage.length;i++){
                console.log("bucle entrada");
                if(spanTextoTelefono.slice(2,-2) === valoresStorage[i].telefon){
                    // console.log("aqui no pasa");

                    var ArrayNombres = [];
                    var ArrayCalle = [];

                    ArrayNombres = (textToEditNombre.value).split(" ");
                    ArrayCalle = (textToEditCalle.value).split(". ");

                    var auxiliarJSON = {
                        nom: ArrayNombres[0],
                        cognom: ArrayNombres[1],
                        telefon: (textToEditTelefono.value).slice(2,-2),
                        adressa:  ArrayCalle[0],
                        localitat:  ArrayCalle[1]

                    }

                    // console.log(auxiliarJSON);
                    
                    

                    var contadorRep=0;
                    for (let i = 0; i < valoresStorage.length; i++) {
                        if(auxiliarJSON.telefon== valoresStorage[i].telefon){
                            contadorRep++;
                        }
                    }
                    if(contadorRep == 0){

                        if(isNumber(auxiliarJSON.telefon)){
                            valoresStorage.splice(i,1, auxiliarJSON);
                        
                            localStorage.setItem("AgendaContactes", JSON.stringify(valoresStorage));
                        }else{
                            var mensaje = "Numero no valido!! no puede contener letras o caracteres que no sean numeros.";
                            errorFormato=true;
                            mostrarModalError(mensaje);
                        }
                        
                    }else{
                        var mensaje = "No se permiten telefonos repetidos.";
                        error = true;

                        mostrarModalError(mensaje);
                    }

                    
                   
                }
            }

            

            if(!error && !errorFormato){
                li.insertBefore(bNombre, textToEditNombre);
                li.insertBefore(spanTel, textToEditTelefono);
                li.insertBefore(spanCalle, textToEditCalle);

                li.removeChild(textToEditNombre); 
                li.removeChild(textToEditTelefono); 
                li.removeChild(textToEditCalle); 

                // li.appendChild(botonBorrar);
                botonBorrar.style.display="";
                button.textContent='editar';
            }
            

            // console.log(textToEditNombre.value+": "+typeof(textToEditNombre.value))
            // console.log(spanTextoTelefono);




            // console.log(textToEditTelefono.value)

            

            // storage.setItem(claveStorage, span);

            
            // }else if(button.textContent === "cancelar"){

            //     const textToEditNombre = li.firstElementChild;
            //     const textToEditTelefono = textToEditNombre.nextSibling; 
            //     const boton1 = textToEditTelefono.nextSibling; 
            //     const boton2 = boton1.nextSibling; 
            //     const br = boton2.nextSibling; 
            //     const textToEditCalle = br.nextSibling; 

            //     const bNombre = document.createElement("b");
            //     const spanTel = document.createElement("span");
            //     const spanCalle = document.createElement("span");

            //     bNombre.textContent = spanTextoNombre;
            //     spanTel.textContent = spanTextoTelefono;
            //     spanCalle.textContent = spanTextoCalle;

            //     li.insertBefore(bNombre, textToEditNombre)
            //     li.insertBefore(spanTel, textToEditTelefono)
            //     li.insertBefore(spanCalle, textToEditCalle)

            //     li.removeChild(textToEditNombre)
            //     li.removeChild(textToEditTelefono)
            //     li.removeChild(textToEditCalle)



            //     if(button.textContent==="guardar")
            //         button.textContent='edit';


            //     botonBorrar.textContent='borrar';

        }
    }


})


function addElement(value){

    // console.log(claveStorage);
    var id = document.createElement("span");

    const agenda = document.querySelector("ul");

    const li = document.createElement("li");  
    const b = document.createElement("b");  
    const span = document.createElement("span"); 
     
    const spanTel = document.createElement("span"); 
    const br = document.createElement("br"); 
    
    id.textContent = value.id;
    b.textContent = value.nom+" "+value.cognom;
    span.textContent =value.adressa+". "+value.localitat;
    spanTel.textContent = " ("+value.telefon+") ";
    spanTel.classList="telNumber";

   
   
    // valoresWeb.push(value);
    valoresStorage.push(value);
    // console.log(JSON.stringify(valoresStorage))

    localStorage.setItem("AgendaContactes", JSON.stringify(valoresStorage));
   

    

    agenda.appendChild(li);

    var itemLista=lista.appendChild(li);

    // valoresStorage.push(value);

    
    // itemLista.appendChild(id);
    // itemLista.append(id);
    itemLista.appendChild(b);
    itemLista.appendChild(spanTel);
    itemLista.appendChild(addBotonEditar());
    itemLista.appendChild(addBotonBorrar());
    itemLista.appendChild(br);
    itemLista.appendChild(span);
    

    
    // claveStorage++;
    
}

function addBotonBorrar(){

    const botonBorrar = document.createElement("button");

    botonBorrar.textContent = "borrar";
    botonBorrar.className="botonBorrar";

    // botonBorrar.addEventListener("click", (e)=>{
    //     const item = e.target.parentElement;
    //     lista.removeChild(item);
    // })

    return botonBorrar;
}

function addBotonEditar(){

    const botonEditar = document.createElement("button");

    botonEditar.textContent = "editar";
    botonEditar.className="botonEditar";

    return botonEditar;
}




function valVacio(){
    let modal = document.querySelector(".background-modal");
    
    modal.style.opacity = "1";
    modal.style.display= "flex";

    let confirm = document.querySelector(".confirm");

    confirm.addEventListener("click", ()=>{
        modal.style.display= "none";
    })

    
    
    // return validacion;
}


   
