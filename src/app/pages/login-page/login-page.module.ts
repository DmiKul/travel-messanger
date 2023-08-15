import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiBadgedContentModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { LoginPageComponent } from './login-page.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import {
  TUI_CHECKBOX_OPTIONS,
  TUI_CHECKBOX_DEFAULT_OPTIONS
} from '@taiga-ui/core';
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiCheckboxModule,
    TuiInputPasswordModule,
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule {}
