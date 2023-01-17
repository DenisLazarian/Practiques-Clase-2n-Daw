import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TeacherDetailComponent } from './pages/teachers/teacher-detail/teacher-detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'teachers', 
    children: [
      {path: '', component: TeachersComponent},
      {path: ':id', component: TeacherDetailComponent}
    ]
  },
  {path:'', redirectTo:'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
