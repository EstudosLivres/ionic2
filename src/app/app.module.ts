import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {AccountPage} from '../pages/account/account';
import {TabsPage} from '../pages/tabs/tabs';
import {PostVideoPage} from '../pages/post_video/post_video';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PostVideoPage,
        AccountPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            tabsPlacement: 'top',
            platforms: {
                android: {
                    tabsPlacement: 'top',
                    tabsHighlight: true,
                    tabsLayout: 'title-hide'
                },
                ios: {
                    tabsPlacement: 'bottom'
                }
            }
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PostVideoPage,
        AccountPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
