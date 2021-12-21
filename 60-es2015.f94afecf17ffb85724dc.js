(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{KHpR:function(e,a,t){"use strict";t.r(a),t.d(a,"ObjectMarkerDocsModule",function(){return N});var r={};t.r(r),t.d(r,"default",function(){return i});var c={};t.r(c),t.d(c,"default",function(){return p});var l={};t.r(l),t.d(l,"default",function(){return d});var n={};t.r(n),t.d(n,"default",function(){return s});var o={};t.r(o),t.d(o,"default",function(){return m});var b=t("tyNb"),i='<span fd-object-marker glyph="add-favorite" title="Favorite" aria-label="Favorite Icon"></span>\n<span fd-object-marker glyph="flag" title="Flag" aria-label="Favorite Flag"></span>\n<span fd-object-marker glyph="request" title="Request" aria-label="Favorite Request"></span>\n<span fd-object-marker glyph="user-edit" title="Editable" aria-label="Favorite Editable"></span>\n<span fd-object-marker glyph="private" title="Private" aria-label="Favorite Private"></span>\n',p='<span fd-object-marker glyph="user-edit" aria-label="Edit Icon with Text" label="Edit"></span>\n<span fd-object-marker glyph="private" aria-label="Locked Icon with Text" label="Locked"></span>\n<span fd-object-marker glyph="request" aria-label="Request Icon with Text" label="Request"></span>\n',d='<a\n    fd-object-marker\n    glyph="user-edit"\n    clickable="true"\n    aria-label="Object Maker with Text Clickable"\n    label="Editable"\n></a>\n<a\n    fd-object-marker\n    [glyph]="glyph"\n    clickable="true"\n    aria-label="Object Maker with Text Clickable"\n    (click)="changeGlyph()"\n    label="Locked"\n></a>\n',s='<span fd-object-marker aria-label="Object Marker with Text" label="Draft"></span>\n<span fd-object-marker aria-label="Object Marker with Text" label="Request"></span>\n<a\n    fd-object-marker\n    clickable="true"\n    aria-label="Object Marker with only Text Clickable"\n    label="Locked"\n></a>\n<a fd-object-marker clickable="true" aria-label="Object Marker with only Text Clickable" label="Edit"></a>\n',m="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-object-marker-clickable-example',\n    templateUrl: './object-marker-clickable-example.component.html'\n})\nexport class ObjectMarkerClickableExampleComponent {\n    glyph = 'private';\n    changeGlyph(): void {\n        this.glyph = 'add-favorite';\n    }\n}\n",k=t("fXoL"),f=t("ddaM"),u=t("kt86"),j=t("X1JU"),h=t("JS8D");let x=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-example"]],decls:5,vars:0,consts:[["fd-object-marker","","glyph","add-favorite","title","Favorite","aria-label","Favorite Icon"],["fd-object-marker","","glyph","flag","title","Flag","aria-label","Favorite Flag"],["fd-object-marker","","glyph","request","title","Request","aria-label","Favorite Request"],["fd-object-marker","","glyph","user-edit","title","Editable","aria-label","Favorite Editable"],["fd-object-marker","","glyph","private","title","Private","aria-label","Favorite Private"]],template:function(e,a){1&e&&(k.Rb(0,"span",0),k.Rb(1,"span",1),k.Rb(2,"span",2),k.Rb(3,"span",3),k.Rb(4,"span",4))},directives:[h.a],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-icon-text-example"]],decls:3,vars:0,consts:[["fd-object-marker","","glyph","user-edit","aria-label","Edit Icon with Text","label","Edit"],["fd-object-marker","","glyph","private","aria-label","Locked Icon with Text","label","Locked"],["fd-object-marker","","glyph","request","aria-label","Request Icon with Text","label","Request"]],template:function(e,a){1&e&&(k.Rb(0,"span",0),k.Rb(1,"span",1),k.Rb(2,"span",2))},directives:[h.a],encapsulation:2}),e})(),g=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-text-example"]],decls:4,vars:0,consts:[["fd-object-marker","","aria-label","Object Marker with Text","label","Draft"],["fd-object-marker","","aria-label","Object Marker with Text","label","Request"],["fd-object-marker","","clickable","true","aria-label","Object Marker with only Text Clickable","label","Locked"],["fd-object-marker","","clickable","true","aria-label","Object Marker with only Text Clickable","label","Edit"]],template:function(e,a){1&e&&(k.Rb(0,"span",0),k.Rb(1,"span",1),k.Rb(2,"a",2),k.Rb(3,"a",3))},directives:[h.a],encapsulation:2}),e})();var v=t("5HkS"),R=t("Hxo2");let V=(()=>{class e{constructor(){this.glyph="private"}changeGlyph(){this.glyph="add-favorite"}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-clickable-example"]],decls:2,vars:1,consts:[["fd-object-marker","","glyph","user-edit","clickable","true","aria-label","Object Maker with Text Clickable","label","Editable"],["fd-object-marker","","clickable","true","aria-label","Object Maker with Text Clickable","label","Locked",3,"glyph","click"]],template:function(e,a){1&e&&(k.Rb(0,"a",0),k.Wb(1,"a",1),k.jc("click",function(){return a.changeGlyph()}),k.Vb()),2&e&&(k.Db(1),k.vc("glyph",a.glyph))},directives:[h.a],encapsulation:2}),e})(),w=(()=>{class e{constructor(){this.objectMarkerIconOnly=[{language:"html",code:r,fileName:"object-marker-example"}],this.objectMarkerIconandText=[{language:"html",code:c,fileName:"object-marker-example"}],this.objectMarkerText=[{language:"html",code:n,fileName:"object-marker-example"}],this.objectMarkerClickable=[{language:"html",code:l,fileName:"object-marker-clickable-example"},{language:"typescript",code:o,fileName:"object-marker-clickable-example",component:"ObjectMarkerClickableExampleComponent"}]}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-docs"]],decls:44,vars:4,consts:[["id","icon-only","componentName","object-marker"],[3,"exampleFiles"],["id","clickable-text","componentName","object-marker"],["id","icon-text","componentName","object-marker"],["id","clickable-icon-text","componentName","object-marker"]],template:function(e,a){1&e&&(k.Wb(0,"fd-docs-section-title",0),k.Vc(1," Object marker Only Icon Example\n"),k.Vb(),k.Wb(2,"description"),k.Vc(3," Standard list of icon used of the Object marker use "),k.Wb(4,"code"),k.Vc(5,"glyph"),k.Vb(),k.Vc(6," property to add icon.\n"),k.Vb(),k.Wb(7,"component-example"),k.Rb(8,"fd-object-marker-example"),k.Vb(),k.Rb(9,"code-example",1),k.Rb(10,"separator"),k.Wb(11,"fd-docs-section-title",2),k.Vc(12," Object marker Text and clickable Text\n"),k.Vb(),k.Wb(13,"description"),k.Vc(14," Standard Object marker Text and clickable use "),k.Wb(15,"code"),k.Vc(16,"clickable"),k.Vb(),k.Vc(17," boolean property to add hovering effects.\n"),k.Vb(),k.Wb(18,"component-example"),k.Rb(19,"fd-object-marker-text-example"),k.Vb(),k.Rb(20,"code-example",1),k.Rb(21,"separator"),k.Wb(22,"fd-docs-section-title",3),k.Vc(23," Object marker Icon and text readonly.\n"),k.Vb(),k.Wb(24,"description"),k.Vc(25," Standard Object marker with icon and text use "),k.Wb(26,"code"),k.Vc(27,"glyph"),k.Vb(),k.Vc(28," property to add icon. "),k.Vb(),k.Wb(29,"component-example"),k.Rb(30,"fd-object-marker-icon-text-example"),k.Vb(),k.Rb(31,"code-example",1),k.Rb(32,"separator"),k.Wb(33,"fd-docs-section-title",4),k.Vc(34," Object marker icon and text clickable.\n"),k.Vb(),k.Wb(35,"description"),k.Vc(36," Standard Object marker with icon and text with clickable use "),k.Wb(37,"code"),k.Vc(38,"clickable"),k.Vb(),k.Vc(39," boolean property to add hovering effects.\n"),k.Vb(),k.Wb(40,"component-example"),k.Rb(41,"fd-object-marker-clickable-example"),k.Vb(),k.Rb(42,"code-example",1),k.Rb(43,"separator")),2&e&&(k.Db(9),k.vc("exampleFiles",a.objectMarkerIconOnly),k.Db(11),k.vc("exampleFiles",a.objectMarkerText),k.Db(11),k.vc("exampleFiles",a.objectMarkerIconandText),k.Db(11),k.vc("exampleFiles",a.objectMarkerClickable))},directives:[f.a,u.a,j.a,x,v.a,R.a,g,y,V],encapsulation:2}),e})();var M=t("dor/"),O=t("RJTZ"),T=t("Kpas");let F=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=k.Kb({type:e,selectors:[["fd-object-marker-header"]],decls:10,vars:0,consts:[["module","ObjectMarkerModule","subPackage","object-marker"]],template:function(e,a){1&e&&(k.Wb(0,"header"),k.Vc(1,"Object Marker"),k.Vb(),k.Wb(2,"description"),k.Wb(3,"p"),k.Vc(4," Object Marker is replacing the Badges With the self-explanatory statuses Flag and Favorite are always displayed as an icon, "),k.Vb(),k.Wb(5,"p"),k.Vc(6,"Generic indication of marked object with diffrent set of icon."),k.Vb(),k.Vb(),k.Rb(7,"import",0),k.Rb(8,"fd-header-tabs"),k.Rb(9,"router-outlet"))},directives:[M.a,u.a,O.a,T.a,b.h],encapsulation:2}),e})();var W=t("jzzn"),C=t("PzQJ"),E=t("t9W5"),q=t("bdye");const I=[{path:"",component:F,children:[{path:"",component:w},{path:"api",component:W.a,data:{content:C.a.objectMarker}}]}];let N=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=k.Ob({type:e}),e.\u0275inj=k.Nb({imports:[[b.g.forChild(I),q.b,E.a],b.g]}),e})()}}]);