import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JsonPipe} from '@angular/common';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { AvaliacaoComponent } from './pages/avaliacao/avaliacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AvaliacaoComponent,
    SuccessDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    FormsModule, 
    ReactiveFormsModule, 
    JsonPipe, 
    MatInputModule,  
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
