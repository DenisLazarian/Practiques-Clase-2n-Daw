
const buttonOnOff = document.querySelector(".encendido-apagado");
var apagado=true;

const botonesNumericos = document.getElementsByName('data-numero');
const botonesOperadores = document.getElementsByName('data-operador');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrarTodo = document.getElementsByName('data-borrar-todo')[0];
const botonBorrarUltimo = document.getElementsByName('data-borrar-ultimo')[0];
const botonCambioSigno = document.getElementsByName('operador-especial')[0];

// console.log(botonBorrarTodo.textContent);

var resultado = document.getElementById('resultado');

//  console.log(result);

var operacionActual='';
var operacionAnterior='';
var operacion=undefined;

var operacionStatus=false;






buttonOnOff.addEventListener("click", encendidoApagado);

// botonBorrarUltimo.disabled=true;

botonBorrarUltimo.disabled=apagado;
        
botonesNumericos.forEach(function(boton){
    boton.disabled=apagado;
});
botonesOperadores.forEach(function(boton){
    boton.disabled=apagado;
});

botonIgual.disabled=apagado;

botonBorrarTodo.disabled=apagado;

botonCambioSigno.disabled=apagado;



function encendidoApagado(){
    if(!apagado){
        apagado=true;
        // alert("apagado");
        botonBorrarUltimo.disabled=apagado;
        
        botonesNumericos.forEach(function(boton){
            boton.disabled=apagado;
        });
        botonesOperadores.forEach(function(boton){
            boton.disabled=apagado;
        });

        botonIgual.disabled=apagado;

        botonBorrarTodo.disabled=apagado;

        botonCambioSigno.disabled=apagado;


        operacionActual="";
        actualizarDisplay();

    }else{
        apagado=false;
        // alert("encendido");

        botonBorrarUltimo.disabled=apagado;
        
        botonesNumericos.forEach(function(boton){
            boton.disabled=apagado;
        });
        botonesOperadores.forEach(function(boton){
            boton.disabled=apagado;
        });

        botonIgual.disabled=apagado;

        botonBorrarTodo.disabled=apagado;

        botonCambioSigno.disabled=apagado;

        
        
    }

}



botonesNumericos.forEach(function(boton){
    boton.addEventListener('click', function(){
        añadirNumero(boton.innerText);
        
    })
});

function calcular(){
    var calc;
    var error= false;
    
    if(operacionActual==='' && !(isNaN(operacionAnterior))){
        operacionActual='0';
    }

    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);

    if(isNaN(anterior) || isNaN(actual)) return

    switch(operacion){
        case '+': 
            calc = anterior+actual;
            break;
        case '-': 
            calc = anterior-actual;
            break;
        case 'x': 
            calc = anterior*actual;
            break;
        case '/':
            
            calc = anterior/actual;
            if(calc==Infinity) error = true;
            break;
        default:
            break;
    }
    if(error){
        operacionActual = "Error, no se divide por 0";
        operacionStatus = true;
    }
    
    else operacionActual = calc;

    operacion = undefined;
    operacionAnterior='';
}


botonesOperadores.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonCambioSigno.addEventListener('click', function(){
    operacionActual = parseFloat(operacionActual)*(-1);
    operacionActual = operacionActual.toString();
    actualizarDisplay();
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonBorrarTodo.addEventListener('click', function(){
    borrar();
    actualizarDisplay();
});

botonBorrarUltimo.addEventListener('click', function(){
    borrarUltimo();
    actualizarDisplay();
});



function añadirNumero(num){
    if(operacionStatus) return 
    operacionActual = operacionActual.toString()+num.toString();
    actualizarDisplay();
}

function selectOperacion(op){
    if(operacionActual === '') return "";
    if(operacionActual !== ''){
        calcular();
    }

    operacion = op.toString();
    operacionAnterior= operacionActual;
    operacionActual='';
    
}



function actualizarDisplay(){
    resultado.value = operacionActual;
}

function borrar(){
    operacionActual='';
    operacionAnterior='';
    operacion=undefined;
    operacionStatus=false;
}
function borrarUltimo(){
    // alert("borrar-Ultimo");
    operacionActual= Math.trunc(operacionActual/10);
    if(operacionActual===0) operacionActual="";
    if(operacionStatus){
        operacionActual='';
        operacionAnterior='';
        operacion=undefined;
        operacionStatus=false;
    }    
    

}

borrar();
borrarUltimo();












  

    


















