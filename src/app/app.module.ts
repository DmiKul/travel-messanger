import { LayoutModule } from './layout/layout.module';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserPageModule } from './pages/user-page/user-page.module';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { RegistrationPageModule } from './pages/registration-page/registration-page.module';
import {TuiThemeNightModule, TuiModeModule} from '@taiga-ui/core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    UserPageModule,
    LoginPageModule,
    RegistrationPageModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    LayoutModule,
    TuiThemeNightModule,
    TuiModeModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
