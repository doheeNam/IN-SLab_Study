import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrityComponent } from './celebrity.component';



@NgModule({
  declarations: [CelebrityComponent],
  imports: [
    CommonModule
  ],
  exports: [CelebrityComponent]
})
export class CelebrityModule { }
