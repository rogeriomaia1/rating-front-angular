import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelecaoService } from '../../core/services/selecao.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { AvaliacaoRequest } from '../../models/avaliacao-request';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrl: './selecao.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})

export class SelecaoComponent {
  request: AvaliacaoRequest = {
    email: '',
    score: 0,
    comments: '',
    contactNumber: '',
    contactTime: '',
    contactRequest: false,
  };
  email: string = '';
  errorMessage: String = '';


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SelecaoService, 
    private localStorageService: LocalStorageService) {  }
  
  
  public validarEmail(): void {

   this.service.validarEmail(this.email).subscribe(
      (data) => {
        this.localStorageService.set('email', this.email);
        this.router.navigate(['avaliar']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );   
  }

  public logar(): void {
    this.router.navigate(["login"]);
  }

}



