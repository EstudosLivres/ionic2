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
    1. The default Angular2 ngModel works good (notice: "()" means ngModel is an event (one-way-binding) and "[]", means it is a tag attr (the other one-way-binding)):
        ```html
           <input type="text" [(ngModel)]="componentClassAttr">
        ```
    
* Dependency Injection
    1. Sign the Service as Injectable and define it constructor method
        ```typescript
           import {Injectable} from '@angular/core';
           @Injectable()
           export class NameClassService {
               obj;
               getService() {
                   return this.obj;
               }
           }
        ```
    1. Turn it visible adding on main.ts in provider section
        ```typescript
           import {NameClassService} from './name-class.service';
           
           @NgModule({
               providers: [NameClassService]
           })
        ```
    1. Import it on a component and create the constructor
        ```typescript
             constructor(private raceService: RaceService){}
        ```
    1. add it to ngOnInit
        ```typescript
            export class Component {
               ngOnInit() {
                   this.races = this.raceService.getRaces();
               }
           }
        ```
* Http
    1. ensure to include http libs  (__main.ts__)
        ```typescript
           // HttpModule already have provider http defined
           import {HttpModule} from '@angular/http';
           @NgModule({
               import: [HttpModule]
           })
        ```
    1. tell injector about http provider (__app.component.ts__)
    1. inject the http dependency into the service (__service.ts__)
        ```typescript
           import {Injectable} from '@angular/core';
           import {CarPart} from './car-part';
           import {Http} from '@angular/http';
           import 'rxjs/add/operator/map';
    
           @Injectable()
           export class DataService {
               constructor(private http: Http){}
               getCarParts() {
                   let obervable = this.http.get(URL);
                   // response = param var name for callback function
                   // foreach response (response.json)
                   // .data = the JSON attr
                   return obervable.map(response => <CarPart[]> response.json().data);
               }   
           }
        ```
    1. Listen data returned from the request (__component.ts__)
        ```typescript
           export class Component {
               ngOnInit() {
                   // carParts = param var name for callback function
                   this.dataService.getCarParts()
                       .subscribe(carParts => this.carParts = carParts);
               }
           }
        ```
    1. Preventing async bug (expecting some var that is fetching from server)
        ```
            .. class ... {
                totalCarParts() {
                    if(Array.isArray(this.carParts)) {
                        for ...
                            sum += this.carPart...
                    }
                } 
           }
        ```
