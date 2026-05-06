import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { DashboardComponent } from './componentes/dashboard/dashboard';
import { VagasComponent } from './componentes/vagas/vagas';
import { VagaComponent } from './componentes/vagas/vaga/vaga';



export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'vagas', component: VagasComponent },
    { path: 'vaga/:id', component: VagaComponent },
    { path: 'dashboard', component: DashboardComponent },
];
