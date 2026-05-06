import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatCardModule, MatIconModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('front');

    private router = inject(Router);

    navega(rota: string) {
        this.router.navigate([rota]);
    }
}
