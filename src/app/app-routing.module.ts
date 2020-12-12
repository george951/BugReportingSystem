import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BugformComponent } from './main/bugform/bugform.component';
import { ContentComponent } from './main/content/content.component';
import { EditBugsComponent } from './main/edit-bugs/edit-bugs.component';



const routes: Routes = [
  {path:"bugform", component:BugformComponent},
  {path:"content", component:ContentComponent},
  {path:"edit-bugs/:id", component:EditBugsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
