import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    videos = [
        'Video 1',
        'Video 2'
    ];

    constructor(public navCtrl: NavController) {

    }
}
