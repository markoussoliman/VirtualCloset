import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BuildCloset } from '../build-closet/build-closet'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  constructor(public navCtrl: NavController, public LoadingCtrl: LoadingController) {

  }

  buildCloset(){
  	let loader = this.LoadingCtrl.create({
  		content: "Open Your Closet & <br> Be Ready with Answers...",
  		showBackdrop: true
  	});
  	loader.present();
  	setTimeout(() => {
  		loader.dismiss();
  		this.navCtrl.setRoot(BuildCloset);
  	}, 500);
  }
}
