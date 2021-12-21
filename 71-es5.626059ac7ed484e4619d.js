!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{doB2:function(e,i,o){"use strict";o.r(i),o.d(i,"ScrollSpyDocsModules",function(){return oe});var c={};o.r(c),o.d(c,"default",function(){return V});var s={};o.r(s),o.d(s,"default",function(){return O});var l={};o.r(l),o.d(l,"default",function(){return w});var a={};o.r(a),o.d(a,"default",function(){return S});var r={};o.r(r),o.d(r,"default",function(){return P});var d={};o.r(d),o.d(d,"default",function(){return k});var p,m=o("tyNb"),f=o("jzzn"),h=o("t9W5"),g=o("PzQJ"),u=o("fXoL"),b=o("dor/"),y=o("kt86"),v=o("RJTZ"),x=o("Kpas"),C=((p=function e(){t(this,e)}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=u.Kb({type:p,selectors:[["app-scroll-spy-header"]],decls:13,vars:0,consts:[["module","ScrollSpyModule","subPackage","scroll-spy"]],template:function(e,n){1&e&&(u.Wb(0,"header"),u.Vc(1,"Scroll Spy"),u.Vb(),u.Wb(2,"description"),u.Vc(3," Scroll Spy is a tool "),u.Wb(4,"strong"),u.Vc(5,"directive"),u.Vb(),u.Vc(6," designed to help navigation elements determine the element currently in view of the user. It takes in an array of tags to track, and when one of those tags goes over the top scroll limit, an event is fired. "),u.Rb(7,"br"),u.Rb(8,"br"),u.Vc(9," The examples below make use of the id to determine what element is spied on, but many other approaches are also possible.\n"),u.Vb(),u.Rb(10,"import",0),u.Rb(11,"fd-header-tabs"),u.Rb(12,"router-outlet"))},directives:[b.a,y.a,v.a,x.a,m.h],styles:[""]}),p),V='<div class="header-container">\n    <div class="header-item" *ngFor="let item of items" [ngClass]="{ selected: selectedSpy === item.id }">\n        <span class="fd-scroll-spy-example-icon-class icon">\n            <fd-icon [glyph]="\'arrow-right\'"></fd-icon> </span\n        >{{ item.name }}\n    </div>\n</div>\n\n<div class="list-container" fdScrollSpy [trackedTags]="[\'div\']" (spyChange)="selectedSpy = $event.id">\n    <div class="item" *ngFor="let item of items" [id]="item.id">{{ item.name }}</div>\n</div>\n',O="import { Component, OnInit } from '@angular/core';\n\n@Component({\n    selector: 'fd-scroll-spy-example',\n    templateUrl: './scroll-spy-example.component.html',\n    styleUrls: ['./scroll-spy-example.component.scss']\n})\nexport class ScrollSpyExampleComponent implements OnInit {\n    selectedSpy = 'element-0';\n    items: any[] = [];\n\n    ngOnInit(): void {\n        this.generateItems(9);\n    }\n\n    generateItems(count: number): void {\n        for (let i = 0; i < count; ++i) {\n            this.items.push({ name: 'Element ' + i, id: 'element-' + i });\n        }\n    }\n}\n",w=":host {\n    display: flex;\n    flex-direction: row;\n    height: 190px;\n}\n\n.item {\n    height: 40px;\n    display: flex;\n    align-items: center;\n\n    &:last-child {\n        height: 220px;\n        align-items: flex-start;\n        padding-top: 10px;\n    }\n}\n\n.list-container {\n    border: 1px dashed black;\n    overflow: auto;\n    flex-grow: 1;\n}\n\n.header-container {\n    flex-direction: column;\n    display: flex;\n    width: 140px;\n    .header-item {\n        display: inline-block;\n    }\n}\n\n.icon {\n    opacity: 0;\n}\n\n.selected {\n    font-weight: bold;\n    .icon {\n        opacity: 1;\n    }\n}\n",S='<div class="header-container">\n    <div class="header-item" *ngFor="let item of items" [ngClass]="{ selected: selectedSpy === item.id }">\n        <span class="fd-scroll-spy-example-icon-class icon">\n            <fd-icon [glyph]="\'arrow-right\'"></fd-icon> </span\n        >{{ item.name }}\n    </div>\n</div>\n\n<div\n    class="list-container"\n    fdScrollSpy\n    [trackedTags]="[\'div\']"\n    [targetPercent]="0.5"\n    (spyChange)="selectedSpy = $event.id"\n>\n    <div class="item" *ngFor="let item of items" [id]="item.id">{{ item.name }}</div>\n</div>\n\n<div class="middle-marker-container">\n    <div class="marker"></div>\n</div>\n',P="import { Component, OnInit } from '@angular/core';\n\n@Component({\n    selector: 'fd-scroll-spy-custom-example',\n    templateUrl: './scroll-spy-custom-example.component.html',\n    styleUrls: ['./scroll-spy-custom-example.component.scss']\n})\nexport class ScrollSpyCustomExampleComponent implements OnInit {\n    selectedSpy = 'element-2';\n    items: any[] = [];\n\n    ngOnInit(): void {\n        this.generateItems(9);\n    }\n\n    generateItems(count: number): void {\n        for (let i = 0; i < count; ++i) {\n            this.items.push({ name: 'Element ' + i, id: 'element-' + i });\n        }\n    }\n}\n",k=":host {\n    display: flex;\n    flex-direction: row;\n    height: 190px;\n    position: relative;\n}\n\n.item {\n    height: 40px;\n    display: flex;\n    align-items: center;\n\n    &:last-child {\n        height: 220px;\n        align-items: flex-start;\n        padding-top: 10px;\n    }\n}\n\n.list-container {\n    border: 1px dashed black;\n    overflow: auto;\n    flex-grow: 1;\n}\n\n.header-container {\n    flex-direction: column;\n    display: flex;\n    width: 140px;\n    .header-item {\n        display: inline-block;\n    }\n}\n\n.middle-marker-container {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    height: 0;\n    width: calc(100% - 140px);\n    .marker {\n        height: 1px;\n        border: 0.5px dashed black;\n    }\n}\n\n.icon {\n    opacity: 0;\n}\n\n.selected {\n    font-weight: bold;\n    .icon {\n        opacity: 1;\n    }\n}\n",W=o("ddaM"),M=o("X1JU"),_=o("ofXK"),F=o("KNnV"),D=o("ysIh"),T=function(e){return{selected:e}};function I(e,n){if(1&e&&(u.Wb(0,"div",4),u.Wb(1,"span",5),u.Rb(2,"fd-icon",6),u.Vb(),u.Vc(3),u.Vb()),2&e){var t=n.$implicit,i=u.nc();u.vc("ngClass",u.Ac(3,T,i.selectedSpy===t.id)),u.Db(2),u.vc("glyph","arrow-right"),u.Db(1),u.Xc("",t.name," ")}}function R(e,n){if(1&e&&(u.Wb(0,"div",7),u.Vc(1),u.Vb()),2&e){var t=n.$implicit;u.vc("id",t.id),u.Db(1),u.Wc(t.name)}}var E,N=function(){return["div"]},K=((E=function(){function e(){t(this,e),this.selectedSpy="element-0",this.items=[]}return n(e,[{key:"ngOnInit",value:function(){this.generateItems(9)}},{key:"generateItems",value:function(e){for(var n=0;n<e;++n)this.items.push({name:"Element "+n,id:"element-"+n})}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=u.Kb({type:E,selectors:[["fd-scroll-spy-example"]],decls:4,vars:4,consts:[[1,"header-container"],["class","header-item",3,"ngClass",4,"ngFor","ngForOf"],["fdScrollSpy","",1,"list-container",3,"trackedTags","spyChange"],["class","item",3,"id",4,"ngFor","ngForOf"],[1,"header-item",3,"ngClass"],[1,"fd-scroll-spy-example-icon-class","icon"],[3,"glyph"],[1,"item",3,"id"]],template:function(e,n){1&e&&(u.Wb(0,"div",0),u.Tc(1,I,4,5,"div",1),u.Vb(),u.Wb(2,"div",2),u.jc("spyChange",function(e){return n.selectedSpy=e.id}),u.Tc(3,R,2,2,"div",3),u.Vb()),2&e&&(u.Db(1),u.vc("ngForOf",n.items),u.Db(1),u.vc("trackedTags",u.zc(3,N)),u.Db(1),u.vc("ngForOf",n.items))},directives:[_.n,F.a,_.m,D.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;height:190px}.item[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center}.item[_ngcontent-%COMP%]:last-child{height:220px;align-items:flex-start;padding-top:10px}.list-container[_ngcontent-%COMP%]{border:1px dashed #000;overflow:auto;flex-grow:1}.header-container[_ngcontent-%COMP%]{flex-direction:column;display:flex;width:140px}.header-container[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]{display:inline-block}.icon[_ngcontent-%COMP%]{opacity:0}.selected[_ngcontent-%COMP%]{font-weight:700}.selected[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:1}"]}),E),$=o("5HkS"),j=o("Hxo2"),z=function(e){return{selected:e}};function X(e,n){if(1&e&&(u.Wb(0,"div",6),u.Wb(1,"span",7),u.Rb(2,"fd-icon",8),u.Vb(),u.Vc(3),u.Vb()),2&e){var t=n.$implicit,i=u.nc();u.vc("ngClass",u.Ac(3,z,i.selectedSpy===t.id)),u.Db(2),u.vc("glyph","arrow-right"),u.Db(1),u.Xc("",t.name," ")}}function J(e,n){if(1&e&&(u.Wb(0,"div",9),u.Vc(1),u.Vb()),2&e){var t=n.$implicit;u.vc("id",t.id),u.Db(1),u.Wc(t.name)}}var U,A=function(){return["div"]},H=((U=function(){function e(){t(this,e),this.selectedSpy="element-2",this.items=[]}return n(e,[{key:"ngOnInit",value:function(){this.generateItems(9)}},{key:"generateItems",value:function(e){for(var n=0;n<e;++n)this.items.push({name:"Element "+n,id:"element-"+n})}}]),e}()).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=u.Kb({type:U,selectors:[["fd-scroll-spy-custom-example"]],decls:6,vars:5,consts:[[1,"header-container"],["class","header-item",3,"ngClass",4,"ngFor","ngForOf"],["fdScrollSpy","",1,"list-container",3,"trackedTags","targetPercent","spyChange"],["class","item",3,"id",4,"ngFor","ngForOf"],[1,"middle-marker-container"],[1,"marker"],[1,"header-item",3,"ngClass"],[1,"fd-scroll-spy-example-icon-class","icon"],[3,"glyph"],[1,"item",3,"id"]],template:function(e,n){1&e&&(u.Wb(0,"div",0),u.Tc(1,X,4,5,"div",1),u.Vb(),u.Wb(2,"div",2),u.jc("spyChange",function(e){return n.selectedSpy=e.id}),u.Tc(3,J,2,2,"div",3),u.Vb(),u.Wb(4,"div",4),u.Rb(5,"div",5),u.Vb()),2&e&&(u.Db(1),u.vc("ngForOf",n.items),u.Db(1),u.vc("trackedTags",u.zc(4,A))("targetPercent",.5),u.Db(1),u.vc("ngForOf",n.items))},directives:[_.n,F.a,_.m,D.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;height:190px;position:relative}.item[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center}.item[_ngcontent-%COMP%]:last-child{height:220px;align-items:flex-start;padding-top:10px}.list-container[_ngcontent-%COMP%]{border:1px dashed #000;overflow:auto;flex-grow:1}.header-container[_ngcontent-%COMP%]{flex-direction:column;display:flex;width:140px}.header-container[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]{display:inline-block}.middle-marker-container[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;height:0;width:calc(100% - 140px)}.middle-marker-container[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]{height:1px;border:.5px dashed #000}.icon[_ngcontent-%COMP%]{opacity:0}.selected[_ngcontent-%COMP%]{font-weight:700}.selected[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:1}"]}),U),B=function(e){return{selected:e}};function L(e,n){if(1&e&&(u.Wb(0,"div",4),u.Wb(1,"span",5),u.Rb(2,"fd-icon",6),u.Vb(),u.Vc(3),u.Vb()),2&e){var t=n.$implicit,i=u.nc();u.vc("ngClass",u.Ac(3,B,i.selectedSpy===t.id)),u.Db(2),u.vc("glyph","arrow-right"),u.Db(1),u.Xc("",t.name," ")}}function Q(e,n){if(1&e&&(u.Wb(0,"div",7),u.Vc(1),u.Vb()),2&e){var t=n.$implicit;u.vc("id",t.id),u.Db(1),u.Wc(t.name)}}var Z,q,G,Y=function(){return["div"]},ee=((q=function(){function e(){t(this,e),this.selectedSpy="element-2",this.items=[]}return n(e,[{key:"ngOnInit",value:function(){this.generateItems(9)}},{key:"generateItems",value:function(e){for(var n=0;n<e;++n)this.items.push({name:"Element "+n,id:"element-"+n})}}]),e}()).\u0275fac=function(e){return new(e||q)},q.\u0275cmp=u.Kb({type:q,selectors:[["fd-scroll-spy-offset-example"]],decls:4,vars:5,consts:[[1,"header-container"],["class","header-item",3,"ngClass",4,"ngFor","ngForOf"],["fdScrollSpy","",1,"list-container",3,"trackedTags","targetOffset","spyChange"],["class","item",3,"id",4,"ngFor","ngForOf"],[1,"header-item",3,"ngClass"],[1,"fd-scroll-spy-example-icon-class","icon"],[3,"glyph"],[1,"item",3,"id"]],template:function(e,n){1&e&&(u.Wb(0,"div",0),u.Tc(1,L,4,5,"div",1),u.Vb(),u.Wb(2,"div",2),u.jc("spyChange",function(e){return n.selectedSpy=e.id}),u.Tc(3,Q,2,2,"div",3),u.Vb()),2&e&&(u.Db(1),u.vc("ngForOf",n.items),u.Db(1),u.vc("trackedTags",u.zc(4,Y))("targetOffset",100),u.Db(1),u.vc("ngForOf",n.items))},directives:[_.n,F.a,_.m,D.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;height:190px;position:relative}.item[_ngcontent-%COMP%]{height:40px;display:flex;align-items:center}.item[_ngcontent-%COMP%]:last-child{height:220px;align-items:flex-start;padding-top:10px}.list-container[_ngcontent-%COMP%]{border:1px dashed #000;overflow:auto;flex-grow:1}.header-container[_ngcontent-%COMP%]{flex-direction:column;display:flex;width:140px}.header-container[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]{display:inline-block}.icon[_ngcontent-%COMP%]{opacity:0}.selected[_ngcontent-%COMP%]{font-weight:700}.selected[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:1}"]}),q),ne=((Z=function e(){t(this,e),this.scrollSpy=[{language:"html",code:c,fileName:"scroll-spy-example"},{language:"typescript",component:"ScrollSpyExampleComponent",code:s,fileName:"scroll-spy-example",scssFileCode:l}],this.scrollSpyCustom=[{language:"html",code:a,fileName:"scroll-spy-custom-example",scssFileCode:d},{language:"typescript",component:"ScrollSpyCustomExampleComponent",code:r,fileName:"scroll-spy-custom-example"}]}).\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=u.Kb({type:Z,selectors:[["app-scroll-spy-docs"]],decls:46,vars:3,consts:[["id","basic","componentName","scroll-spy"],[3,"exampleFiles"],["id","custom-detection-threshold","componentName","scroll-spy"],["id","custom-offset","componentName","scroll-spy"]],template:function(e,n){1&e&&(u.Wb(0,"fd-docs-section-title",0),u.Vc(1," Scroll Spy Example\n"),u.Vb(),u.Wb(2,"description"),u.Vc(3," This example does not modify the "),u.Wb(4,"code"),u.Vc(5,"fireEmpty"),u.Vb(),u.Vc(6," input, so the navigation will always have an arrow. To have the arrow not display if a user scrolls to the absolute top or bottom, set "),u.Wb(7,"code"),u.Vc(8,"fireEmpty"),u.Vb(),u.Vc(9," to true.\n"),u.Vb(),u.Wb(10,"component-example"),u.Rb(11,"fd-scroll-spy-example"),u.Vb(),u.Rb(12,"code-example",1),u.Rb(13,"separator"),u.Wb(14,"fd-docs-section-title",2),u.Vc(15," Custom Detection Threshold\n"),u.Vb(),u.Wb(16,"description"),u.Vc(17," The "),u.Wb(18,"code"),u.Vc(19,"targetPercent"),u.Vb(),u.Vc(20," property allows you to control at what location in the container the event is fired. For example, a value of "),u.Wb(21,"code"),u.Vc(22,"0.5"),u.Vb(),u.Vc(23," would fire the events in the middle of the container, "),u.Wb(24,"code"),u.Vc(25,"0"),u.Vb(),u.Vc(26," for the top and "),u.Wb(27,"code"),u.Vc(28,"1"),u.Vb(),u.Vc(29," for the bottom.\n"),u.Vb(),u.Wb(30,"component-example"),u.Rb(31,"fd-scroll-spy-custom-example"),u.Vb(),u.Rb(32,"code-example",1),u.Wb(33,"fd-docs-section-title",3),u.Vc(34," Custom Offset Detection Threshold\n"),u.Vb(),u.Wb(35,"description"),u.Vc(36," The "),u.Wb(37,"code"),u.Vc(38,"targetOffset"),u.Vb(),u.Vc(39," property allows you to add the offset to the detection. The value is measured in pixels, so for example if there is "),u.Wb(40,"code"),u.Vc(41,'[targetOffset]="100"'),u.Vb(),u.Vc(42,", the event will be fired for element, that is 100px below.\n"),u.Vb(),u.Wb(43,"component-example"),u.Rb(44,"fd-scroll-spy-offset-example"),u.Vb(),u.Rb(45,"code-example",1)),2&e&&(u.Db(12),u.vc("exampleFiles",n.scrollSpy),u.Db(20),u.vc("exampleFiles",n.scrollSpyCustom),u.Db(13),u.vc("exampleFiles",n.scrollSpyCustom))},directives:[W.a,y.a,M.a,K,$.a,j.a,H,ee],styles:[""]}),Z),te=o("PoAC"),ie=[{path:"",component:C,children:[{path:"",component:ne},{path:"api",component:f.a,data:{content:g.a.scrollSpy}}]}],oe=((G=function e(){t(this,e)}).\u0275fac=function(e){return new(e||G)},G.\u0275mod=u.Ob({type:G}),G.\u0275inj=u.Nb({imports:[[m.g.forChild(ie),h.a,te.a],m.g]}),G)}}])}();