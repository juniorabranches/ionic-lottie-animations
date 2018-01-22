import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lottieConfig:any;
  constructor(public navCtrl: NavController) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
      path: 'assets/register_successful.json',
      autoplay: true,
      loop: true
    }
  }

}
