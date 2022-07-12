import { Component } from '@angular/core';
import {ReCaptchaV3Service} from "ng-recaptcha";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACCEM';
  public robot: boolean;
  constructor(   private recaptchaV3Service: ReCaptchaV3Service

  ) {
    this.robot = true;
    this.recaptchaV3Service.execute('')
      .subscribe((token) => {

      });
  }

}
