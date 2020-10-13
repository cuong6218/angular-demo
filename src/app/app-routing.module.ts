import { PetInfoComponent } from './pet-info/pet-info.component';
import { FontChangeComponent } from './font-change/font-change.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ColorSelectComponent } from './color-select/color-select.component';
const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'users', component: UserListComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: 'font-change', component: FontChangeComponent },
  { path: 'pet-info', component: PetInfoComponent },
  { path: 'color-select', component: ColorSelectComponent }
  // {path: 'users/user-add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
