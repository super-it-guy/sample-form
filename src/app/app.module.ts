import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [ ContainerComponent, FormComponent, ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
