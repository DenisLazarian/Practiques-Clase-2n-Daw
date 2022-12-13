import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'MyFirstProgect';
  name: string = "Denis";
  counter: number= 0;
  mydiv: string = "click";
  // food:string = "arroz a la cubana";
  sbj: string[] = ["MP06", "MP07","MP08","MP09","MP011","MP012" ];




  writeName():string{
    return this.name;
  }

  changeAuthor():void{
    if(this.counter %2 == 0) {
      this.name = "Denis";
    } else if(this.counter %3==0) {
      this.name = "Jaime";
    }else {
      this.name = "Maria";
    }
    this.counter++;
  }


}


