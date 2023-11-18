import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import{FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[HeaderComponent,SpinnerComponent,FooterComponent]
})
export class SharedModule { }
