import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelecaoService } from '../../core/services/buscar-produtos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrl: './selecao.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})

export class SelecaoComponent implements OnInit {
  email: string = '';


  constructor(private route: ActivatedRoute, private router: Router, private service: SelecaoService, private localStorageService: LocalStorageService) {
   
  }
  
  ngOnInit(): void {
    
  }


  public avaliar(): void {
    const parametros = {
      email: this.email
    };

    this.router.navigate(["avaliar"], { queryParams: parametros });
  }

  public logar(): void {
    this.router.navigate(["login"]);
  }

}



