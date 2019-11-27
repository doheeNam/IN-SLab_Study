import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrityContainerComponent } from './celebrity-container.component';
import { CelebrityModule } from "../celebrity/celebrity.module";


@NgModule({
  declarations: [CelebrityContainerComponent],
  imports: [
    CommonModule,
    CelebrityModule
  ]
})
export class CelebrityContainerModule { }
