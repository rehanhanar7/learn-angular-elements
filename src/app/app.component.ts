import { Component, VERSION, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  content = null;
  angularcontent = null;
  angularcontentnew = null;

  constructor(private injector: Injector) {
    const alertComponent = createCustomElement(AlertComponent, {
      injector: this.injector
    }); //make sure its provided in providers
    customElements.define('my-alert', alertComponent);

    setTimeout(() => {
      this.content = '<h1>I am rendered using innerHTML !!</h1>'; //inner html supports inbuilt html components
      const oldhtml = '<app-alert message="Rehan Dynamic Here !!"></app-alert>';
      const newhtml = '<my-alert message="Rehan Dynamic Here !!"></my-alert>';
      this.angularcontent = oldhtml; // inner html doesnt support angular components
      this.angularcontentnew = newhtml; // now it supports
    }, 1000);
  }
}
