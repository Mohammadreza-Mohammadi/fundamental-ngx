!function(){function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{AvBh:function(a,t,n){"use strict";n.r(t),n.d(t,"LayoutPanelDocsModule",function(){return _});var l={};n.r(l),n.d(l,"default",function(){return V});var o={};n.r(o),n.d(o,"default",function(){return D});var d={};n.r(d),n.d(d,"default",function(){return g});var c,r,b=n("tyNb"),p=n("jzzn"),u=n("PzQJ"),i=n("fXoL"),f=n("dor/"),s=n("kt86"),y=n("RJTZ"),m=n("Kpas"),h=((c=function a(){e(this,a)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=i.Kb({type:c,selectors:[["app-layout-panel-docs-header"]],decls:7,vars:0,consts:[["module","LayoutPanelModule","subPackage","layout-panel"]],template:function(e,a){1&e&&(i.Wb(0,"header"),i.Vc(1,"Layout Panel"),i.Vb(),i.Wb(2,"description"),i.Vc(3,"The Layout Panel is a layout component that serves many formatting purposes."),i.Vb(),i.Rb(4,"import",0),i.Rb(5,"fd-header-tabs"),i.Rb(6,"router-outlet"))},directives:[f.a,s.a,y.a,m.a,b.h],styles:[""]}),c),V='<fd-layout-panel>\n    <fd-layout-panel-body [bleed]="true">\n        <table fd-table>\n            <thead fd-table-header>\n                <tr fd-table-row>\n                    <th fd-table-cell *ngFor="let header of tableHeaders">\n                        {{ header }}\n                    </th>\n                </tr>\n            </thead>\n            <tbody fd-table-body>\n                <tr fd-table-row *ngFor="let row of tableData">\n                    <td fd-table-cell *ngFor="let cell of row.rowData">\n                        {{ cell }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </fd-layout-panel-body>\n</fd-layout-panel>\n',D="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-layout-panel-edge-bleed-example',\n    templateUrl: './layout-panel-edge-bleed-example.component.html'\n})\nexport class LayoutPanelEdgeBleedExampleComponent {\n    tableHeaders = ['Column Header 1', 'Column Header 2', 'Column Header 3', 'Column Header 4'];\n    tableData = [\n        {\n            rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']\n        },\n        {\n            rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']\n        }\n    ];\n}\n",g="<fd-layout-panel>\n    <fd-layout-panel-header>\n        <fd-layout-panel-head>\n            <h2 fd-layout-panel-title>Layout Panel Title</h2>\n            <fd-layout-panel-description>Layout Panel Description</fd-layout-panel-description>\n        </fd-layout-panel-head>\n        <fd-layout-panel-actions>\n            Layout Panel Actions\n        </fd-layout-panel-actions>\n    </fd-layout-panel-header>\n    <fd-layout-panel-filters>\n        Layout Panel Filters\n    </fd-layout-panel-filters>\n    <fd-layout-panel-body>\n        Layout Panel Body\n    </fd-layout-panel-body>\n    <fd-layout-panel-footer>\n        Layout Panel Footer\n    </fd-layout-panel-footer>\n</fd-layout-panel>\n",W=n("ddaM"),w=n("X1JU"),v=n("66eO"),P=n("V9xi"),L=n("PBMz"),x=n("+6gw"),F=n("VhzM"),C=n("KYRi"),H=n("kjBl"),B=n("1c/g"),R=n("/Yei"),T=((r=function a(){e(this,a)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=i.Kb({type:r,selectors:[["fd-layout-panel-example"]],decls:15,vars:0,consts:[["fd-layout-panel-title",""]],template:function(e,a){1&e&&(i.Wb(0,"fd-layout-panel"),i.Wb(1,"fd-layout-panel-header"),i.Wb(2,"fd-layout-panel-head"),i.Wb(3,"h2",0),i.Vc(4,"Layout Panel Title"),i.Vb(),i.Wb(5,"fd-layout-panel-description"),i.Vc(6,"Layout Panel Description"),i.Vb(),i.Vb(),i.Wb(7,"fd-layout-panel-actions"),i.Vc(8," Layout Panel Actions "),i.Vb(),i.Vb(),i.Wb(9,"fd-layout-panel-filters"),i.Vc(10," Layout Panel Filters "),i.Vb(),i.Wb(11,"fd-layout-panel-body"),i.Vc(12," Layout Panel Body "),i.Vb(),i.Wb(13,"fd-layout-panel-footer"),i.Vc(14," Layout Panel Footer "),i.Vb(),i.Vb())},directives:[v.a,P.a,L.a,x.a,F.a,C.a,H.a,B.a,R.a],encapsulation:2}),r),K=n("5HkS"),k=n("Hxo2"),E=n("hee+"),N=n("qrZt"),O=n("D/jN"),M=n("ofXK"),j=n("eifd"),z=n("jn3b");function J(e,a){if(1&e&&(i.Wb(0,"th",7),i.Vc(1),i.Vb()),2&e){var t=a.$implicit;i.Db(1),i.Xc(" ",t," ")}}function X(e,a){if(1&e&&(i.Wb(0,"td",7),i.Vc(1),i.Vb()),2&e){var t=a.$implicit;i.Db(1),i.Xc(" ",t," ")}}function A(e,a){if(1&e&&(i.Wb(0,"tr",3),i.Tc(1,X,2,1,"td",4),i.Vb()),2&e){var t=a.$implicit;i.Db(1),i.vc("ngForOf",t.rowData)}}var U,$,Y,Z=(($=function a(){e(this,a),this.tableHeaders=["Column Header 1","Column Header 2","Column Header 3","Column Header 4"],this.tableData=[{rowData:["Data 1","Data 2","Data 3","Data 4"]},{rowData:["Data 5","Data 6","Data 7","Data 8"]}]}).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=i.Kb({type:$,selectors:[["fd-layout-panel-edge-bleed-example"]],decls:8,vars:3,consts:[[3,"bleed"],["fd-table",""],["fd-table-header",""],["fd-table-row",""],["fd-table-cell","",4,"ngFor","ngForOf"],["fd-table-body",""],["fd-table-row","",4,"ngFor","ngForOf"],["fd-table-cell",""]],template:function(e,a){1&e&&(i.Wb(0,"fd-layout-panel"),i.Wb(1,"fd-layout-panel-body",0),i.Wb(2,"table",1),i.Wb(3,"thead",2),i.Wb(4,"tr",3),i.Tc(5,J,2,1,"th",4),i.Vb(),i.Vb(),i.Wb(6,"tbody",5),i.Tc(7,A,2,1,"tr",6),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&e&&(i.Db(1),i.vc("bleed",!0),i.Db(4),i.vc("ngForOf",a.tableHeaders),i.Db(2),i.vc("ngForOf",a.tableData))},directives:[v.a,B.a,E.a,N.a,O.a,M.n,j.a,z.a],encapsulation:2}),$),q=((U=function a(){e(this,a),this.panelBasic=[{language:"html",fileName:"panel-example",code:d}],this.tableBleed=[{language:"html",component:"LayoutPanelEdgeBleedExampleComponent",code:l,fileName:"layout-panel-edge-bleed-example",typescriptFileCode:o}]}).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=i.Kb({type:U,selectors:[["app-layout-panel"]],decls:16,vars:2,consts:[["id","basic","componentName","layout-panel"],[3,"exampleFiles"],["id","edge-bleed","componentName","layout-panel"]],template:function(e,a){1&e&&(i.Wb(0,"fd-docs-section-title",0),i.Vc(1," Basic Layout Panel Layout\n"),i.Vb(),i.Wb(2,"component-example"),i.Rb(3,"fd-layout-panel-example"),i.Vb(),i.Rb(4,"code-example",1),i.Rb(5,"separator"),i.Wb(6,"fd-docs-section-title",2),i.Vc(7," Layout Panel Edge Bleed\n"),i.Vb(),i.Wb(8,"description"),i.Vc(9," Use "),i.Wb(10,"code"),i.Vc(11,'[bleed]="true"'),i.Vb(),i.Vc(12," on the panel body to have the contents of the panel body bleed to the outer edge. This is useful for components like tables and trees.\n"),i.Vb(),i.Wb(13,"component-example"),i.Rb(14,"fd-layout-panel-edge-bleed-example"),i.Vb(),i.Rb(15,"code-example",1)),2&e&&(i.Db(4),i.vc("exampleFiles",a.panelBasic),i.Db(11),i.vc("exampleFiles",a.tableBleed))},directives:[W.a,w.a,T,K.a,k.a,s.a,Z],encapsulation:2}),U),Q=n("t9W5"),S=n("PM7K"),G=n("a4EW"),I=[{path:"",component:h,children:[{path:"",component:q},{path:"api",component:p.a,data:{content:u.a.layoutPanel}}]}],_=((Y=function a(){e(this,a)}).\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=i.Ob({type:Y}),Y.\u0275inj=i.Nb({imports:[[b.g.forChild(I),Q.a,S.a,G.b],b.g]}),Y)}}])}();