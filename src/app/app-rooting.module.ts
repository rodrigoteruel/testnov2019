import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ItemsComponent  } from './pages/items/items.component';
import { ListsComponent } from './pages/lists/lists.component';

const routes: Routes = [
    { path: 'categories', component: CategoriesComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'items', component: ItemsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }