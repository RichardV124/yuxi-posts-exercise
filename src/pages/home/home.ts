import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../app/interfaces/post.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaPosts: Observable<Post[]>;

  constructor(public navCtrl: NavController,private servicio: PostProvider) {

      this.listaPosts= servicio.getPost();

  }

  goToSecondPage(item):void{
    this.navCtrl.push('SecondPage',{currentItem: item})
    
    

    //Para cambiar la pagina principal y que no se pueda retroceder
    //this.navCtrl.setRoot('SecondPage');

    //Volver a la pagina anterior, siempre y cuando exista un stack de navegacion
    //this.navCtrl.pop();

    //para capturar el dato enviado
    //this.navParams.get('currentItem');
  }

}
