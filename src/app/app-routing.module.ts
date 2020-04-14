import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { EntryComponent } from './entry/entry/entry.component';


const routes: Routes = [
  {path: '', component: EntryComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
