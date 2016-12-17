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
export class BuildCloset {

	selectedShirtType: number;
	selectedShirtTypeImage: string;
	shirtTypes: any[];
	colors: any[];
	selectedColor: string;


	constructor(public navCtrl: NavController) {
		this.selectedShirtTypeImage = "../assets/img/t-shirt.png";
		this.selectedShirtType = 0;
		this.shirtTypes = [{id: 1, type: 'T-Shirt'},
			{id: 2, type: 'Classic'},
			{id: 3, type: 'Polo'},
			{id: 4, type: 'Henley'},
			{id: 5, type: 'Turtleneck'},
			{id: 6, type: 'Sweathshirt'},
			{id: 7, type: 'Sweater'}];

		this.colors = [{id: 1, hex: "#FFFFFF", name: 'White'},
			{id: 2, hex: "#F5F5DC", name: 'Beige'},
			{id: 3, hex: "#FFC0CB", name: 'Pink'},
			{id: 4, hex: "#FF0000", name: 'Red'},
			{id: 5, hex: "#FFA500", name: 'Orange'},
			{id: 6, hex: "#FFFF00", name: 'Yellow'},
			{id: 7, hex: "#008000", name: 'Green'},
			{id: 8, hex: "#008080", name: 'Teal'},
			{id: 9, hex: "#448BFC", name: 'Blue'},
			{id: 10, hex: "#800080", name: 'Purple'},
			{id: 11, hex: "#85491E", name: 'Brown'},
			{id: 12, hex: "#808080", name: 'Grey'},
			{id: 13, hex: "#000000", name: 'Black'}];


 	}

 	selectColor(color) {
 		this.selectedColor = color.hex;
 	}

  ionViewDidLoad() {
    //console.log('Hello BuildClosetPage Page');
  }

}
