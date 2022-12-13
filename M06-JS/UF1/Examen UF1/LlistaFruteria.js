var inputCantidad = document.querySelector("#cantidad_input");
var inputProducto = document.querySelector("#producto_input");



var botonAdd = document.getElementById("Add");

var ulFrutas = document.querySelector("#Frutas");
var ulVerduras = document.querySelector("#Verduras");

const unidad = document.querySelector("#selectorUnidad");
const tipoFruta = document.querySelector("#selectorTipoProducto");

var unidadSeleccionada; // guardara el tiputs de unitat
var tipoProducto; // guardara el tiputs de producte

var valoresStorageFruta=[]; // Es qui contindra tots els registres de productes segons el tipus
var valoresStorageVerdura=[]; 


mostrarStorage();

tipoFruta.addEventListener("change", ()=>{
    
    tipoProducto = tipoFruta;

    console.log(tipoProducto.value +": "+tipoProducto.options[tipoProducto.selectedIndex].text);
});

unidad.addEventListener("change", ()=>{
    
    unidadSeleccionada = unidad;

    // cercador.addEventListener("keyup", ()=>{
    //     var  filter, ul, li, dades, i, txtValue;

    //     filter = cercador.value.toUpperCase();

    //     if(select.options[select.selectedIndex].text == "Cercar per nom")
    //         var etiquetaHTML = "b";
    //     else 
    //         var etiquetaHTML = "span";

    //     ul = document.getElementById("lista");
    //     li = ul.getElementsByTagName("li");

    //     for (i = 0; i < li.length; i++) {

    //         dades = li[i].getElementsByTagName(etiquetaHTML)[select.value];
            
    //         txtValue = dades.textContent || dades.innerText;

            

    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             console.log(txtValue)
    //             li[i].style.display = "";
    //         } else {
    //             // console.log(txtValue)
    //             li[i].style.display = "none";
    //         }
    //     }
    // })

    console.log(unidadSeleccionada.value +": "+unidadSeleccionada.options[unidadSeleccionada.selectedIndex].text);
});


botonAdd.addEventListener("click", ()=>{

    var tipoLista = [];
    if(tipoProducto.value == "Fruta"){
        tipoLista = valoresStorageFruta;
    }else if(tipoProducto.value == "Verdura"){
        tipoLista = valoresStorageVerdura;
    }


    var registreJSON ={
        cantidad : inputCantidad.value,
        unitat: unidadSeleccionada.value,
        nombre : inputProducto.value,
    }

    // console.log(registreJSON);
    addElement(registreJSON);

    if(registreJSON.cantidad != "" && registreJSON.unitat != "" && registreJSON.nombre != "" ){
        
        if(isNumber(registreJSON.cantidad)){  // per evitar validar caracter no numerics
            // var contadorRep=0;
            // for (let i = 0; i < tipoLista.length; i++) {
            //     if(registreJSON.nombre== tipoLista[i].nombre){ // agafare com a id els noms del prodcutes.
            //         contadorRep++;
            //     }
            // }
            // if(contadorRep ==0){ // si es diferent de 0 vol dir que hi ha repetits
            //     addElement(registreJSON);
            // }else{
            //     var mensaje = "No se permiten nombres de productos repetidos.";
            //     mostrarModalError(mensaje);
            // }

            addElement(registreJSON);
        }else{
            var mensaje = "Numero no valido!! no puede contener letras o caracteres que no sean numeros.";
            mostrarModalError(mensaje);
        }
        

    }
    else{
        var mensaje = "Los campos no pueden estar vacios"
        mostrarModalError(mensaje);
    }


});


