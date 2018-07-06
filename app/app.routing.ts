import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { TableComponent }   from './table/table.component';

import { newpageComponent } from './newpage/newpage.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    
    {
        path:'newpage',
        component:newpageComponent
        
    },
    {
        path:'template-driven',
        component:TemplateDrivenComponent
        
    }
    
]
