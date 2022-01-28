import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { FormClientsComponent } from './form-clients/form-clients.component';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FattureComponent } from './fatture/fatture.component';
import { DetailFatturaComponent } from './detail-fattura/detail-fattura.component';
import { EditFatturaComponent } from './edit-fattura/edit-fattura.component';
import { ComProvTableComponent } from './com-prov-table/com-prov-table.component';
import { FormCartinaComponent } from './form-cartina/form-cartina.component';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { FooterComponent } from './footer/footer.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FormCartina2Component } from './form-cartina2/form-cartina2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientsTableComponent,
    ClientDetailComponent,
    FormClientsComponent,
    EditFormComponent,
    FattureComponent,
    DetailFatturaComponent,
    EditFatturaComponent,
    ComProvTableComponent,
    FormCartinaComponent,
    NewFatturaComponent,
    FooterComponent,
    FattureClienteComponent,
    FormCartina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
