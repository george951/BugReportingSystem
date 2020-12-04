import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NavComponent, MainComponent, FooterComponent]
})
export class BugReportModule { }
