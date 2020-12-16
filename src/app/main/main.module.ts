import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { BugformComponent } from './bugform/bugform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBugsComponent } from './edit-bugs/edit-bugs.component';




@NgModule({
  declarations: [NavComponent, ContentComponent, BugformComponent, EditBugsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  exports:[NavComponent, ContentComponent, BugformComponent, EditBugsComponent]
})
export class MainModule { }
