import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { EventComponent } from '../../modules/event/event.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../modules/home/home.component';
import { ExpensesComponent } from '../../modules/expenses/expenses.component';



@NgModule({
  declarations: [
    DefaultComponent,
    EventComponent,
    HomeComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
