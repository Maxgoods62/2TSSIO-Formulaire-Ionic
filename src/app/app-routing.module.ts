import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'questionnaire', loadChildren: './questionnaire/questionnaire.module#QuestionnairePageModule' },
  { path: 'remerciement', loadChildren: './remerciement/remerciement.module#RemerciementPageModule' },
  { path: 'login-admin', loadChildren: './login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'page-admin', loadChildren: './page-admin/page-admin.module#PageAdminPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
