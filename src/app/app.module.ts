import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { CardComparatorComponent } from './card-comparator/card-comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectClassComponent,
    CardComparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
