import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
