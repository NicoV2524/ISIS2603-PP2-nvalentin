import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveListComponent } from './nave-list/nave-list.component';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NaveListComponent],
  declarations: [NaveListComponent,NaveDetailComponent]
})
export class NaveModule { }
