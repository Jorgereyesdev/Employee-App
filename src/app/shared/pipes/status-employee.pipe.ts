import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'statusEmployee',
  standalone: true
})
export class StatusEmployeePipe implements PipeTransform {
  transform(active: boolean): string {
    return active ? 'card-activo' : 'card-inactivo';
  }
}
