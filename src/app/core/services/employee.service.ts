import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private api = `${environment.apiBase}/employees`;
  private employees$ = new BehaviorSubject<Employee[]>([]);
  private employeeAdded$ = new Subject<Employee>();

  constructor(private http: HttpClient) { }

  loadAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.api).pipe(
      tap(list => this.employees$.next(list))
    );
  }

  watch(): Observable<Employee[]> {
    return this.employees$.asObservable();
  }

    get employeeAdded(): Observable<Employee> {
    return this.employeeAdded$.asObservable();
  }

  notifyEmployeeAdded(employee: Employee) {
    this.employeeAdded$.next(employee);
  }

  add(payload: Omit<Employee, 'id'>): Observable<Employee> {
    return this.http.post<Employee>(this.api, payload).pipe(
      tap(newEmployee => {
        const current = this.employees$.value;
        this.employees$.next([newEmployee, ...current])
        this.notifyEmployeeAdded(newEmployee);
      })
    );
  }

  toggleActive(id: number, active: boolean): Observable<Employee> {
    return this.http.patch<Employee>(`${this.api}/${id}`, { active }).pipe(
      tap(updated => {
        const list = this.employees$.value.map(employee => employee.id === id ? updated : employee);
        this.employees$.next(list);
      })
    );
  }
}