function mostrarStorage(){


    var listaVerduras = [];
    var ListaFrutas = [];
    

    listaVerduras = JSON.parse(localStorage.getItem("ListaCompraVerdura"));
    ListaFrutas = JSON.parse(localStorage.getItem("ListaCompraFruta"));

    if( ListaFrutas == null){
        valoresStorageFruta==[]
    }else{
        valoresStorageFruta == ListaFrutas;
    }
    if( (listaVerduras == null)){
        valoresStorageVerdura==[]
    }else{
        valoresStorageVerdura == listaVerduras;
    }

    // for (let i = 0; i < tipoLista.length; i++) {
        
        const listaComprasFrutas = document.querySelector("#Frutas");
        const listaComprasVerdura = document.querySelector("#Verduras");
        var li = document.createElement("li");

        var nombreProduto = document.createElement("span");  
        var numeroUnidad = document.createElement("span");  
        var tipoUnidad = document.createElement("span");  

        
        for (let i = 0; i < valoresStorageFruta.length; i++) {

            nombreProduto.textContent = valoresStorageFruta.nombre;
            numeroUnidad.textContent = valoresStorageFruta.cantidad+" ";
            tipoUnidad.textContent = valoresStorageFruta.unitat+". ";

            listaComprasFrutas.appendChild(li);

            var itemLista= ulFrutas.appendChild(li);

            itemLista.appendChild(numeroUnidad);
            itemLista.appendChild(tipoUnidad);
            itemLista.appendChild(nombreProduto);
            itemLista.appendChild(addBotonEditar()); // crido a les funcions respectivament per crear els botons
            itemLista.appendChild(addBotonBorrar());

        
        }
        // }else if(tipoProducto.value == "Verdura"){
            // localStorage.setItem("ListaCompraVerdura", JSON.stringify(tipoLista));
        for (let i = 0; i < valoresStorageVerdura.length; i++) {  
            
            nombreProduto.textContent = valoresStorageVerdura.nombre;
            numeroUnidad.textContent = valoresStorageVerdura.cantidad+" ";
            tipoUnidad.textContent = valoresStorageVerdura.unitat+". ";


            listaComprasVerdura.appendChild(li);

            var itemLista=ulVerduras.appendChild(li);

            itemLista.appendChild(numeroUnidad);
            itemLista.appendChild(tipoUnidad);
            itemLista.appendChild(nombreProduto);
            itemLista.appendChild(addBotonEditar()); // crido a les funcions respectivament per crear els botons
            itemLista.appendChild(addBotonBorrar());
        }
        // }
        
    // }
    


}


ulFrutas.addEventListener("click", (e)=>{
    
    
    if(e.target.tagName === "BUTTON"){

        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;

        const cantidadProd = li.firstElementChild;
        const tipoUnidad = cantidadProd.nextSibling;
        const nombreProd = tipoUnidad.nextSibling;


        // const botonEditar = nombreProd.nextSibling;
        // const botonBorrar = botonEditar.nextSibling;
        
        if(button.textContent === 'borrar'){


            if(window.confirm("¿Estas seguro que quiere eliminar el elmento?")){
                for(var i = 0; i<valoresStorageFruta.length;i++){

                    // console.log("pasa el bucle")
                    // console.log(span)
                    if(nombreProd == valoresStorageFruta[i].nombre ){
                        // console.log(spanTele);
                        // console.log("correcto");
                        valoresStorageMOD=valoresStorageFruta.splice(i,1);
                        // console.log("aqui: "+valoresStorage[i].telefon);

                        localStorage.setItem("AgendaContactes", JSON.stringify(valoresStorageFruta));
                    }

                }
                
                ul.removeChild(li);
            }
            
            
        }else if(button.textContent === 'editar'){
            console.log("edit");
            var span_cant = li.firstElementChild;
            var span_tipo = span_cant.nextSibling;

           
            var input_cant = document.createElement("input");
            input_cant.className = "input_editar_nombre";
            input_cant.value=span_cant.textContent+" ";

            var input_tipo = document.createElement("input");
            input_tipo.className = "input_editar_telefono";
            input_tipo.value=span_tipo.textContent +". ";

           

            li.insertBefore(input_cant, span_cant);
            li.insertBefore(input_tipo, span_tipo);


            li.removeChild(span_cant);
            li.removeChild(span_tipo);
          

            spanTextoNombre = span_nuevo_cant.textContent;
            spanTextoTelefono = span_nuevo_tipo.textContent;
            // console.log(i);

            // li.removeChild(botonBorrar);
            // botonBorrar.style.display="none";
            button.textContent='guardar';



        
        }else if(button.textContent ==='guardar'){

            var error = false;
            var errorFormato = false;

            const textToEditCant = li.firstElementChild;
            const textToEditTipo = textToEditCant.nextSibling; 
            const PorductoSpan = textToEditTipo.nextSibling; 
            // const boton1 = textToEditTipo.nextSibling; 
             

            const spanCant = document.createElement("b");
            const spanTipo = document.createElement("span");
            // const spanCalle = document.createElement("span");

            // if(isNumber(textToEditTelefono)){
                spanCant.textContent = textToEditNombre.value;
                spanTipo.textContent = textToEditTipo.value;
                
            // }

            // }
            


            for(var i = 0; i<valoresStorage.length;i++){
                console.log("bucle entrada");
                
                   
                    var auxiliarJSON = {
                        cantidad : textToEditCant.value,
                        unitat: textToEditTipo.value,
                        nombre : PorductoSpan.value,
                    }

                  
                        if(PorductoSpan.value == valoresStorageFruta[i].nombre){
                            // console.log(span);
                            valoresStorage.splice(i,1, auxiliarJSON)
                            localStorage.setItem("ListaCompraFruta", JSON.stringify(valoresStorageFruta));
                        }
                            
                       
                    
                    }

                    
                
                
            }
    }


})
ulVerduras.addEventListener("click", (e)=>{
    
    
    if(e.target.tagName === "BUTTON"){

        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;

        const cantidadProd = li.firstElementChild;
        const tipoUnidad = cantidadProd.nextSibling;
        const nombreProd = tipoUnidad.nextSibling;


        // const botonEditar = nombreProd.nextSibling;
        // const botonBorrar = botonEditar.nextSibling;
        
        if(button.textContent === 'borrar'){


            if(window.confirm("¿Estas seguro que quiere eliminar el elmento?")){
                for(var i = 0; i<valoresStorageVerdura.length;i++){

                    // console.log("pasa el bucle")
                    // console.log(span)
                    if(nombreProd == valoresStorageVerdura[i].nombre ){
                        // console.log(spanTele);
                        // console.log("correcto");
                        valoresStorageMOD=valoresStorageVerdura.splice(i,1);
                        // console.log("aqui: "+valoresStorage[i].telefon);

                        localStorage.setItem("ListaCompraVerdura", JSON.stringify(valoresStorageVerdura));
                    }

                }
                
                ul.removeChild(li);
            }
            
            
        }else if(button.textContent === 'editar'){
            console.log("edit");
            var span_cant = li.firstElementChild;
            var span_tipo = span_cant.nextSibling;

            // var boton1 = span_telefono.nextSibling;
            // var boton2 = boton1.nextSibling;

            // var br = boton2.nextSibling;
            // var span_calle = br.nextSibling;
            // var span_localidad = span_calle.nextSibling;

            var input_cant = document.createElement("input");
            input_cant.className = "input_editar_nombre";
            input_cant.value=span_cant.textContent+" ";

            var input_tipo = document.createElement("input");
            input_tipo.className = "input_editar_telefono";
            input_tipo.value=span_tipo.textContent +". ";

           

            li.insertBefore(input_cant, span_cant);
            li.insertBefore(input_tipo, span_tipo);


            li.removeChild(span_cant);
            li.removeChild(span_tipo);
          

            spanTextoNombre = span_nuevo_cant.textContent;
            spanTextoTelefono = span_nuevo_tipo.textContent;
            // console.log(i);

            // li.removeChild(botonBorrar);
            botonBorrar.style.display="none";
            button.textContent='guardar';



        
        }
    }


})











