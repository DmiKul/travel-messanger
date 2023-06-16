import { UserPageComponent } from './pages/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';

const routes: Routes = [
  { path: 'profile', component: UserPageComponent, title: 'Профиль' },
  { path: 'auth', component: AuthorizationPageComponent, title: 'Авторизация' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
