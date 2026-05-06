import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VagaService } from '../../../services/vaga.service';
import { Vaga } from '../../../models/models';
import { MatSelectModule } from '@angular/material/select';



@Component({
	selector: 'app-vaga',
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		MatSelectModule
	],
	templateUrl: './vaga.html',
	styleUrl: './vaga.css'
})
export class VagaComponent implements OnInit {

	private readonly vagaService = inject(VagaService);

	private readonly activatedRoute = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly vaga_id = this.activatedRoute.snapshot.paramMap.get('id');

	private snackBar = inject(MatSnackBar);

	novo: boolean = this.vaga_id == '0';

	faixa_salarial: any = [
		{ value: 'ATE_MIL', descricao: 'Até R$ 1.000,00' },
		{ value: 'DE_MIL_A_DOIS_MIL', descricao: 'De R$ 1.000,00 à R$ 2.000,00' },
		{ value: 'DE_DOIS_MIL_A_TRES_MIL', descricao: 'De R$ 2.000,00 à R$ 3.000,00' },
		{ value: 'ACIMA_DE_TRES_MIL', descricao: 'Acima de R$ 3.000,00' },
	];

	escolaridade_exigida: any = [
		{ value: 'ENSINO_FUNDAMENTAL', descricao: 'Ensino fundamental' },
		{ value: 'ENSINO_MEDIO', descricao: 'Ensino médio' },
		{ value: 'TECNOLOGO', descricao: 'Tecnólogo' },
		{ value: 'ENSINO_SUPERIOR', descricao: 'Ensino Superior' },
		{ value: 'POS_MBA_MESTRADO', descricao: 'Pós / MBA / Mestrado' },
		{ value: 'DOUTORADO', descricao: 'Doutorado' },
	];

	vaga: FormGroup = new FormGroup({
		id: new FormControl('', []),
		empresa: new FormControl('', [Validators.required]),
		nome: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/)]),
		faixa_salarial: new FormControl('', [Validators.required,]),
		requisitos: new FormControl('', [Validators.required,]),
		escolaridade_exigida: new FormControl('', [Validators.required]),
	});

	ngOnInit(): void {
		if (!this.novo) this.recuperaVaga();
	}


	recuperaVaga() {
		this.vagaService.pegarId(this.vaga_id).subscribe({
			next: (resultado: Vaga) => {
				this.vaga.patchValue(resultado);
			}
		})
	}

	adicionarVaga() {
		if (this.novo) {
			delete this.vaga.value['id']
			this.vagaService.salvar(this.vaga.value as any).subscribe({
				next: (resultado: Vaga) => {
					this.abrirSnackBar('Vaga adicionada com sucesso! ', 'Entendi');
					this.navega('vagas');
				}
			});
		} else {
			this.vagaService.editar(this.vaga.value as any).subscribe({
				next: (resultado: Vaga) => {
					this.abrirSnackBar('Vaga atualizado com sucesso! ', 'Entendi');
					this.navega('vaga');
				}
			});
		}
	}

	navega(parametro: string) {
		this.router.navigate([parametro]);
	}

	abrirSnackBar(mensagem: string, acao: string = '') {
		this.snackBar.open(mensagem, acao);
	}

}
