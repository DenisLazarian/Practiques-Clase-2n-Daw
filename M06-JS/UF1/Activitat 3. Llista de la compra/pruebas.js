
// localStorage.setItem("pato","donald");


// console.log(localStorage.getItem("pato"));


// localStorage.removeItem("pato")


array = ["pato", "caco", "mantequilla","mermelada"];
arrayStorage = JSON.stringify(array)

localStorage.setItem("patata", arrayStorage);

console.log(localStorage.getItem("patata"))
// console.log(localStorage.setItem("patata", arrayStorage.splice() ))

for(i=0; i<array.length; i++){
    console.log(array[i]);
}


