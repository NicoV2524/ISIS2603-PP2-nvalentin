import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveListComponent } from './nave-list/nave-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NaveListComponent],
  declarations: [NaveListComponent]
})
export class NaveModule { }
