import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent} from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogComponent,
    ExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  exports: [
    DialogComponent,
    ExampleDialogComponent,
  ]
})

export class ComponentsModule { }
