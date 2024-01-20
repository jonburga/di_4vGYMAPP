import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header/header.component';
import { MonitorsComponent } from './monitors/monitors/monitors.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [CommonModule ,RouterOutlet,HeaderComponent,FooterComponent,MonitorsComponent,ActivitiesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di_4VGYM';
}
