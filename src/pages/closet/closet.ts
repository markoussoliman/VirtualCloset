import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Closet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-closet',
  templateUrl: 'closet.html'
})
export class ClosetPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ClosetPage Page');
  }

}
