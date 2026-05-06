import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';


import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { VagaService } from '../../services/vaga.service';
import { Vaga } from '../../models/models';
// import { ModalConfirmacaoComponent } from '../modal-confirmacao/modal-confirmacao.component';

@Component({
    selector: 'app-vagas',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './vagas.html',
    styleUrl: './vagas.css',
})
export class VagasComponent implements OnInit {

    readonly vagaService = inject(VagaService);

    dialog = inject(MatDialog);

    carregando: boolean = true;

    vagas = signal<Vaga[]>([]);

    pesquisar: FormControl = new FormControl();

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.listarVagas();
        this.pesquisar.valueChanges
            .pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe((filtro) => {
                this.listarVagas(filtro);
            });
    }


    listarVagas(pesquisa: string = '') {
        this.carregando = true;
        let params: HttpParams = new HttpParams().set('nome', String(pesquisa))
        this.vagaService.listar(params).subscribe({
            next: (resultado: Vaga[]) => {
                this.vagas.set(resultado);
                this.carregando = false;
            }
        })
    }

    adicionarEditarVaga(id: number) {
        this.router.navigate(['vaga', String(id)])
    }


    deletarVaga(vaga: Vaga) {
        // let dialogRef = this.dialog.open(ModalConfirmacaoComponent, {
        //     data: {
        //         mensagem: 'Tem certeza que deseja excluir a vaga ' + vaga.nome + '?'
        //     },
        // });
        // dialogRef.afterClosed().subscribe((resultado) => {
        //     if (resultado) {
        //         this.vagaService.excluir(vaga.id).subscribe((resultado) => {
        //             this.listarVagas();
        //         })
        //     }
        // });
    }

    pegaIniciais(nome: any): string {
        let iniciais = '';
        let rgx = RegExp(/(\p{L})\p{L}+/gu);
        let initials = [...nome.matchAll(rgx)];
        iniciais = (
            (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();
        return iniciais;
    }
}
