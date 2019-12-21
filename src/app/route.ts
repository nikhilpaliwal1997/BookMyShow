import { RouterModule, Routes } from '@angular/router';
import { NgModule}  from '@angular/core';
import { AppComponent} from '../app/app.component';
import { CourseComponent} from '../app/course/course.component';
import {MoviesComponent } from '../app/movies/movies.component';


var appRoutes: Routes = [
    { path: 'crisis-center', component: MoviesComponent },
    {
      path: 'heroes',
      component: CourseComponent,
      data: { title: 'Heroes List' }
    },
    { path: 'heroes',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },
      ];
  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule

    ],
    providers:[
        //AuthGuards
    ]
})
export class RoutingModule{
    
}