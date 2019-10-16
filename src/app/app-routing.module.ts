import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page_component/home/home.component';
import { CollectionComponent } from './page_component/collection/collection.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'collection', component: CollectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
