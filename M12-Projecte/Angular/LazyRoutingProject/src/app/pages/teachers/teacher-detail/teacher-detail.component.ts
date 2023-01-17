import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
      }
    );
  }

  ngOnInit(): void {
  }

}
