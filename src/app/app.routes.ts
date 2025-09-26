import { Routes } from '@angular/router';
import { EmployeeListComponent } from './features/employees/pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './features/employees/pages/employee-form/employee-form.component';

export const routes: Routes = [

  {
    path: 'employees',
    loadComponent: () =>
      import('./features/employees/pages/employee-list/employee-list.component').then(m => m.EmployeeListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./features/employees/pages/employee-form/employee-form.component').then(m => m.EmployeeFormComponent),
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  }
];
