import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, ListaTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-tarefas';
}