function addElement(value){

    // console.log(claveStorage);

    // var tipoLista = [];

    // if(tipoProducto.value == "Fruta"){
    //     var tipoLista = valoresStorageFruta;
    // }else if(tipoProducto.value == "Verdura"){
    //     var tipoLista = valoresStorageVerdura;
    // }

    const listaComprasFrutas = document.querySelector("#Frutas");
    const listaComprasVerdura = document.querySelector("#Verduras");

    const li = document.createElement("li");

    const nombreProduto = document.createElement("span");  
    const numeroUnidad = document.createElement("span");  
    const tipoUnidad = document.createElement("span");  

    // valoresStorage[i] = value;

    // if(valueStor !== null)
    //     span.textContent = valueStor;
    
    
    nombreProduto.textContent = value.nombre;
    numeroUnidad.textContent = value.cantidad+" ";
    tipoUnidad.textContent = value.unitat+". ";
    
    
    // storage.setItem("ListaCompra", JSON.stringify(valoresStorage));


    if(tipoProducto.value == "Fruta"){
        valoresStorageFruta.push(value);
        localStorage.setItem("ListaCompraFruta", JSON.stringify(valoresStorageFruta));
        
        listaComprasFrutas.appendChild(li);

        var itemLista= ulFrutas.appendChild(li);

        itemLista.appendChild(numeroUnidad);
        itemLista.appendChild(tipoUnidad);
        itemLista.appendChild(nombreProduto);
        itemLista.appendChild(addBotonEditar()); // crido a les funcions respectivament per crear els botons
        itemLista.appendChild(addBotonBorrar());

       

    }else if(tipoProducto.value == "Verdura"){
        valoresStorageVerdura.push(value);

        localStorage.setItem("ListaCompraVerdura", JSON.stringify(valoresStorageFruta));
        listaComprasVerdura.appendChild(li);

        var itemLista=ulVerduras.appendChild(li);

        itemLista.appendChild(numeroUnidad);
        itemLista.appendChild(tipoUnidad);
        itemLista.appendChild(nombreProduto);
        itemLista.appendChild(addBotonEditar()); // crido a les funcions respectivament per crear els botons
        itemLista.appendChild(addBotonBorrar());
    }

    // valoresStorage.push(value);

    // itemLista.appendChild(addBotonEditar()); // crido a les funcions respectivament per crear els botons
    // itemLista.appendChild(addBotonBorrar());

    
    // claveStorage++;
    
}

function addBotonBorrar(){

    const botonBorrar = document.createElement("button");

    botonBorrar.textContent = "borrar";
    botonBorrar.className="botonBorrar";


    return botonBorrar;
}

function addBotonEditar(){

    const botonEditar = document.createElement("button");

    botonEditar.textContent = "editar";
    botonEditar.className="botonEditar";

    return botonEditar;
}







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











