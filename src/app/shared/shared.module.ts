import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormField, MatFormFieldModule, MatSnackBarModule,
  MatDialogModule, MatInputModule} from '@angular/material';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { AlphaCharOnlyDirective } from './directives/char-only.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    ModalBasicComponent,
    SpinnerComponent,
    AlphaCharOnlyDirective,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: [
    ModalBasicComponent,
    SpinnerComponent,
    AlphaCharOnlyDirective
  ]
})
export class SharedModule { }
