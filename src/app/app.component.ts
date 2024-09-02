import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApiComponent } from './get-api/get-api.component';
import { PostAPIComponent } from './post-api/post-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetApiComponent, PostAPIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crudApp';
}
