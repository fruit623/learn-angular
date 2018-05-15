import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { StarsComponent } from './stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { TestComponent } from './test/test.component';
import {StockService} from './stock/stock.service';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import { StockFilterPipe } from './stock/stock-filter.pipe';

const routeConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'stock', component: StockManageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock/:id', component: StockFormComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    TestComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    {provide: StockService, useClass: StockService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
