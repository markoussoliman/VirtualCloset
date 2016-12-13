import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BuildCloset page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-build-closet',
  templateUrl: 'build-closet.html'
})
export class BuildClosetPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BuildClosetPage Page');
  }

}
