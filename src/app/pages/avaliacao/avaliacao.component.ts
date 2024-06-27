import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvaliacaoRequest } from '../../models/avaliacao-request';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoService } from '../../core/services/avaliacao.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { SuccessDialogComponent } from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})

export class AvaliacaoComponent {
  request: AvaliacaoRequest = {
    email: '',
    score: 4,
    comments: '',
    contactNumber: '',
    contactTime: '',
    contactRequest: false
  };
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AvaliacaoService,
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {
    this.request.email = this.localStorageService.get('email');
  }

  public enviarAvaliacao(): void {

    if (this.request.score <= 2) {
      if (!this.request.contactNumber) {

        this.errorMessage = 'Celular para contato é obrigatório.';
        return;
      }

      if (!this.request.contactTime) {
        this.errorMessage = 'Horário para contato é obrigatório.';
        return;
      }
    }

    this.service.enviarAvaliacao(this.request).subscribe(
      (data) => {
        this.openSuccessDialog('Sua avaliação foi enviada com sucesso!');
      },
      (error) => {
        this.errorMessage = error;
      }
    );

    this.limparCampos();
  }

  limparCampos() {
    this.request = {
      email: '',
      score: 4,
      comments: '',
      contactNumber: '',
      contactTime: '',
      contactRequest: false
    };
  }

  voltar() {
    this.router.navigate(['selecao']);
  }

  public verificaScore(): void {

    if (this.request.score <= 2) {
      this.request.contactRequest = true;

    } else {
      this.request.contactRequest = false;
      this.request.contactNumber = '';
      this.request.contactTime = '';
    }
  }

  openSuccessDialog(message: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['selecao']);
    });
  }
}
