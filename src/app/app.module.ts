import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-rooting.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListsComponent } from './pages/lists/lists.component';
import { ItemsComponent } from './pages/items/items.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriesComponent,
    ListsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
