!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{d06W:function(n,i,o){"use strict";o.r(i),o.d(i,"PlatformObjectAttributeDocsModule",function(){return H});var a={};o.r(a),o.d(a,"default",function(){return A});var c={};o.r(c),o.d(c,"default",function(){return R});var r={};o.r(r),o.d(r,"default",function(){return T});var b={};o.r(b),o.d(b,"default",function(){return N});var l,u,p,s,d,f,m=o("tyNb"),h=o("jzzn"),k=o("t9W5"),j=o("IywY"),v=o("vTn9"),V=o("dbiV"),x=o("fXoL"),g=o("dor/"),w=o("kt86"),y=o("RJTZ"),W=o("Kpas"),C=((l=function t(){e(this,t)}).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=x.Kb({type:l,selectors:[["app-object-attribute-header"]],decls:18,vars:0,consts:[["module","PlatformObjectAttributeModule","subPackage","object-attribute"]],template:function(t,e){1&t&&(x.Wb(0,"header"),x.Vc(1,"Object Attribute"),x.Vb(),x.Wb(2,"description"),x.Vc(3," The Object Attribute Component is used to display text where object view is displayed such as table, object list item component. "),x.Rb(4,"br"),x.Rb(5,"br"),x.Wb(6,"h3"),x.Vc(7,"Platform specific enhancements:"),x.Vb(),x.Wb(8,"ul"),x.Wb(9,"li"),x.Vc(10,"Has build in support for text truncation."),x.Vb(),x.Wb(11,"li"),x.Vc(12,"An active state (if desired) which resembles a link that can trigger an event."),x.Vb(),x.Wb(13,"li"),x.Vc(14,"Enhanced accessibility support with screen readers"),x.Vb(),x.Vb(),x.Vb(),x.Rb(15,"import",0),x.Rb(16,"fd-header-tabs"),x.Rb(17,"router-outlet"))},directives:[g.a,w.a,y.a,W.a,m.h],encapsulation:2}),l),A='<fdp-object-attribute label="Text placed inside attribute">: Checked\n</fdp-object-attribute>\n',R='<div style="width:120px">\n    <fdp-object-attribute label="very very very very Looooooooooooooooooooooong Text">\n    </fdp-object-attribute>\n</div>\n',T='<h3>link with generic action</h3>\n<fdp-object-attribute islink="true" label="Check" linkText="Notify action" (objectAttributeclick)="linkClick()">:\n</fdp-object-attribute>\n\n\n<br>\n\n<h3>link with routing</h3>\n<fdp-object-attribute islink="true" linkText="Navigate to home" label="Check"\n  (objectAttributeclick)="navigationClick()">\n</fdp-object-attribute>\n\n<br>\n\n<h3>Disabled link</h3>\n<fdp-object-attribute islink="true" linkText="Navigate to home" disabled="true">\n</fdp-object-attribute>\n',N="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { Router } from '@angular/router';\n\n@Component({\n    selector: 'fdp-platform-object-attribute-link-example',\n    templateUrl: './platform-object-attribute-link-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class PlatformObjectAttributeLinkExampleComponent {\n\n    constructor(private router: Router) { }\n\n    navigationClick(): void {\n        this.router.navigate(['/platform/home']);\n    }\n\n    linkClick(): void {\n        alert('Generic action triggered!!!');\n    }\n}\n",O=o("ddaM"),D=o("X1JU"),P=o("dyi4"),L=((p=function t(){e(this,t)}).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=x.Kb({type:p,selectors:[["fdp-object-attribute-example"]],decls:2,vars:0,consts:[["label","Text placed inside attribute"]],template:function(t,e){1&t&&(x.Wb(0,"fdp-object-attribute",0),x.Vc(1,": Checked\n"),x.Vb())},directives:[P.a],encapsulation:2,changeDetection:0}),p),K=((u=function t(){e(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=x.Kb({type:u,selectors:[["fdp-object-attribute-truncate-example"]],decls:2,vars:0,consts:[[2,"width","120px"],["label","very very very very Looooooooooooooooooooooong Text"]],template:function(t,e){1&t&&(x.Wb(0,"div",0),x.Rb(1,"fdp-object-attribute",1),x.Vb())},directives:[P.a],encapsulation:2,changeDetection:0}),u),E=o("5HkS"),F=o("Hxo2"),J=((s=function(){function n(t){e(this,n),this.router=t}var i,o,a;return i=n,(o=[{key:"navigationClick",value:function(){this.router.navigate(["/platform/home"])}},{key:"linkClick",value:function(){alert("Generic action triggered!!!")}}])&&t(i.prototype,o),a&&t(i,a),n}()).\u0275fac=function(t){return new(t||s)(x.Qb(m.c))},s.\u0275cmp=x.Kb({type:s,selectors:[["fdp-platform-object-attribute-link-example"]],decls:12,vars:0,consts:[["islink","true","label","Check","linkText","Notify action",3,"objectAttributeclick"],["islink","true","linkText","Navigate to home","label","Check",3,"objectAttributeclick"],["islink","true","linkText","Navigate to home","disabled","true"]],template:function(t,e){1&t&&(x.Wb(0,"h3"),x.Vc(1,"link with generic action"),x.Vb(),x.Wb(2,"fdp-object-attribute",0),x.jc("objectAttributeclick",function(){return e.linkClick()}),x.Vc(3,":\n"),x.Vb(),x.Rb(4,"br"),x.Wb(5,"h3"),x.Vc(6,"link with routing"),x.Vb(),x.Wb(7,"fdp-object-attribute",1),x.jc("objectAttributeclick",function(){return e.navigationClick()}),x.Vb(),x.Rb(8,"br"),x.Wb(9,"h3"),x.Vc(10,"Disabled link"),x.Vb(),x.Rb(11,"fdp-object-attribute",2))},directives:[P.a],encapsulation:2,changeDetection:0}),s),U=[{path:"",component:C,children:[{path:"",component:(d=function t(){e(this,t),this.objectAttribute=[{language:"html",code:a,fileName:"platform-object-attribute-example"}],this.objectAttributeTruncate=[{language:"html",code:c,fileName:"platform-object-attribute-truncate-example"}],this.objectAttributeLink=[{language:"html",code:r,fileName:"platform-object-attribute-link-example"},{language:"typescript",fileName:"platform-object-attribute-link-example",code:b,component:"PlatformObjectAttributeLinkExampleComponent"}]},d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=x.Kb({type:d,selectors:[["app-object-attribute"]],decls:37,vars:3,consts:[["id","standalone","componentName","object-attribute"],[1,"code-snippet"],[3,"exampleFiles"],["id","text-truncate","componentName","object-attribute"],["id","with-link","componentName","object-attribute"]],template:function(t,e){1&t&&(x.Wb(0,"fd-docs-section-title",0),x.Vc(1," Object attribute standlone text\n"),x.Vb(),x.Wb(2,"description"),x.Vc(3," Use "),x.Wb(4,"code",1),x.Vc(5,'label="text"'),x.Vb(),x.Vc(6,",to set the object attribute as standlone text.\n"),x.Vb(),x.Wb(7,"component-example"),x.Rb(8,"fdp-object-attribute-example"),x.Vb(),x.Rb(9,"code-example",2),x.Rb(10,"separator"),x.Wb(11,"fd-docs-section-title",3),x.Vc(12," Object Attributes with long text truncation\n"),x.Vb(),x.Wb(13,"description"),x.Vc(14," By default object attribute text will be truncated when the content is more than the view port avalible. On mouseover user can view the full text in tooltip\n"),x.Vb(),x.Wb(15,"component-example"),x.Rb(16,"fdp-object-attribute-truncate-example"),x.Vb(),x.Rb(17,"code-example",2),x.Rb(18,"separator"),x.Wb(19,"fd-docs-section-title",4),x.Vc(20," Object Attributes with link option\n"),x.Vb(),x.Wb(21,"description"),x.Vc(22," Use "),x.Wb(23,"code",1),x.Vc(24,'islink="true"'),x.Vb(),x.Vc(25," along with "),x.Wb(26,"code",1),x.Vc(27,'linkedText="linktext"'),x.Vb(),x.Vc(28,". Will help to give option to bind required operation on click of link item. "),x.Rb(29,"br"),x.Wb(30,"code",1),x.Vc(31,'disabled="true"'),x.Vb(),x.Vc(32," make the link non operable.\n"),x.Vb(),x.Wb(33,"component-example"),x.Rb(34,"fdp-platform-object-attribute-link-example"),x.Vb(),x.Rb(35,"code-example",2),x.Rb(36,"separator")),2&t&&(x.Db(9),x.vc("exampleFiles",e.objectAttribute),x.Db(8),x.vc("exampleFiles",e.objectAttributeTruncate),x.Db(18),x.vc("exampleFiles",e.objectAttributeLink))},directives:[O.a,w.a,D.a,L,E.a,F.a,K,J],encapsulation:2}),d)},{path:"api",component:h.a,data:{content:j.a.objectAttribute}}]}],H=((f=function t(){e(this,t)}).\u0275fac=function(t){return new(t||f)},f.\u0275mod=x.Ob({type:f}),f.\u0275inj=x.Nb({imports:[[m.g.forChild(U),k.a,V.a,v.a],m.g]}),f)}}])}();