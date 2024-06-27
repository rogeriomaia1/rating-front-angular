import { Component, OnInit } from '@angular/core';
import { AvaliacaoRequest } from '../../models/avaliacao-request';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliacaoService } from '../../core/services/avaliacao.service';
import { LocalStorageService } from '../../core/services/local-storage.service';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})

export class AvaliacaoComponent {
  request: AvaliacaoRequest = {
    email: '',
    score: 4 ,
    comments:'',
    contactNumber: '',
    contactTime: '',
    contactRequest: false
  };
  errorMessage: String = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: AvaliacaoService, 
    private localStorageService: LocalStorageService) { 

      this.request.email = this.localStorageService.get('email'); 
     }
  
     
  public enviarAvaliacao(): void {

    this.service.enviarAvaliacao(this.request).subscribe(
       (data) => {
        
         this.router.navigate(['selecao']);
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
      score: 4 ,
      comments:'',
      contactNumber: '',
      contactTime: '',
      contactRequest: false
    };
  }
}
