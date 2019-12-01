import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { TopicsComponent } from './topics/topics.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { PetCreatorComponent } from './pet-creator/pet-creator.component';
import { PetViewerComponent } from './pet-viewer/pet-viewer.component';


@NgModule({
  declarations: [AppComponent, LandingComponent, NavBarComponent, LoginComponent, RegisterComponent, DashboardComponent,
    NavDashboardComponent, TopicsComponent, ProfileComponent, AddComponent, CarouselComponent, SidebarComponent, 
    GraphComponent, PetCreatorComponent, PetViewerComponent],
  imports: [BrowserModule, AppRoutingModule,NgbModule, ChartsModule, FormsModule, HttpClientModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => {
        return new TranslateHttpLoader(http);
      },
      deps: [HttpClient]
    }
  })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
