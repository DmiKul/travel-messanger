import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { TuiBadgedContentModule, TuiInputModule } from '@taiga-ui/kit';
import { RegistrationPageComponent } from './registration-page.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import {TuiRadioModule, TuiInputPhoneModule, TuiInputPasswordModule} from '@taiga-ui/kit';
import { HttpClientModule } from '@angular/common/http';
// import {TUI_RADIO_OPTIONS, TUI_RADIO_DEFAULT_OPTIONS} from '@taiga-ui/core';

@NgModule({
  declarations: [
    RegistrationPageComponent,
  ],
  // providers: [
  //   {
  //     provide: TUI_RADIO_OPTIONS,
  //     useValue: {
  //       ...TUI_RADIO_DEFAULT_OPTIONS,
  //       size: 'l',
  //     },
  //   },
  // ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiRadioModule,
    TuiInputPhoneModule,
    TuiInputPasswordModule,
    HttpClientModule
  ],
  exports: [
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule { }
