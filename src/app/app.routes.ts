import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './Pages/singup/singup';
import {  LoginComponent } from './Pages/login/login';
import { HomepageComponent } from './Pages/homepage/homepage';
import { AdminDashboard } from './Pages/admin/admin-dashboard/admin-dashboard';
import { UserDashboard } from './Pages/users/user-dashboard/user-dashboard';
import { adminGuard } from './service/admine-guard';
import { userGuard } from './service/user-guard';
import { profile } from 'console';
import { ProfileComponent } from './Pages/admin/profile/profile';
import { OnlyAdminDashboardComponent } from './Pages/admin/onlyadmindashboard/onlyadmindashboard';
import { CategoriesComponent } from './Pages/admin/catgories/catgories';
import { AddCategoriesComponent } from './Pages/admin/add-categories/add-categories';
import { ViewQuizesComponent } from './Pages/admin/view-quizes/view-quizes';








export const routes: Routes = [
   
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  { path: 'singup', component: SingupComponent },
  { path: '', redirectTo: 'singup', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
   {
    path: 'admin-dashboard',
    component: AdminDashboard,
    canActivate: [adminGuard],
   children: [

    // 🔹 DEFAULT CHILD ROUTE
    { path: '', redirectTo: 'onlyadmindashboard', pathMatch: 'full' },

    { path: 'onlyadmindashboard', component: OnlyAdminDashboardComponent },
    { path: 'profile', component: ProfileComponent },
   { path: 'catgories', component: CategoriesComponent, },
   {
    path: 'addCategories',component: AddCategoriesComponent
   },
    {
    path: 'quizes',component: ViewQuizesComponent 
   }
  ]
  },


  {
    path:'user-dashboard',
    component: UserDashboard,
    pathMatch:'full',
    canActivate: [userGuard]

  }
];
export class AppRoutingModule {}

