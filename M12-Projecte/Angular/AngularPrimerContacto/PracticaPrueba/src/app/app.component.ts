import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'PracticaPrueba';
  stundets={

    'mp06': ['Denis', 'Mady', "Alejandro", "Jaime"],
    'mp07': ['Jaume', 'Robert', "Ionela", "Pep"],
    'mp08': ['Pascu', 'Emilio', 'Laura', 'Madison'],
    'mp09': ['Sandra', 'Alex', "Ovideo", "Pedro"]
  };
  teachers={
    'mp06' : ["Flix"],
    'mp07' : ["Pascu"],
    'mp09' : ['Jaume'],
    'mp10' : ["Maria"]
  };

  obtenerMateria(materia:String): String {


    

    return "";
  }


}
