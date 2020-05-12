import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardPostComponent } from './card-post/card-post.component';
import { MenuEnteteComponent } from './menu-entete/menu-entete.component';
import { LiensService } from './services/liens.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    CardListComponent,
    CardPostComponent,
    MenuEnteteComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
