# ionic2 study
Studying ionic2, angular2 & typescript (a YouTube look like theme)

## Set it up

It is a ionic project, which means a node project, so start installing dependencies by npm install & restore plugins 

1. Install NPM dependencies
```shell
    $ npm install
```

2. Install ionic cordova dependencies
```shell
    $ ionic state restore
```


## Executing

Start it just like a server to run in browser
```shell
    $ ionic serve
```


## PUG

PUG is a HTML pre-compiler, which means that it have a specific semantic to generate the final HTML files.
[Check it Documentation](https://pugjs.org)

## ionic tutorial

#### files & structure

* __app.module.ts__: def the app settings (config), like: tabs (top, bottom...), hide or not titles...
* __app.component.ts__: basic the same as ng-app/app.js in ionic1 (bootstrap/launch), MyApp hass a rootPage attribute
* __app.html__: main/initial content loader. the __ion-nav__ root set the initial page, it tag can have settings like switchBack
* __theme__: @import the scss from pages folders into __./src/app/app.scss__
* [__material_icons__](http://nitro-layout.herokuapp.com/css-icons.html#icons-mdi) added
* __newPage__:
    1. Automatic by command:
        ```shell
            $ ionic g page MyPage
        ```
    1. Manually:
        1. create the folder with it name at __./src__;
        1. create it files __name.html__, __name.ts__, __name.scss__;
        1. create the class, with __export__, inside the __.ts__;
            ```typescript
               export class NameNewPage {}
            ```
        1. import it into __app.module.ts__;
            * add to: __declarations__ & to __entryComponents__
            ```typescript
               import {NameNewPage} from '../pages/name_new_page/name_new_page';
            ```
        1. import it into the __tabs.ts__:
            * create a variable referencing it: 
                ```typescript 
                    tabNRoot: any = NameNewPage; 
                ```
            * add it __tabs.html__ (here the tabNRoot change state which change property val):
                ```html
                  <ion-tab [root]="tabNRoot" tabTitle="Title" tabIcon="icon"></ion-tab>
                ```
* __Pipe and Filter Angular__:
    1. Just the same like angular1, just the directive has changed. [Angular2 Pipe Docs](https://angular.io/docs/ts/latest/api/#!?query=pipe).
        ```html
           <tag *ngFor="array | filter:arg1:arg2"></tag>
        ```


* __Binding Dynamic HTML Properties & Events__:
    1. Dynamic attr with no overwrite warnings:
        ```html
           <tag [anyProperty]="classAttrO.attrORexpression"></tag>
        ```
    1. Right Way to dynamic change/bind property (do not use [class]="expression", because it overwrite all classes)
        ```html 
            <tag [class.nameClassToShowIfExpressionOK]="obj.attrORexpression"></tag> 
        ```
    1. Dynamic Event (use "()" intead of "[]"))
        ```html
           <tag (click)="componentMethod()"></tag>
        ```
    1. Additional event datas
        ```html
           <input type="text" (keydown)="showKey($event)">
        ```
        
        ```typescript
           class AnyClass {
               showKey(event) {
                   alert(event.keyCode);    
               }
           }
        ```
    
