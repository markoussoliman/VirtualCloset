import { Component } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';


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

	selectedShirtTypeImage: string = "../assets/img/default.jpg";
	shirtTypes: any[];
	colors: any[];
	selectedColor: string;
	selectedShirtTypeObject: any;
	addedItem: string = '';

	mySlideOptions = {
	    loop: true
  	};

	constructor(public navCtrl: NavController) {
		this.shirtTypes = [{id: 1, type: 'T-Shirt', image: "../assets/img/t-shirt.png"},
			{id: 2, type: 'Classic', image: "../assets/img/classicShirt.png"},
			{id: 3, type: 'Polo', image: "../assets/img/polo.png"},
			{id: 4, type: 'Henley', image: "../assets/img/t-shirt.png"},
			{id: 5, type: 'Turtleneck', image: "../assets/img/turtleneck.png"},
			{id: 6, type: 'Sweathshirt', image: "../assets/img/sweatshirt.png"},
			{id: 7, type: 'Sweater', image: "../assets/img/sweater.png"}];

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

 	selectShirtType(shirtType){
 		this.selectedShirtTypeImage = shirtType.image;
 	}

 	addItems(quantity, color, type){
 		this.addedItem = this.addedItem + 
 			'<div>' +
 			'<img class="image" src="' + type + '" style="background-color: ' + color + '" />' +
 			'<text>' + quantity + '</text>' +  
 			'</div>';
 	}

  ionViewDidLoad() {
    //console.log('Hello BuildClosetPage Page');
  }

}
