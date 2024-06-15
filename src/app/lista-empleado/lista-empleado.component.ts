import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css'],
})
export class ListaEmpleadoComponent {
  empleados: Empleado[] = [];
  nombre: string = '';

  constructor(private empleadoService: EmpleadoService) {
    this.empleadoService.getEmpleado();
    this.empleados = this.empleadoService.empleado;
  }

  addEmpleado() {
    this.empleadoService.addEmpleado({
      id: 0,
      nombre: this.nombre,
      apellido: '',
      puesto: '',
      telefono: '',
      remoto: false,
    });
    this.nombre = '';
  }

  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id);
  }

  marcaRemoto(id: number) {
    this.empleadoService.marcarRemoto(id);
  }

  desmarcaRemoto() {
    this.empleadoService.desmarcarRemoto();
  }

  updateEmpleado(id: number, empleado: Empleado) {
    this.empleadoService.updateEmpleado(id, empleado);
  }
}
