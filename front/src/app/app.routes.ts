import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Candidaturas } from './candidaturas/candidaturas';
import { Dashboard } from './dashboard/dashboard';
import { Vagas } from './vagas/vagas';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'vagas', component: Vagas },
    { path: 'candidaturas', component: Candidaturas },
    { path: 'dashboard', component: Dashboard },
];
