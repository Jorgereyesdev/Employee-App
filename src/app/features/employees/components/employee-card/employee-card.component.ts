import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../../core/models/employee.model";
import { CommonModule } from "@angular/common";
import { StatusLabelPipe } from "../../../../shared/pipes/status-label.pipe";
import { StatusEmployeePipe } from "../../../../shared/pipes/status-employee.pipe";
import { HoverHighlightDirective } from "../../../../shared/directives/hover-highlight.directive";

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule, StatusLabelPipe, StatusEmployeePipe, HoverHighlightDirective ],
  template: `
  <article class="card" [ngClass]="employee.active | statusEmployee" appHoverHighlight>
    <div class="card-top">
      <div class="avatar">{{ initials }}</div>
      <div class="meta">
        <h3>{{ employee.fullName }}</h3>
        <small>{{ employee.email }}</small>
      </div>
    </div>

    <div class="card-body">
      <p>Rol: <strong>{{ employee.role }}</strong></p>
      <p>Estado: <strong>{{ employee.active | statusLabel }}</strong></p>
    </div>

    <div class="card-actions">
      <button (click)="toggle()">{{ employee.active ? 'Desactivar' : 'Activar' }}</button>
    </div>
  </article>
  `,
  styles: [`
  .card { background: #fff; padding: 12px; border-radius: 8px;
  width: 100%: box-sizing: border-box; border: 1px solid black; background-color: #fff9c4; }

  .card-activo {
    background-color: #fff9c4;
  }

  .card-inactivo {
    background-color: #f8d7da;
  }

  .card-top {display:flex; gap: 12px; align-items:center;}

  .avatar {width: 48px; height: 48px; border-radius:50%; background:#1643d2; color:#fff; display:flex; align-items:center;
  justify-content:center; font-weight:700; }

  .meta h3 { margin:0; font-size:14px; }

  .meta small { color:#666; }

  .card-actions { margin-top:12px; display:flex; gap:8px; }

  button { background:#1976d2; color:#fff; border:none; padding:6px 10px; border-radius:6px; cursor:pointer; }
    `]
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() toggleActive = new EventEmitter<{ id: number, active: boolean }>();

  get initials() {
    return (this.employee.fullName || '').split('').map(s => s[0]).slice(0, 2).join('').toLocaleUpperCase();
  }

  toggle() {
    this.toggleActive.emit({
      id: this.employee.id, active: !this.employee.active
    });
  }
}
