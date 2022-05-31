import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFurnitureComponent } from './components/furniture-area/add-furniture/add-furniture.component';
import { FurnitureListComponent } from './components/furniture-area/furniture-list/furniture-list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'furniture-list', component: FurnitureListComponent},
  {path: 'add-furniture', component: AddFurnitureComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
