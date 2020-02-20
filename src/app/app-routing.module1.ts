import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component'

const routes: Routes = [
    {path: 'other', component: SecondcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }