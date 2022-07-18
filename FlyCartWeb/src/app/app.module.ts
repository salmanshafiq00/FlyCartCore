import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataSourceService } from './shared/data-source.service';
import { WeightFilterPipe } from './pipes/weight-filter.pipe';
import { CatergoryNamePipe } from './pipes/catergory-name.pipe';
import { BoldElementDirective } from './directives/bold-element.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    WeightFilterPipe,
    CatergoryNamePipe,
    BoldElementDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
