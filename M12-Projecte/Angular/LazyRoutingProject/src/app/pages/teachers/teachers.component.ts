import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_INITIALIZER } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  public teachers: string[] = ["Marc", "Flix", "Jaume", "M.Àngels"];
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

}
