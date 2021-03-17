import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, PhotoListComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
