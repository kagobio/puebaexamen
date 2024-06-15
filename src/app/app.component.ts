import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-listaempleado></app-listaempleado
    ><app-form-empleado></app-form-empleado>`,
  imports: [RouterModule, ListaEmpleadoComponent, FormEmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'puebaexamen';
}
