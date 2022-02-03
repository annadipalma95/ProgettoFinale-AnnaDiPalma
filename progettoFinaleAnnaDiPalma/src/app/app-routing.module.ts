import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { ComProvTableComponent } from './com-prov-table/com-prov-table.component';
import { DetailFatturaComponent } from './detail-fattura/detail-fattura.component';
import { EditFatturaComponent } from './edit-fattura/edit-fattura.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { FormCartinaComponent } from './form-cartina/form-cartina.component';
import { FormClientsComponent } from './form-clients/form-clients.component';
import { HomeComponent } from './home/home.component';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { ComuniService } from './services/comuni.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clients',
    component: ClientsTableComponent
  },
  {
    path: 'client/:id/detail',
    component: ClientDetailComponent
  },
  {
    path: 'formClients',
    component: FormClientsComponent
  },
  {
    path: 'client/:id/edit',
    component: EditFormComponent
  },
  {
    path: 'fatture',
    component: FattureComponent
  },
  {
    path: 'crea-fattura',
    component: NewFatturaComponent
  },
  {
    path: 'fattura/:id/detail',
    component: DetailFatturaComponent
  },
  {
    path: 'fattura/:id/edit',
    component: EditFatturaComponent
  },
  {
    path: 'fatture-cliente/:id',
    component: FattureClienteComponent
  },
  {
    path: 'cartina',
    component: ComProvTableComponent
  },
  {
    path: 'aggiungi-alla-cartina',
    component: FormCartinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
