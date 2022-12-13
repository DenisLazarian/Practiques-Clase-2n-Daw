const screen = document.getElementById('calculator-screen');
const keys = document.getElementById('calculator-keys');

console.log(keys);




const calculator = ()=>{
    if(!keys) return
    keys.addEventListener('click', e=>{
        const t = e.target,
            d = t.dataset;
            
        // detectar si se pulso un numero
        if(d.number) console.log('number');
        // detectar si se pulso un operador matematico
        if(m) console.log('math');
        // detectar si se pulso una operacion funcional de la calc
        if(o) console.log('operation');

    })
}