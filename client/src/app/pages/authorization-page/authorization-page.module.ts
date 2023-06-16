import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { TuiBadgedContentModule, TuiInputModule } from '@taiga-ui/kit';
import { AuthorizationPageComponent } from './authorization-page.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import {TuiCheckboxModule} from '@taiga-ui/kit';
import {TUI_CHECKBOX_OPTIONS, TUI_CHECKBOX_DEFAULT_OPTIONS} from '@taiga-ui/core';


@NgModule({
  declarations: [
    AuthorizationPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiCheckboxModule
  ],
  exports: [
    AuthorizationPageComponent
  ]
})
export class AuthorizationPageModule { }
