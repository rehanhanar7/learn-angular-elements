import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SafePipe } from './safe.pipe';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AlertComponent, SafePipe],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
  providers: [AlertComponent]
})
export class AppModule {}
