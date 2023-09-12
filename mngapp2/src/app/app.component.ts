import { Component } from '@angular/core';
// Correct imports
import { Contact } from 'src/app/models/contact.model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mngapp';
}
