import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { GraphPaperPageComponent } from './components/graph-paper-page/graph-paper-page.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeaderBarItemComponent } from './components/header-bar/header-bar-item/header-bar-item/header-bar-item.component';
import { RouterModule, Routes } from '@angular/router';
import { TutoringServicesComponent } from './components/pages/tutoring-services/tutoring-services.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { JoinTheTeamComponent } from './components/pages/join-the-team/join-the-team.component';
import { IntakeFormComponent } from './components/form-components/intake-form/intake-form.component';
import { PaperModalComponent } from './components/modal-components/paper-modal/paper-modal.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tutoring-services', component: TutoringServicesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'contact-us' , component: ContactUsComponent},
  {path: 'join-the-team', component: JoinTheTeamComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    GraphPaperPageComponent,
    HeaderBarComponent,
    HeaderBarItemComponent,
    TutoringServicesComponent,
    HomeComponent,
    BlogComponent,
    ContactUsComponent,
    JoinTheTeamComponent,
    IntakeFormComponent,
    PaperModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,  entryComponents: [PaperModalComponent]
})
export class AppModule { }
