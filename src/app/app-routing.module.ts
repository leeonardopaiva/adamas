import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { UploadComponent } from './pages/upload/upload.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { LoginComponent } from './pages/login/login.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { GridComponent } from './pages/grid/grid.component';
import { VerificacaoComponent } from './pages/verificacao/verificacao.component';
import { WorkflowDetailsComponent } from './pages/workflow-details/workflow-details.component';
import { UploadViewComponent } from './pages/upload-view/upload-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'verificacao', component: VerificacaoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'grid', component: GridComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'upload-view', component: UploadViewComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'workflow-details', component: WorkflowDetailsComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }



