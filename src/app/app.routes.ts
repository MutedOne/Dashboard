import { Routes } from '@angular/router';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

export const routes: Routes = [
    {
     path: 'analytics',
    component: AnalyticsComponent,
  },
  { path: '**', redirectTo: 'dashboard' }
];
