var lista = document.querySelector("#lista");
var añadir = document.querySelector("#Añadir");

var entrada = document.querySelector("#entrada");

let localItems=[]

let valoresStorageMOD=[];
let valoresStorageREM=[];

var spanTexto ="";

// var editar = document.querySelector(".botonEditar");
// var borrar = document.querySelector(".botonBorrar");

var storage = window.localStorage;

var valoresStorage=[];
var i=0;

let validacion;

mostrarStorage();

añadir.addEventListener("click", ()=>{

    var valor = entrada.value;
    

    // console.log(valor);
   
    // var valoresAlmacenados = JSON.parse(localStorage.getItem("ListaCompra"))
    if(valor=="" ){
        valVacio();
        // console.log("texto vacio");
    } 
    else{
        
        addElement(valor);
         
    }
    
    
    
    

})

function mostrarStorage(){

    localItems = JSON.parse(localStorage.getItem("ListaCompra"));
    
    if(localItems === null){
        valoresStorage =[];
    }else {
        valoresStorage = localItems;
    }

    const listaCompras = document.querySelector("ul");

    for(var i = 0; i<valoresStorage.length; i++){
        const li = document.createElement("li");  
        const span = document.createElement("span");  


        span.textContent = localItems[i];

        listaCompras.appendChild(li);
        var itemLista=lista.appendChild(li);


    

        itemLista.appendChild(span);
        itemLista.appendChild(añadirBotonEditar());
        itemLista.appendChild(añadirBotonBorrar());
    }
    


}


lista.addEventListener("click", (e)=>{
    
    
    if(e.target.tagName === "BUTTON"){

        

        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;

        // var spanTexto = li.firstElementChild;

        if(button.textContent === 'borrar'){
            var span = li.firstElementChild.textContent;
            // splice(localStorage.getItem("ListaCompra"))
            console.log(button);


            if(window.confirm("¿Estas seguro que quiere eliminar el elmento?")){
                // console.log("si")
                for(var i = 0; i<valoresStorage.length;i++){
                    if(span == valoresStorage[i]){
                        console.log(span);
                        valoresStorageMOD=valoresStorage.splice(i,1)
                        
                        localStorage.setItem("ListaCompra", JSON.stringify(valoresStorage));
                    }
                }
    
                ul.removeChild(li);
            }
            
            
        }else if(button.textContent === 'editar'){
            // console.log("edit");
            var span = li.firstElementChild;

            var input = document.createElement("input");
            input.className = "input_editar";
            input.value=span.textContent;
            
            
            li.insertBefore(input, span);
            li.removeChild(span);

            spanTexto = span.textContent;
            // console.log(i);

            button.textContent="guardar";



        }else if(button.textContent ==='guardar'){

            const textToEdit = li.firstElementChild; // pillando elemento input
            const span = document.createElement("span");

            span.textContent = textToEdit.value;

            li.insertBefore(span, textToEdit);
            li.removeChild(textToEdit); // eliminando elemento input

            for(var i = 0; i<valoresStorage.length;i++){
                if(spanTexto == valoresStorage[i]){
                    // console.log(span);
                    valoresStorage.splice(i,1, textToEdit.value)
                    localStorage.setItem("ListaCompra", JSON.stringify(valoresStorage));
                }
            }

            // storage.setItem(claveStorage, span);

            button.textContent='editar';
        }
    }


})


function addElement(value){

    // console.log(claveStorage);
    

    const listaCompras = document.querySelector("ul");

    const li = document.createElement("li");  
    const span = document.createElement("span");  

    // valoresStorage[i] = value;

    // if(valueStor !== null)
    //     span.textContent = valueStor;
    
    
    span.textContent = value;
    
    valoresStorage.push(value);
    // storage.setItem("ListaCompra", JSON.stringify(valoresStorage));
    localStorage.setItem("ListaCompra", JSON.stringify(valoresStorage));

    listaCompras.appendChild(li);
    var itemLista=lista.appendChild(li);

    // valoresStorage.push(value);

    

    itemLista.appendChild(span);
    itemLista.appendChild(añadirBotonEditar());
    itemLista.appendChild(añadirBotonBorrar());

    
    // claveStorage++;
    
}

function añadirBotonBorrar(){

    const botonBorrar = document.createElement("button");

    botonBorrar.textContent = "borrar";
    botonBorrar.className="botonBorrar";

    // botonBorrar.addEventListener("click", (e)=>{
    //     const item = e.target.parentElement;
    //     lista.removeChild(item);
    // })

    return botonBorrar;
}

function añadirBotonEditar(){

    const botonEditar = document.createElement("button");

    botonEditar.textContent = "editar";
    botonEditar.className="botonEditar";

    return botonEditar;
}

// function editarBoton(botonEditar){
    
//     const botonEditar = document.createElement("button");

//     botonEditar.addEventListener("click", (e)=>{
//         const item = e.target.parentElement;
//         nuevoProducto = prompt("Escribe el producto editado", "");

//         var btn = document.createElement("button");

//         btn.textContent = "editar";
//         btn.className="botonEditar";

        

//         item.textContent=nuevoProducto;
//         item.appendChild(btn);
//         item.appendChild(añadirBotonBorrar());
//         editarBoton(botonEditar);
        
//     })
    
// }


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


   
