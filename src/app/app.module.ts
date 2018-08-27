import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphPaperPageComponent } from './components/graph-paper-page/graph-paper-page.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeaderBarItemComponent } from './components/header-bar/header-bar-item/header-bar-item/header-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphPaperPageComponent,
    HeaderBarComponent,
    HeaderBarItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
