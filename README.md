# 20210904 Angular 12 開發實戰：進階實作篇
``` bash
$ ng --version

     _                      _                 ____ _     ___ 
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | | 
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | | 
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.4
Node: 12.22.4
Package Manager: npm 6.14.14
OS: win32 x64

Angular: 12.2.4
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.4
@angular-devkit/build-angular   12.2.4
@angular-devkit/core            12.2.4
@angular-devkit/schematics      12.2.4
@schematics/angular             12.2.4
rxjs                            6.5.5
typescript                      4.3.5
```

# 問題紀錄😯
## Input elements should have autocomplete attributes -> Chrome console 會有警告
https://stackoverflow.com/questions/54970352/input-elements-should-have-autocomplete-attributes

### Turning off Autocomplete
You have the below options for working with errors of the below format Input elements should have autocomplete attributes thrown by the console by modifying:
```
<input type="password" name="password">
```
#### Set the autocomplete attribute to off at the <form> or <input> which:
- Enforces browser to NOT store any data
- Disables caching form data in the session history
```
<input type="password" name="password" autocomplete="off">
```
Another way to prevent autofilling by the browser is:
The below suggestions are browser specific
```
<input type="password" name="password" autocomplete="new-password"> <!-- For Mozilla-->
<!-- or -->
<input type="password" name="password" autocomplete="current-password"> <!-- For Chrome-->
```
