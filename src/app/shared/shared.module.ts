import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadDirective } from './lazy-load/lazy-load.directive';

@NgModule({
  declarations: [
    LazyLoadDirective
  ],
  exports: [
    LazyLoadDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
