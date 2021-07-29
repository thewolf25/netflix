import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgBlack]'
})
export class BgBlackDirective {

  constructor() { }

  @HostBinding('style.background-color') backgroundColor = "rgba(0, 0, 0, 0.5)";

}
