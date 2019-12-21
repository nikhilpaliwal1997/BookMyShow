import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RoutingModule } from './route';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { DataService} from '../app/data.service';
import { MoviesComponent } from './movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MoviesComponent,
   // RoutingModule
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
