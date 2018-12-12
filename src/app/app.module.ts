import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { routes } from './app.router';
import { UserService } from './user.service';

import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockCompareComponent } from './stock-compare/stock-compare.component';
import { ChartViewComponent } from './chart-view/chart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    StockCompareComponent,
    ChartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartsModule,
    routes,
    FormsModule
  ],
  entryComponents: [
    ChartComponent,
  ],
  providers: [
    ApiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
