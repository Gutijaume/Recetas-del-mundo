import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from '../../pages/register-form/register-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodContainerComponent,
    FormularioComponent,
    RegisterFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
