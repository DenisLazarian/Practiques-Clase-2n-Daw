import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'MyFirstProject';
  name: string = "M.Àngels";
  counter: number = 0;
  idName: string = "mydiv";
  food: string = "arròs a la cubana";
  subjects: string[] = ['MP06', 'MP07', 'MP08', 'MP09', 'MP12'];

  writeName(): string {
    return this.name;
  }
  
  changeAuthor(): void {
    if(this.counter % 2 == 0) {
      this.name = "Marc";
    } else if(this.counter % 3 == 0) {
      this.name = "Flix";
    } else {
      this.name = "M.Àngels";
    }
    this.counter++;
  }
}
