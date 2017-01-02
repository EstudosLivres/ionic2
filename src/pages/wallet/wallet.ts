import {Component} from '@angular/core';

// Notice that because Pages are meant to be loaded dynamically, they don’t have a selector
@Component({
    // All pages have both a class, and an associated template
    selector: 'page-wallet',
    templateUrl: 'wallet.html'
})

export class Wallet {

}
