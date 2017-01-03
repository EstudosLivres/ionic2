# ionic2 study
Studying ionic2, angular2 & typescript


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
        1. create the class, with export, inside the __.ts__;
        1. import it into __app.module.ts__;
            * add to: __declarations__ & to __entryComponents__
        1. import it into the __tabs.ts__
            * create a variable referencing it: 
                ```typescript 
                    tabNRoot: any = NameNewPage; 
                ```
            * add it __tabs.html__:
                ```html
                  <ion-tab [root]="tabNRoot" tabTitle="Title" tabIcon="icon"></ion-tab>
                ```
