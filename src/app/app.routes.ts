import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { MonitorsComponent } from './monitors/monitors/monitors.component';

export const routes: Routes = [
    
    { path: 'actividades', component: ActivitiesComponent },
    { path: 'monitores', component: MonitorsComponent },
    { path: '', redirectTo: '/actividades', pathMatch: 'full' },
    ];
