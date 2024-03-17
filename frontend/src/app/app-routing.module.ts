import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { EventComponent } from './modules/event/event.component';
import { ExpensesComponent } from './modules/expenses/expenses.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'events', component: EventComponent
      },
      {
        path: 'expenses', component: ExpensesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
