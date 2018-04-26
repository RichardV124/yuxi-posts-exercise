import { Post } from './../../app/interfaces/post.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  post: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

     //para capturar el dato enviado
    this.post = this.navParams.get('currentItem');
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
