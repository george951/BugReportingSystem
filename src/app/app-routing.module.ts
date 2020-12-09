import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BugformComponent } from './main/bugform/bugform.component';
import { ContentComponent } from './main/content/content.component';
import { PutBugsComponent } from './main/put-bugs/put-bugs.component';

const routes: Routes = [
  {path:"bugform", component:BugformComponent},
  {path:"content", component:ContentComponent},
  {path:"putBugs", component:PutBugsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
