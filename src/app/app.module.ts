import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontChangeComponent } from './font-change/font-change.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorSelectComponent } from './color-select/color-select.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    FontChangeComponent,
    PetInfoComponent,
    CalculatorComponent,
    ColorSelectComponent,
    UserListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
