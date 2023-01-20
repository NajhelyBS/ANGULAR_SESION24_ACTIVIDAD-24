import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"dialog", component:DialogComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"dashboard", redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
