import { Routes } from '@angular/router';
import { EmployeeListComponent } from './features/employees/pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './features/employees/pages/employee-form/employee-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    children: [
      {
        path: '',
        component: EmployeeListComponent
      },
      {
        path: 'create',
        component: EmployeeFormComponent
      }
    ]
  }
];
