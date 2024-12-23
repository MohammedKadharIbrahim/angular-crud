import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
  
    {path:'',component:LoginComponent},
       {
            path:'dashboard',
            component:DashboardComponent,canActivate:[authGuard]
        }
    ]

