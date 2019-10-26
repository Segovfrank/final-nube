import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [AppComponent, LandingComponent, NavBarComponent, LoginComponent, RegisterComponent, DashboardComponent, NavDashboardComponent, TopicsComponent, ProfileComponent, AddComponent, CarouselComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule,NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
