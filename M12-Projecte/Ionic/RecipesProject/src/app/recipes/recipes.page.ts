import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  public recipes: string[] = ['Arròs a la cubana', 'Bikinis', 'Pollastre al forn'];

  constructor() {  }

  ngOnInit() {

  }


}
