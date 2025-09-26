import { Component, OnDestroy, OnInit } from "@angular/core";
import { Employee } from '../../../../core/models/employee.model';
import { Subscription } from "rxjs";
import { EmployeeService } from "../../../../core/services/employee.service";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { EmployeeCardComponent } from "../../components/employee-card/employee-card.component";


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    EmployeeCardComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  loading = true;
  private sub?: Subscription;

  constructor(private svc: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.svc.watch().subscribe(list => {
      this.employees = list;
      this.loading = false;
    });

    this.svc.loadAll().subscribe({
      next: () => {}, error: () => { this.loading = false; }
    });
  }

  onToggle(payload: {id:number, active:boolean}) {
    this.svc.toggleActive(payload.id, payload.active).subscribe();
  }


  goToForm() {
    this.router.navigate(['/employees/create']);
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
