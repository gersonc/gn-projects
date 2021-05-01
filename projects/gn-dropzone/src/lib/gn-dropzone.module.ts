import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnDropzoneComponent } from './gn-dropzone/gn-dropzone.component';



@NgModule({
  declarations: [GnDropzoneComponent],
  imports: [
    CommonModule
  ],
  exports: [GnDropzoneComponent]
})
export class GnDropzoneModule { }
