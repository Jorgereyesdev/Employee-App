import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeeService } from "../../../../core/services/employee.service";
import { Router } from "@angular/router";
import { Employee, Role } from "../../../../core/models/employee.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})

export class EmployeeFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private svc: EmployeeService, private router: Router) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['DEV', Validators.required],
      active: [true]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: Omit<Employee, 'id'> = {
      fullName: this.form.value.fullName ?? '',
      email: this.form.value.email ?? '',
      role: this.form.value.role as Role,
      active: this.form.value.active ?? true
    };

    this.svc.add(payload).subscribe({
      next: () => this.router.navigateByUrl('/employees'),
      error: () => alert('Error al crear un empleado')
    });
  }

  cancel() {
    this.router.navigateByUrl('/employees');
  }
}
