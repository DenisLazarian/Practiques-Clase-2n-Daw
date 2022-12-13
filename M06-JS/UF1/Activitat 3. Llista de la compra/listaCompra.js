var lista = document.querySelector("#lista");
var añadir = document.querySelector("#Añadir");

var entrada = document.querySelector("#entrada");

var editar = document.querySelector(".botonEditar");
var borrar = document.querySelector(".botonBorrar");







añadir.addEventListener("click", ()=>{

    var valor = entrada.value;

    // console.log(valor);

    addElement(valor);

    

})



function addElement(value){

    const listaCompras = document.querySelector("ul");

    const li = document.createElement("li");
    
    
    li.textContent = value;

    const botonEditar = document.createElement("button");

    botonEditar.textContent = "editar";
    botonEditar.className="botonEditar";

    editarBoton(botonEditar);


    listaCompras.appendChild(li);
    var itemLista=lista.appendChild(li);
    itemLista.appendChild(botonEditar);
    itemLista.appendChild(añadirBotonBorrar());




    // editar.addEventListener("click", ()=>{
    //     console.log("editar");
    // });
    
    // borrar.addEventListener("click", ()=>{
    //     console.log("borrar");
    // });
}

function añadirBotonBorrar(){

    const botonBorrar = document.createElement("button");

    botonBorrar.textContent = "borrar";
    botonBorrar.className="botonBorrar";

    botonBorrar.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        lista.removeChild(item);
    })


    return botonBorrar;
}

// function añadirBotonEditar(){

    

//     return botonEditar;
// }

function editarBoton(botonEditar){
    
    // const botonEditar = document.createElement("button");

    botonEditar.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        nuevoProducto = prompt("Escribe el producto editado", "");

        var btn = document.createElement("button");

        btn.textContent  = "editar";
        btn.className="botonEditar";

        

        item.textContent=nuevoProducto;
        item.appendChild(btn);
        item.appendChild(añadirBotonBorrar());
        editarBoton(botonEditar);
        
    })
    
}





   
