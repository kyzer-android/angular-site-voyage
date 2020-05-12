import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CardListComponent } from './card-list/card-list.component';


const routes: Routes = [{ 
  path: 'defaultPage',
  component: DefaultPageComponent},{ 
    path: 'pays/:name',
    component: CardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
