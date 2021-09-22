import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safepipe'
})
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(inputdata: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(inputdata);
  }
}
