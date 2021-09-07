import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavitemsComponent } from './navitems/navitems.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavitemsComponent,
    AboutComponent,
    DashboardComponent,
    TransactionsComponent,
    TransferComponent
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
    {
      path:'login', component:LoginComponent
    },
    {
      path:'',component:AboutComponent
    },
    {
      path:'dashboard',component:DashboardComponent
    },
    {
      path:'transactions',component:TransactionsComponent
    },
    {
      path:'transfer',component:TransferComponent
    },
  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
