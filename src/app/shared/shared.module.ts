import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  exports: [
    LazyLoadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
