import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ShellComponent } from './shell/shell.component';

const modules = [
  MatInputModule,
  CommonModule,
  MatFormFieldModule,
  MatIconModule,
];

const components = [ShellComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
