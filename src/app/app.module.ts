import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { UploadComponent } from './pages/upload/upload.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { ButtonFloatingComponent } from './components/button-floating/button-floating.component';
import { HeadersuporteComponent } from './components/headersuporte/headersuporte.component';
import { VerificationComponent } from './components/verification/verification.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CardItensComponent } from './components/card-itens/card-itens.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { GridComponent } from './pages/grid/grid.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { ShareiconComponent } from './components/shared/buttons/shareicon/shareicon.component';
import { Router } from '@angular/router';
import { ModalComponent } from './components/shared/buttons/modal/modal.component';
import { FlagsComponent } from './components/shared/buttons/flags/flags.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CadastroComponent,
    HomeComponent,
    ContentComponent,
    SidebarComponent,
    LoginComponent,
    SuporteComponent,
    UploadComponent,
    UploadfileComponent,
    WorkflowComponent,
    ButtonFloatingComponent,
    HeadersuporteComponent,
    VerificationComponent,
    FormLoginComponent,
    ListagemComponent,
    CardItensComponent,
    FiltroComponent,
    GridComponent,
    GridviewComponent,
    ShareiconComponent,
    ModalComponent,
    FlagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

