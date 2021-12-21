!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function t(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{iNd6:function(n,l,o){"use strict";o.r(l),o.d(l,"FlexibleColumnLayoutDocsModule",function(){return pe});var i={};o.r(i),o.d(i,"default",function(){return f});var a={};o.r(a),o.d(a,"default",function(){return h});var c={};o.r(c),o.d(c,"default",function(){return y});var u={};o.r(u),o.d(u,"default",function(){return x});var s={};o.r(s),o.d(s,"default",function(){return g});var r={};o.r(r),o.d(r,"default",function(){return v});var d=o("tyNb"),m=o("t9W5"),p=o("jzzn"),b=o("PzQJ"),f='<button fd-button (click)="enterFullscreenExample()">Click to open full screen</button>\n\n<div cdkScrollable class="docs-fcl-example-overlay" #overlay>\n    <ng-container *ngIf="fullscreen">\n        <div class="docs-fcl-example-overlay-content">\n            <div class="docs-fcl-example-button">\n                <button fd-button (click)="exitFullscreenExample($event)">Exit Example</button>\n            </div>\n            \n            \x3c!-- Flexible Column Layout --\x3e\n            <fd-flexible-column-layout [(layout)]="localLayout">\n                <ng-template #startColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>Start Column</h2>\n                        <div>\n                            <button class="fd-button" (click)="changeLayout(\'TwoColumnsStartExpanded\')">\n                                Open Column 2\n                            </button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #midColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>Mid Column</h2>\n                        <div>\n                            <button class="fd-button" (click)="changeLayout(\'ThreeColumnsMidExpanded\')">\n                                Open Column 3\n                            </button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #endColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>End Column</h2>\n                        <div>\n                            <button \n                                *ngIf="localLayout !== \'OneColumnEndFullScreen\'"\n                                class="fd-button" \n                                (click)="changeLayout(\'OneColumnEndFullScreen\')">Expand Column 3</button>\n                            <button \n                                *ngIf="localLayout !== \'OneColumnEndFullScreen\'"\n                                class="fd-button" \n                                (click)="changeLayout(\'TwoColumnsMidExpanded\')">Close Column 3</button>\n                            <button \n                                class="fd-button" \n                                *ngIf="localLayout === \'OneColumnEndFullScreen\'"\n                                (click)="changeLayout(\'ThreeColumnsMidExpanded\')">Exit Full Screen Column 3</button>\n                        </div>\n                    </div>\n                </ng-template>\n            </fd-flexible-column-layout>\n        </div>\n    </ng-container>\n</div>\n  ',h="import { Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n    selector: 'fd-flexible-column-layout-example',\n    templateUrl: './flexible-column-layout-example.component.html',\n    styleUrls: ['flexible-column-layout-example.component.scss']\n})\nexport class FlexibleColumnLayoutExampleComponent {\n    /**\n     * documentation related property\n     * provides access to the HTML element with \"overlay\" reference\n     */\n    @ViewChild('overlay')\n    overlay: ElementRef<HTMLElement>;\n\n    /**\n     * documentation related property\n     * specifies if the doc example is rendered in fullscreen or not\n     */\n    fullscreen = false;\n\n    /**\n     * documentation related property\n     * sets the initial layout of the component to 'OneColumnStartFullScreen'\n     * sets a new layout for the component \n     */\n    localLayout = 'OneColumnStartFullScreen';\n\n    /**\n     * this function is reacting to events (button clicks) and \n     * updates the local property which sets a new layout for the component.\n     * Available values for the layouts include:\n     * 'OneColumnStartFullScreen' | 'OneColumnMidFullScreen' | 'OneColumnEndFullScreen' |\n     * 'TwoColumnsStartExpanded' | 'TwoColumnsMidExpanded' | 'TwoColumnsEndExpanded' | \n     * 'ThreeColumnsMidExpanded' | 'ThreeColumnsEndExpanded' | 'ThreeColumnsStartMinimized' | \n     * 'ThreeColumnsEndMinimized';\n     */\n    changeLayout(newValue: string): void {\n        this.localLayout = newValue;\n    }\n\n    /**\n     * documentation related function\n     * opens the example in full screen\n     */\n    enterFullscreenExample(): void {\n        this.fullscreen = true;\n        this.overlay.nativeElement.style.width = '100%';\n    }\n    \n    /**\n     * documentation related function\n     * exits the full screen mode of the example\n     */\n    exitFullscreenExample(event: Event): void {\n        event.stopPropagation();\n        this.fullscreen = false;\n        this.overlay.nativeElement.style.width = '0%';\n    }\n}\n",y=".docs-fcl-example-overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    background-color: rgb(255, 255, 255);\n    overflow-x: hidden;\n}\n\n.docs-fcl-example-overlay-content {\n    position: relative;\n    width: 100%;\n}\n\n.docs-fcl-example-button {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 2rem;\n    background: #394a5d;\n}\n\n.docs-fcl-example-section {\n    height: 100vh;\n\n    h2 {\n        font-size: 30px;\n        text-align: center;\n    }\n\n    div {\n        display: flex;\n        justify-content: space-around;\n        margin: 20px;\n    }\n}\n",x='<button fd-button (click)="enterFullscreenExample()">Click to open full screen</button>\n\n<div cdkScrollable class="docs-fcl-example-overlay" #overlay>\n    <ng-container *ngIf="fullscreen">\n        <div class="docs-fcl-example-overlay-content">\n            <div class="docs-fcl-example-button">\n                <button fd-button (click)="exitFullscreenExample($event)">Exit Example</button>\n            </div>\n            \n            \x3c!-- Flexible Column Layout --\x3e\n            <fd-flexible-column-layout [(layout)]="localLayout">\n                <ng-template #startColumn>\n                    <div class="docs-fcl-example-section">\n                        <h2>Start Column</h2>\n                        <div>\n                            <button class="fd-button" (click)="changeLayout(\'TwoColumnsMidExpanded\')">\n                                Open Column 2\n                            </button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template #midColumn>\n                    <fd-dynamic-page [autoResponsive]="true" ariaLabel="Example Dynamic Page">\n                        <fd-dynamic-page-header\n                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">\n                            <fd-dynamic-page-layout-actions>\n                                <fd-toolbar fdType="transparent" [clearBorder]="true">\n                                    <button\n                                        *ngIf="showMidColumnControls"\n                                        fd-button\n                                        fdType="transparent"\n                                        [attr.aria-label]="isFullScreen ? \'Exit Fullscreen\': \'Expand Fullscreen\'"\n                                        (click)="isFullScreen ? changeLayout(\'TwoColumnsMidExpanded\') : changeLayout(\'OneColumnMidFullScreen\')"\n                                        [title]="isFullScreen ? \'Exit Fullscreen\': \'Expand Fullscreen\'">\n                                        <i [ngClass]="isFullScreen ? \'sap-icon--exitfullscreen\' : \'sap-icon--resize\'"></i>\n                                    </button>\n                                    <button\n                                        *ngIf="showMidColumnControls"\n                                        fd-button\n                                        fdType="transparent"\n                                        aria-label="Close"\n                                        (click)="changeLayout(\'OneColumnStartFullScreen\')"\n                                        title="Close">\n                                        <i class="sap-icon--decline"></i>\n                                    </button>\n                                </fd-toolbar>\n                            </fd-dynamic-page-layout-actions>\n                        </fd-dynamic-page-header>\n                        <fd-dynamic-page-subheader\n                            [collapsible]="true"\n                            [pinnable]="true"\n                            [collapsed]="false">\n                            <span>\n                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto\n                                perspiciatis, delectus necessitatibus incidunt numquam asperiores tenetur iure. Cum consequuntur\n                                impedit repellendus esse, facere autem optio consequatur nobis?\n                            </span>\n                        </fd-dynamic-page-subheader>\n                        <fd-dynamic-page-content>\n                            <div class="fd-dynamic-page-section-example" style="display: flex; align-items: center; justify-content: center;">\n                                <button class="fd-button" (click)="changeLayout(\'ThreeColumnsMidExpanded\')">\n                                    Open Column 3\n                                </button>\n                            </div>\n                            <div class="fd-dynamic-page-section-example">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                                sunt in culpa qui officia deserunt mollit anim id est laborum.\n                            </div>\n                        </fd-dynamic-page-content>\n                    </fd-dynamic-page>\n                </ng-template>\n                <ng-template #endColumn>\n                    <fd-dynamic-page [autoResponsive]="true" ariaLabel="Example Dynamic Page">\n                        <fd-dynamic-page-header title="End Column">\n                            <fd-dynamic-page-layout-actions>\n                                <fd-toolbar fdType="transparent" [clearBorder]="true">\n                                    <button\n                                        fd-button\n                                        fdType="transparent"\n                                        [attr.aria-label]="isFullScreen ? \'Exit Fullscreen\': \'Expand Fullscreen\'"\n                                        (click)="isFullScreen ? changeLayout(\'ThreeColumnsMidExpanded\') : changeLayout(\'OneColumnEndFullScreen\')"\n                                        [title]="isFullScreen ? \'Exit Fullscreen\': \'Expand Fullscreen\'">\n                                        <i [ngClass]="isFullScreen ? \'sap-icon--exitfullscreen\' : \'sap-icon--resize\'"></i>\n                                    </button>\n                                    <button\n                                        fd-button\n                                        fdType="transparent"\n                                        aria-label="Close"\n                                        (click)="changeLayout(\'TwoColumnsMidExpanded\')"\n                                        title="Close">\n                                        <i class="sap-icon--decline"></i>\n                                    </button>\n                                </fd-toolbar>\n                            </fd-dynamic-page-layout-actions>\n                        </fd-dynamic-page-header>\n                        <fd-dynamic-page-content>\n                            <div class="fd-dynamic-page-section-example">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n                                sunt in culpa qui officia deserunt mollit anim id est laborum.\n                            </div>\n                        </fd-dynamic-page-content>\n                    </fd-dynamic-page>\n                </ng-template>\n            </fd-flexible-column-layout>\n        </div>\n    </ng-container>\n</div>\n  ',g="import { Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n    selector: 'fd-flexible-column-layout-dynamic-page-example',\n    templateUrl: './flexible-column-layout-dynamic-page-example.component.html',\n    styleUrls: ['./flexible-column-layout-dynamic-page-example.component.scss']\n})\nexport class FlexibleColumnLayoutDynamicPageExampleComponent {\n\n    /**\n     * property set by the consuming application (name can vary????????)\n     * sets the initial layout of the component to 'OneColumnStartFullScreen'\n     * sets a new layout for the component \n     */\n    localLayout = 'OneColumnStartFullScreen';\n\n    /**\n     * property set by the consuming application\n     * specifies if the control buttons for Enter/Exit Full Screen and Close \n     * are visible in the middle sectioon\n     */\n    showMidColumnControls = this.localLayout.startsWith('Two') || this.localLayout.includes('FullScreen');\n\n    /**\n     * property set by the consuming application\n     * checks if the component layout is in full screen\n     */\n    isFullScreen = this.localLayout.includes('FullScreen');\n\n    /**\n     * property needed ONLY for the current documentation purposes\n     * provides access to the HTML element with \"overlay\" reference\n     */\n    @ViewChild('overlay')\n    overlay: ElementRef<HTMLElement>;\n\n    /**\n     * property needed ONLY for the current documentation purposes\n     * specifies if the doc example is rendered in fullscreen or not\n     */\n    fullscreen = false;\n\n    /**\n     * function set by the consuming application\n     * this function is reacting to events (button clicks) and \n     * updates the local property which sets a new layout for the component.\n     * Available values for the layouts include:\n     * 'OneColumnStartFullScreen' | 'OneColumnMidFullScreen' | 'OneColumnEndFullScreen' |\n     * 'TwoColumnsStartExpanded' | 'TwoColumnsMidExpanded' | 'TwoColumnsEndExpanded' | \n     * 'ThreeColumnsMidExpanded' | 'ThreeColumnsEndExpanded' | 'ThreeColumnsStartMinimized' | \n     * 'ThreeColumnsEndMinimized';\n     */\n    changeLayout(newValue: string): void {\n        this.localLayout = newValue;\n        this.showMidColumnControls = this.localLayout.startsWith('Two') || this.localLayout.includes('FullScreen');\n        this.isFullScreen = this.localLayout.includes('FullScreen');\n    }\n\n    /**\n     * function needed ONLY for the current documentation purposes\n     * opens the example in full screen\n     */\n    enterFullscreenExample(): void {\n        this.fullscreen = true;\n        this.overlay.nativeElement.style.width = '100%';\n    }\n\n    /**\n     * function needed ONLY for the current documentation purposes\n     * exits the full screen mode of the example\n     */\n    exitFullscreenExample(event: Event): void {\n        event.stopPropagation();\n        this.fullscreen = false;\n        this.overlay.nativeElement.style.width = '0%';\n    }\n}\n",v=".docs-fcl-example-overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    background-color: rgb(255, 255, 255);\n    overflow-x: hidden;\n}\n\n.docs-fcl-example-overlay-content {\n    position: relative;\n    width: 100%;\n}\n\n.docs-fcl-example-button {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0.5rem 2rem;\n    background: #394a5d;\n}\n\n.docs-fcl-example-section {\n    height: 100vh;\n\n    h2 {\n        font-size: 30px;\n        text-align: center;\n    }\n\n    div {\n        display: flex;\n        justify-content: space-around;\n        margin: 20px;\n    }\n}\n",V=o("fXoL"),C=o("ddaM"),E=o("X1JU"),W=o("rp8N"),F=o("ofXK"),w=o("DLrZ"),S=["overlay"];function T(e,n){if(1&e){var t=V.Xb();V.Wb(0,"div",10),V.Wb(1,"h2"),V.Vc(2,"Start Column"),V.Vb(),V.Wb(3,"div"),V.Wb(4,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(2).changeLayout("TwoColumnsStartExpanded")}),V.Vc(5," Open Column 2 "),V.Vb(),V.Vb(),V.Vb()}}function L(e,n){if(1&e){var t=V.Xb();V.Wb(0,"div",10),V.Wb(1,"h2"),V.Vc(2,"Mid Column"),V.Vb(),V.Wb(3,"div"),V.Wb(4,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(2).changeLayout("ThreeColumnsMidExpanded")}),V.Vc(5," Open Column 3 "),V.Vb(),V.Vb(),V.Vb()}}function M(e,n){if(1&e){var t=V.Xb();V.Wb(0,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(3).changeLayout("OneColumnEndFullScreen")}),V.Vc(1,"Expand Column 3"),V.Vb()}}function k(e,n){if(1&e){var t=V.Xb();V.Wb(0,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(3).changeLayout("TwoColumnsMidExpanded")}),V.Vc(1,"Close Column 3"),V.Vb()}}function O(e,n){if(1&e){var t=V.Xb();V.Wb(0,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(3).changeLayout("ThreeColumnsMidExpanded")}),V.Vc(1,"Exit Full Screen Column 3"),V.Vb()}}function z(e,n){if(1&e&&(V.Wb(0,"div",10),V.Wb(1,"h2"),V.Vc(2,"End Column"),V.Vb(),V.Wb(3,"div"),V.Tc(4,M,2,0,"button",12),V.Tc(5,k,2,0,"button",12),V.Tc(6,O,2,0,"button",12),V.Vb(),V.Vb()),2&e){var t=V.nc(2);V.Db(4),V.vc("ngIf","OneColumnEndFullScreen"!==t.localLayout),V.Db(1),V.vc("ngIf","OneColumnEndFullScreen"!==t.localLayout),V.Db(1),V.vc("ngIf","OneColumnEndFullScreen"===t.localLayout)}}function D(e,n){if(1&e){var t=V.Xb();V.Ub(0),V.Wb(1,"div",4),V.Wb(2,"div",5),V.Wb(3,"button",0),V.jc("click",function(e){return V.Kc(t),V.nc().exitFullscreenExample(e)}),V.Vc(4,"Exit Example"),V.Vb(),V.Vb(),V.Wb(5,"fd-flexible-column-layout",6),V.jc("layoutChange",function(e){return V.Kc(t),V.nc().localLayout=e}),V.Tc(6,T,6,0,"ng-template",null,7,V.Uc),V.Tc(8,L,6,0,"ng-template",null,8,V.Uc),V.Tc(10,z,7,3,"ng-template",null,9,V.Uc),V.Vb(),V.Vb(),V.Tb()}if(2&e){var l=V.nc();V.Db(5),V.vc("layout",l.localLayout)}}var P,j=((P=function(){function n(){e(this,n),this.fullscreen=!1,this.localLayout="OneColumnStartFullScreen"}return t(n,[{key:"changeLayout",value:function(e){this.localLayout=e}},{key:"enterFullscreenExample",value:function(){this.fullscreen=!0,this.overlay.nativeElement.style.width="100%"}},{key:"exitFullscreenExample",value:function(e){e.stopPropagation(),this.fullscreen=!1,this.overlay.nativeElement.style.width="0%"}}]),n}()).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=V.Kb({type:P,selectors:[["fd-flexible-column-layout-example"]],viewQuery:function(e,n){var t;1&e&&V.ad(S,1),2&e&&V.Gc(t=V.kc())&&(n.overlay=t.first)},decls:5,vars:1,consts:[["fd-button","",3,"click"],["cdkScrollable","",1,"docs-fcl-example-overlay"],["overlay",""],[4,"ngIf"],[1,"docs-fcl-example-overlay-content"],[1,"docs-fcl-example-button"],[3,"layout","layoutChange"],["startColumn",""],["midColumn",""],["endColumn",""],[1,"docs-fcl-example-section"],[1,"fd-button",3,"click"],["class","fd-button",3,"click",4,"ngIf"]],template:function(e,n){1&e&&(V.Wb(0,"button",0),V.jc("click",function(){return n.enterFullscreenExample()}),V.Vc(1,"Click to open full screen"),V.Vb(),V.Wb(2,"div",1,2),V.Tc(4,D,12,1,"ng-container",3),V.Vb()),2&e&&(V.Db(4),V.vc("ngIf",n.fullscreen))},directives:[W.a,F.o,w.a],styles:[".docs-fcl-example-overlay[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:10;top:0;left:0;background-color:#fff;overflow-x:hidden}.docs-fcl-example-overlay-content[_ngcontent-%COMP%]{position:relative;width:100%}.docs-fcl-example-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:.5rem 2rem;background:#394a5d}.docs-fcl-example-section[_ngcontent-%COMP%]{height:100vh}.docs-fcl-example-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;text-align:center}.docs-fcl-example-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:20px}"]}),P),q=o("5HkS"),R=o("HdQr"),I=o("rg6d"),K=o("MCvN"),U=o("7x1L"),_=o("PoKM"),X=o("eIeA"),N=["overlay"];function B(e,n){if(1&e){var t=V.Xb();V.Wb(0,"div",10),V.Wb(1,"h2"),V.Vc(2,"Start Column"),V.Vb(),V.Wb(3,"div"),V.Wb(4,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(2).changeLayout("TwoColumnsMidExpanded")}),V.Vc(5," Open Column 2 "),V.Vb(),V.Vb(),V.Vb()}}function G(e,n){if(1&e){var t=V.Xb();V.Wb(0,"button",20),V.jc("click",function(){V.Kc(t);var e=V.nc(3);return e.changeLayout(e.isFullScreen?"TwoColumnsMidExpanded":"OneColumnMidFullScreen")}),V.Rb(1,"i",21),V.Vb()}if(2&e){var l=V.nc(3);V.vc("title",l.isFullScreen?"Exit Fullscreen":"Expand Fullscreen"),V.Eb("aria-label",l.isFullScreen?"Exit Fullscreen":"Expand Fullscreen"),V.Db(1),V.vc("ngClass",l.isFullScreen?"sap-icon--exitfullscreen":"sap-icon--resize")}}function H(e,n){if(1&e){var t=V.Xb();V.Wb(0,"button",22),V.jc("click",function(){return V.Kc(t),V.nc(3).changeLayout("OneColumnStartFullScreen")}),V.Rb(1,"i",23),V.Vb()}}function J(e,n){if(1&e){var t=V.Xb();V.Wb(0,"fd-dynamic-page",12),V.Wb(1,"fd-dynamic-page-header",13),V.Wb(2,"fd-dynamic-page-layout-actions"),V.Wb(3,"fd-toolbar",14),V.Tc(4,G,2,3,"button",15),V.Tc(5,H,2,0,"button",16),V.Vb(),V.Vb(),V.Vb(),V.Wb(6,"fd-dynamic-page-subheader",17),V.Wb(7,"span"),V.Vc(8," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, delectus necessitatibus incidunt numquam asperiores tenetur iure. Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis? "),V.Vb(),V.Vb(),V.Wb(9,"fd-dynamic-page-content"),V.Wb(10,"div",18),V.Wb(11,"button",11),V.jc("click",function(){return V.Kc(t),V.nc(2).changeLayout("ThreeColumnsMidExpanded")}),V.Vc(12," Open Column 3 "),V.Vb(),V.Vb(),V.Wb(13,"div",19),V.Vc(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),V.Vb(),V.Vb(),V.Vb()}if(2&e){var l=V.nc(2);V.vc("autoResponsive",!0),V.Db(3),V.vc("clearBorder",!0),V.Db(1),V.vc("ngIf",l.showMidColumnControls),V.Db(1),V.vc("ngIf",l.showMidColumnControls),V.Db(1),V.vc("collapsible",!0)("pinnable",!0)("collapsed",!1)}}function A(e,n){if(1&e){var t=V.Xb();V.Wb(0,"fd-dynamic-page",12),V.Wb(1,"fd-dynamic-page-header",24),V.Wb(2,"fd-dynamic-page-layout-actions"),V.Wb(3,"fd-toolbar",14),V.Wb(4,"button",20),V.jc("click",function(){V.Kc(t);var e=V.nc(2);return e.changeLayout(e.isFullScreen?"ThreeColumnsMidExpanded":"OneColumnEndFullScreen")}),V.Rb(5,"i",21),V.Vb(),V.Wb(6,"button",22),V.jc("click",function(){return V.Kc(t),V.nc(2).changeLayout("TwoColumnsMidExpanded")}),V.Rb(7,"i",23),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Wb(8,"fd-dynamic-page-content"),V.Wb(9,"div",19),V.Vc(10," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),V.Vb(),V.Vb(),V.Vb()}if(2&e){var l=V.nc(2);V.vc("autoResponsive",!0),V.Db(3),V.vc("clearBorder",!0),V.Db(1),V.vc("title",l.isFullScreen?"Exit Fullscreen":"Expand Fullscreen"),V.Eb("aria-label",l.isFullScreen?"Exit Fullscreen":"Expand Fullscreen"),V.Db(1),V.vc("ngClass",l.isFullScreen?"sap-icon--exitfullscreen":"sap-icon--resize")}}function Q(e,n){if(1&e){var t=V.Xb();V.Ub(0),V.Wb(1,"div",4),V.Wb(2,"div",5),V.Wb(3,"button",0),V.jc("click",function(e){return V.Kc(t),V.nc().exitFullscreenExample(e)}),V.Vc(4,"Exit Example"),V.Vb(),V.Vb(),V.Wb(5,"fd-flexible-column-layout",6),V.jc("layoutChange",function(e){return V.Kc(t),V.nc().localLayout=e}),V.Tc(6,B,6,0,"ng-template",null,7,V.Uc),V.Tc(8,J,15,7,"ng-template",null,8,V.Uc),V.Tc(10,A,11,5,"ng-template",null,9,V.Uc),V.Vb(),V.Vb(),V.Tb()}if(2&e){var l=V.nc();V.Db(5),V.vc("layout",l.localLayout)}}var Y,Z,$,ee,ne=((Z=function(){function n(){e(this,n),this.localLayout="OneColumnStartFullScreen",this.showMidColumnControls=this.localLayout.startsWith("Two")||this.localLayout.includes("FullScreen"),this.isFullScreen=this.localLayout.includes("FullScreen"),this.fullscreen=!1}return t(n,[{key:"changeLayout",value:function(e){this.localLayout=e,this.showMidColumnControls=this.localLayout.startsWith("Two")||this.localLayout.includes("FullScreen"),this.isFullScreen=this.localLayout.includes("FullScreen")}},{key:"enterFullscreenExample",value:function(){this.fullscreen=!0,this.overlay.nativeElement.style.width="100%"}},{key:"exitFullscreenExample",value:function(e){e.stopPropagation(),this.fullscreen=!1,this.overlay.nativeElement.style.width="0%"}}]),n}()).\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=V.Kb({type:Z,selectors:[["fd-flexible-column-layout-dynamic-page-example"]],viewQuery:function(e,n){var t;1&e&&V.ad(N,1),2&e&&V.Gc(t=V.kc())&&(n.overlay=t.first)},decls:5,vars:1,consts:[["fd-button","",3,"click"],["cdkScrollable","",1,"docs-fcl-example-overlay"],["overlay",""],[4,"ngIf"],[1,"docs-fcl-example-overlay-content"],[1,"docs-fcl-example-button"],[3,"layout","layoutChange"],["startColumn",""],["midColumn",""],["endColumn",""],[1,"docs-fcl-example-section"],[1,"fd-button",3,"click"],["ariaLabel","Example Dynamic Page",3,"autoResponsive"],["title","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],["fdType","transparent",3,"clearBorder"],["fd-button","","fdType","transparent",3,"title","click",4,"ngIf"],["fd-button","","fdType","transparent","aria-label","Close","title","Close",3,"click",4,"ngIf"],[3,"collapsible","pinnable","collapsed"],[1,"fd-dynamic-page-section-example",2,"display","flex","align-items","center","justify-content","center"],[1,"fd-dynamic-page-section-example"],["fd-button","","fdType","transparent",3,"title","click"],[3,"ngClass"],["fd-button","","fdType","transparent","aria-label","Close","title","Close",3,"click"],[1,"sap-icon--decline"],["title","End Column"]],template:function(e,n){1&e&&(V.Wb(0,"button",0),V.jc("click",function(){return n.enterFullscreenExample()}),V.Vc(1,"Click to open full screen"),V.Vb(),V.Wb(2,"div",1,2),V.Tc(4,Q,12,1,"ng-container",3),V.Vb()),2&e&&(V.Db(4),V.vc("ngIf",n.fullscreen))},directives:[W.a,F.o,w.a,R.a,I.a,K.a,U.a,_.a,X.a,F.m],styles:[".docs-fcl-example-overlay[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:10;top:0;left:0;background-color:#fff;overflow-x:hidden}.docs-fcl-example-overlay-content[_ngcontent-%COMP%]{position:relative;width:100%}.docs-fcl-example-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:.5rem 2rem;background:#394a5d}.docs-fcl-example-section[_ngcontent-%COMP%]{height:100vh}.docs-fcl-example-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;text-align:center}.docs-fcl-example-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:20px}"]}),Z),te=((Y=function n(){e(this,n),this.defaultFlexibleColumnLayout=[{language:"html",code:i,fileName:"flexible-column-layout-example",scssFileCode:c},{language:"typescript",component:"FlexibleColumnLayoutExampleComponent",code:a,fileName:"flexible-column-layout-example"}],this.flexibleColumnLayoutDynamicPage=[{language:"html",code:u,fileName:"flexible-column-layout-dynamic-page-example",scssFileCode:r},{language:"typescript",component:"FlexibleColumnLayoutDynamicPageExampleComponent",code:s,fileName:"flexible-column-layout-dynamic-page-example"}]}).\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=V.Kb({type:Y,selectors:[["fd-flexible-column-layout-docs"]],decls:10,vars:2,consts:[["id","default","componentName","flexible-column-layout"],[3,"exampleFiles"],["id","with-dynamic-page","componentName","flexible-column-layout"]],template:function(e,n){1&e&&(V.Wb(0,"fd-docs-section-title",0),V.Vc(1," Flexible Column Layout\n"),V.Vb(),V.Wb(2,"component-example"),V.Rb(3,"fd-flexible-column-layout-example"),V.Vb(),V.Rb(4,"code-example",1),V.Wb(5,"fd-docs-section-title",2),V.Vc(6," Flexible Column Layout With Dynamic Page\n"),V.Vb(),V.Wb(7,"component-example"),V.Rb(8,"fd-flexible-column-layout-dynamic-page-example"),V.Vb(),V.Rb(9,"code-example",1)),2&e&&(V.Db(4),V.vc("exampleFiles",n.defaultFlexibleColumnLayout),V.Db(5),V.vc("exampleFiles",n.flexibleColumnLayoutDynamicPage))},directives:[C.a,E.a,j,q.a,ne],encapsulation:2}),Y),le=o("dor/"),oe=o("kt86"),ie=o("RJTZ"),ae=o("Kpas"),ce=(($=function n(){e(this,n)}).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=V.Kb({type:$,selectors:[["fd-flexible-column-layout-docs-header"]],decls:163,vars:0,consts:[["module","FlexibleColumnLayoutModule","subPackage","flexible-column-layout"],[2,"color","green"],[2,"color","red"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#possible-layouts"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#components"],["target","_blank","href","https://experience.sap.com/fiori-design-web/flexible-column-layout/#responsiveness"]],template:function(e,n){1&e&&(V.Wb(0,"header"),V.Vc(1,"Flexible Column Layout"),V.Vb(),V.Wb(2,"description"),V.Vc(3," The flexible column layout is a layout control that displays multiple floorplans on a single page. This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation. The flexible column layout offers different layouts with up to three columns. Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.\n"),V.Vb(),V.Rb(4,"import",0),V.Wb(5,"description"),V.Wb(6,"p"),V.Vc(7,"Depending on the current layout and display size, the flexible column layout consists of one, two, or three horizontally-aligned columns. Each column contains content that is not provided by the flexible column layout itself. This content is passed to the component through "),V.Wb(8,"code"),V.Vc(9,"ng-template"),V.Vb(),V.Vc(10," and using the template references "),V.Wb(11,"code"),V.Vc(12,"#startColumn"),V.Vb(),V.Vc(13,", "),V.Wb(14,"code"),V.Vc(15,"#midColumn"),V.Vb(),V.Vc(16," and "),V.Wb(17,"code"),V.Vc(18,"#endColumn"),V.Vb(),V.Vc(19,"."),V.Vb(),V.Wb(20,"h2"),V.Vc(21,"Possible Layouts"),V.Vb(),V.Wb(22,"ul"),V.Wb(23,"li"),V.Wb(24,"b"),V.Vc(25,"full screen layouts"),V.Vb(),V.Wb(26,"ul"),V.Wb(27,"li"),V.Vc(28,"start column in full screen - (start: 100%, mid: 0, end: 0) - "),V.Wb(29,"code"),V.Vc(30,"'OneColumnStartFullScreen'"),V.Vb(),V.Vb(),V.Wb(31,"li"),V.Vc(32,"middle column in full screen - (start: 0, mid: 100%, end: 0) - "),V.Wb(33,"code"),V.Vc(34,"'OneColumnMidFullScreen'"),V.Vb(),V.Vb(),V.Wb(35,"li"),V.Vc(36,"end column in full screen - (start: 0, mid: 0, end: 100%) - "),V.Wb(37,"code"),V.Vc(38,"'OneColumnEndFullScreen'"),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Wb(39,"li"),V.Wb(40,"b"),V.Vc(41,"2-column layouts"),V.Vb(),V.Wb(42,"ul"),V.Wb(43,"li"),V.Vc(44,"start column expanded - (start: 67%, mid: 33%, end: 0) - "),V.Wb(45,"code"),V.Vc(46,"'TwoColumnsStartExpanded'"),V.Vb(),V.Vb(),V.Wb(47,"li"),V.Vc(48,"middle column expanded - (start: 33%, mid: 67%, end: 0) - "),V.Wb(49,"code"),V.Vc(50,"'TwoColumnsMidExpanded'"),V.Vb(),V.Vb(),V.Wb(51,"li"),V.Vc(52,"end column expanded - (start: 0, mid: 33%, end: 67%) - "),V.Wb(53,"code"),V.Vc(54,"'TwoColumnsEndExpanded'"),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Wb(55,"li"),V.Wb(56,"b"),V.Vc(57,"3-column layouts"),V.Vb(),V.Wb(58,"ul"),V.Wb(59,"li"),V.Vc(60,"middle column expanded - (start: 25%, mid: 50%, end: 25%) - "),V.Wb(61,"code"),V.Vc(62,"'ThreeColumnsMidExpanded'"),V.Vb(),V.Vb(),V.Wb(63,"li"),V.Vc(64,"end column expanded - (start: 25%, mid: 25%, end: 50%) - "),V.Wb(65,"code"),V.Vc(66,"'ThreeColumnsEndExpanded'"),V.Vb(),V.Vb(),V.Wb(67,"li"),V.Vc(68,"start column minimized - (start: 0, mid: 67%, end: 33%) - "),V.Wb(69,"code"),V.Vc(70,"'ThreeColumnsStartMinimized'"),V.Vb(),V.Vb(),V.Wb(71,"li"),V.Vc(72,"end column minimized - (start: 33%, mid: 67%, end: 0) - "),V.Wb(73,"code"),V.Vc(74,"'ThreeColumnsEndMinimized'"),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Vb(),V.Wb(75,"h4"),V.Vc(76,"Size LG and XL (Desktop)"),V.Vb(),V.Wb(77,"p"),V.Wb(78,"b",1),V.Vc(79,"Possible variations"),V.Vb(),V.Vc(80," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen', 'OneColumnEndFullScreen', 'TwoColumnsStartExpanded', 'TwoColumnsMidExpanded', 'ThreeColumnsMidExpanded', 'ThreeColumnsEndExpanded', 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'."),V.Vb(),V.Wb(81,"h4"),V.Vc(82,"Size MD (Tablet)"),V.Vb(),V.Wb(83,"p"),V.Vc(84,"There is no 3-column layout due to the limited width. However, you can still load 3 pages in size MD. Instead of showing them all side-by-side, the user can switch between columns 1/2 and 2/3 using 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'. "),V.Vb(),V.Wb(85,"p"),V.Wb(86,"b",1),V.Vc(87,"Possible variations"),V.Vb(),V.Vc(88," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen', 'OneColumnEndFullScreen', 'TwoColumnsStartExpanded', 'TwoColumnsMidExpanded', 'TwoColumnsEndExpanded', 'ThreeColumnsStartMinimized' and 'ThreeColumnsEndMinimized'."),V.Vb(),V.Wb(89,"h4"),V.Vc(90,"Size SM (Phone)"),V.Vb(),V.Wb(91,"p"),V.Vc(92,"Because of the limited width, there is no multi-column layout for size SM. Instead, the rightmost column is shown in full screen mode."),V.Vb(),V.Wb(93,"p"),V.Wb(94,"b",1),V.Vc(95,"Possible variations"),V.Vb(),V.Vc(96," - 'OneColumnStartFullScreen', 'OneColumnMidFullScreen' and 'OneColumnEndFullScreen'."),V.Vb(),V.Wb(97,"p"),V.Wb(98,"b",2),V.Vc(99,"Note:"),V.Vb(),V.Vc(100," The column separators cannot be used to expand a column to full screen mode. The layout arrow is located next to the divider and points in the direction in which a column can be expanded. If a column cannot be expanded any further, the action is hidden."),V.Vb(),V.Wb(101,"p"),V.Wb(102,"b"),V.Vc(103,"The user cannot change the size of a column freely (for example, (start: 15%, mid: 85%, end: 0))."),V.Vb(),V.Vb(),V.Vc(104," For more information about Layouts visit the "),V.Wb(105,"a",3),V.Vc(106,"Fiori Design Guidelines."),V.Vb(),V.Wb(107,"p"),V.Vc(108," The navigation through the flexible column layout (forward and backwards), as well as the actions for entering and exiting full screen mode and closing columns are not provided automatically by the flexible column layout control, and need to be implemented manually. This can be done by reacting to events, such as button click, and updating the "),V.Wb(109,"code"),V.Vc(110,"[layout]"),V.Vb(),V.Vc(111," property of the "),V.Wb(112,"code"),V.Vc(113,"fd-flexible-column-layout"),V.Vb(),V.Vc(114," with the desired value. The same "),V.Wb(115,"code"),V.Vc(116,"[layout]"),V.Vb(),V.Vc(117," property is used to specify the inital layout of the component. "),V.Vb(),V.Wb(118,"p"),V.Vc(119,"For example, setting "),V.Wb(120,"code"),V.Vc(121,"[layout]=\"'TwoColumnsMidExpanded'\""),V.Vb(),V.Vc(122," will render a 2-column layout with middle column expanded. "),V.Vb(),V.Wb(123,"p"),V.Vc(124," For available navigation and close sequences visit the "),V.Wb(125,"a",4),V.Vc(126,"Fiori Design Guidelines."),V.Vb(),V.Vb(),V.Wb(127,"h2"),V.Vc(128,"Responsiveness"),V.Vb(),V.Wb(129,"p"),V.Vc(130,"The flexible column layout changes its behavior for sizes LG, MD and SM in real time whenever the user resizes the screen. For more information visit the "),V.Wb(131,"a",5),V.Vc(132,"Responsiveness"),V.Vb(),V.Vc(133," section of Fiori Design Guidelines. "),V.Vb(),V.Wb(134,"p"),V.Vc(135,"By default, the Flexible Column Layout applies the Fiori 3 break points: "),V.Vb(),V.Wb(136,"ul"),V.Wb(137,"li"),V.Vc(138,"Size SM: max-width: 960px"),V.Vb(),V.Wb(139,"li"),V.Vc(140,"Size MD: min-width: 961px and max-width: 1280px"),V.Vb(),V.Wb(141,"li"),V.Vc(142,"Size LG/Size XL: min-width: 1281px"),V.Vb(),V.Vb(),V.Wb(143,"p"),V.Vc(144,"The component also provides a default behaviour for managing the screen resizing. "),V.Rb(145,"br"),V.Vc(146," To overwrite the default breakpoints use the "),V.Wb(147,"code"),V.Vc(148,"smBreakPoint"),V.Vb(),V.Vc(149," and "),V.Wb(150,"code"),V.Vc(151,"lgBreakPoint"),V.Vb(),V.Vc(152," properties. It's also possible to provide a custom function that will handle the resizing of the screen. Use the "),V.Wb(153,"code"),V.Vc(154,"customOnResizeFunction"),V.Vb(),V.Vc(155," property to overwrite the default behaviour. "),V.Vb(),V.Wb(156,"p"),V.Vc(157,"The "),V.Wb(158,"code"),V.Vc(159,"backgroundDesign"),V.Vb(),V.Vc(160,' property specifies the background design of the column layout. The default is set to "solid". The other two options include "translucent" and "transparent".'),V.Vb(),V.Vb(),V.Rb(161,"fd-header-tabs"),V.Rb(162,"router-outlet"))},directives:[le.a,oe.a,ie.a,ae.a,d.h],styles:["code[_ngcontent-%COMP%] {\n            color: red;\n        }"]}),$),ue=o("Avej"),se=o("b5WL"),re=o("kR/j"),de=o("TClZ"),me=[{path:"",component:ce,children:[{path:"",component:te},{path:"api",component:p.a,data:{content:b.a.flexibleColumnLayout}}]}],pe=((ee=function n(){e(this,n)}).\u0275fac=function(e){return new(e||ee)},ee.\u0275mod=V.Ob({type:ee}),ee.\u0275inj=V.Nb({imports:[[d.g.forChild(me),m.a,ue.b,se.a,re.b,de.c],d.g]}),ee)}}])}();