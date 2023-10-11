import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { VerificacaoComponent } from './pages/verificacao/verificacao.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { UploadComponent } from './pages/upload/upload.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';


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
    VerificacaoComponent,
    SuporteComponent,
    UploadComponent,
    UploadfileComponent,
    WorkflowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
