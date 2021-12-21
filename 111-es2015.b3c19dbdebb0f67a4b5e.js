(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{zslJ:function(e,t,a){"use strict";a.r(t),a.d(t,"PlatformDatetimePickerDocsModule",function(){return ee});var n={};a.r(n),a.d(n,"default",function(){return h});var i={};a.r(i),a.d(i,"default",function(){return g});var r={};a.r(r),a.d(r,"default",function(){return k});var o={};a.r(o),a.d(o,"default",function(){return v});var l={};a.r(l),a.d(l,"default",function(){return V});var m={};a.r(m),a.d(m,"default",function(){return F});var d={};a.r(d),a.d(d,"default",function(){return w});var c={};a.r(c),a.d(c,"default",function(){return P});var p=a("tyNb"),f=a("GKNN"),s=a("G6Ao"),u=a("jzzn"),b=a("t9W5"),D=a("IywY"),h='<label for="simple">Simple datetime picker:</label>\n<br />\n<fdp-datetime-picker name="simple" placeholder="MM/dd/YYYY, hh:mm"></fdp-datetime-picker>\n<br />\n<label for="withAllowNull">With allowNull not enabled to disallow input from taking null value:</label>\n<br />\n<fdp-datetime-picker name="withAllowNull" [allowNull]="false" placeholder="Enter a date mandatorily">\n</fdp-datetime-picker>\n<br />\n<label for="compactDatetime">Compact datetime picker. Click on the button to change the date:</label>\n<br />\n<fdp-datetime-picker\n    name="compactDatetime"\n    contentDensity="compact"\n    [value]="date1"\n    placeholder="Compact datetime picker"\n>\n</fdp-datetime-picker>\n<br />\n<button fd-button name="changeBtn" (click)="changeDay()">Change datetime value</button>\n<br />\n<br />\n<label for="disabledDatetime">Disabled datetime picker:</label>\n<br />\n<fdp-datetime-picker name="disabledDatetime" [disabled]="true" [value]="date2"> </fdp-datetime-picker>\n<br />\n<label for="placementDatetime">Placement for datetime picker:</label>\n<br />\n<fdp-datetime-picker name="placementDatetime" placement="bottom-end" [value]="date2" placeholder="MM/dd/YYYY, hh:mm">\n</fdp-datetime-picker>\n<br />\n',g="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-basic-example',\n    templateUrl: './platform-datetime-picker-basic-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerBasicExampleComponent {\n    date1: FdDate = new FdDate(2020, 11, 27, 14, 30);\n\n    date2: FdDate = FdDate.getToday();\n\n    changeDay(): void {\n        this.date1 = new FdDate(2018, 10, 10, 21, 35);\n    }\n}\n",k='<fdp-form-group\n    #ffg\n    [formGroup]="datetimePickerForm"\n    mainTitle="Datetime Picker with XL2-L2-M1-S1 form layout"\n    columnLayout="XL2-L2-M1-S1">\n    <fdp-form-field\n        #ffl1\n        id="simple"\n        column="1"\n        required="true"\n        [validators]="requiredDateValidator"\n        label="Date:"\n    >\n        <fdp-datetime-picker\n            name="simple"\n            [formControl]="ffl1.formControl"\n            [disableFunction]="disableFunction"\n            placeholder="MM/dd/YYYY, hh:mm"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="disabledDatetime" column="2" label="Disabled Datetime Picker:">\n        <fdp-datetime-picker name="disabledDatetime" [disabled]="true" [value]="date"> </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required"> Value is required </span>\n    </ng-template>\n</fdp-form-group>\n',v="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-disable-function-example',\n    templateUrl: './platform-datetime-picker-disable-function-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerDisableFunctionExampleComponent {\n    datetimePickerForm = new FormGroup({});\n\n    requiredDateValidator: ValidatorFn[] = [Validators.required];\n\n    date = FdDate.getNow();\n\n    disableFunction = (fdDate: FdDate): boolean => {\n        return FdDate.getToday().getTimeStamp() > fdDate.getTimeStamp();\n    };\n}\n",V='<fdp-form-group\n    #ffg\n    [formGroup]="datetimePickerForm"\n    [object]="formData"\n    (onSubmit)="onSubmit()"\n    mainTitle="Datetime Picker with XL3-L1-M1-S1 form layout"\n    columnLayout="XL3-L1-M1-S1"\n>\n    <fdp-form-field\n        #ffl1\n        id="simple"\n        column="1"\n        required="true"\n        [validators]="requiredDateValidator"\n        placeholder="MM/dd/YYYY, hh:mm"\n        label="Date:"\n    >\n        <fdp-datetime-picker\n            name="simple"\n            [formControl]="ffl1.formControl"\n        ></fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl3\n        id="withAllowNull"\n        column="2"\n        label="With allowNull not enabled to disallow input from taking null value:"\n    >\n        <fdp-datetime-picker\n            name="withAllowNull"\n            [allowNull]="false"\n            placeholder="Enter a date mandatorily"\n            [formControl]="ffl3.formControl"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl6\n        id="storedDate"\n        column="3"\n        required="true"\n        label="Passing datetime through form object:"\n    >\n        <fdp-datetime-picker\n            name="storedDate"\n            placeholder="Pre-filled datetime"\n            [formControl]="ffl6.formControl"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template \n        #i18n\n        let-errors\n    >\n        <span *ngIf="errors.required">\n            Value is required\n        </span>\n    </ng-template>\n</fdp-form-group>\n\n<button fd-button name="submitBtn" (click)="onSubmit()">Submit</button>\n<div>form valid: {{ datetimePickerForm?.valid }}</div>\n\n<div *ngIf="stringValue">form value: {{ stringValue }}</div>\n',F="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-reactive-example',\n    templateUrl: './platform-datetime-picker-reactive-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerReactiveExampleComponent {\n    datetimePickerForm = new FormGroup({});\n\n    stringValue: string;\n\n    formData = new StoredDatetimeObject(new FdDate(2008, 2, 11, 21, 15));\n\n    requiredDateValidator: ValidatorFn[] = [Validators.required];\n\n    onSubmit(): void {\n        if (this.datetimePickerForm.valid) {\n            this.stringValue = JSON.stringify(this.datetimePickerForm.value);\n        } else {\n            this.stringValue = '';\n            alert('Form invalid');\n        }\n    }\n}\n\nclass StoredDatetimeObject {\n    constructor(public storedDate: FdDate) {}\n}\n",w='<fdp-form-group\n    #fdpForm\n    mainTitle="Datetime Picker with XL2-L2-M1-S1 form layout"\n    columnLayout="XL2-L2-M1-S1"\n>\n    <fdp-form-field\n        id="simple"\n        column="1"\n        required="true"\n        placeholder="Enter a date"\n        label="Date:"\n    >\n        <fdp-datetime-picker\n            name="simple"\n            [(ngModel)]="date"\n        > </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template\n        #i18n\n        let-errors\n    >\n        <span *ngIf="errors.required">\n            Value is required\n        </span>\n    </ng-template>\n</fdp-form-group>\n\n<div>form valid: {{ fdpForm?.formGroup?.valid }}</div>\n',P="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-template-example',\n    templateUrl: './platform-datetime-picker-template-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerTemplateExampleComponent {\n    date: FdDate = FdDate.getNow();\n}\n",T=a("fXoL"),C=a("ddaM"),M=a("kt86"),x=a("X1JU"),R=a("aiWu"),A=a("rp8N");let y=(()=>{class e{constructor(){this.date1=new f.d(2020,11,27,14,30),this.date2=f.d.getToday()}changeDay(){this.date1=new f.d(2018,10,10,21,35)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["fdp-platform-datetime-picker-basic-example"]],features:[T.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:29,vars:5,consts:[["for","simple"],["name","simple","placeholder","MM/dd/YYYY, hh:mm"],["for","withAllowNull"],["name","withAllowNull","placeholder","Enter a date mandatorily",3,"allowNull"],["for","compactDatetime"],["name","compactDatetime","contentDensity","compact","placeholder","Compact datetime picker",3,"value"],["fd-button","","name","changeBtn",3,"click"],["for","disabledDatetime"],["name","disabledDatetime",3,"disabled","value"],["for","placementDatetime"],["name","placementDatetime","placement","bottom-end","placeholder","MM/dd/YYYY, hh:mm",3,"value"]],template:function(e,t){1&e&&(T.Wb(0,"label",0),T.Vc(1,"Simple datetime picker:"),T.Vb(),T.Rb(2,"br"),T.Rb(3,"fdp-datetime-picker",1),T.Rb(4,"br"),T.Wb(5,"label",2),T.Vc(6,"With allowNull not enabled to disallow input from taking null value:"),T.Vb(),T.Rb(7,"br"),T.Rb(8,"fdp-datetime-picker",3),T.Rb(9,"br"),T.Wb(10,"label",4),T.Vc(11,"Compact datetime picker. Click on the button to change the date:"),T.Vb(),T.Rb(12,"br"),T.Rb(13,"fdp-datetime-picker",5),T.Rb(14,"br"),T.Wb(15,"button",6),T.jc("click",function(){return t.changeDay()}),T.Vc(16,"Change datetime value"),T.Vb(),T.Rb(17,"br"),T.Rb(18,"br"),T.Wb(19,"label",7),T.Vc(20,"Disabled datetime picker:"),T.Vb(),T.Rb(21,"br"),T.Rb(22,"fdp-datetime-picker",8),T.Rb(23,"br"),T.Wb(24,"label",9),T.Vc(25,"Placement for datetime picker:"),T.Vb(),T.Rb(26,"br"),T.Rb(27,"fdp-datetime-picker",10),T.Rb(28,"br")),2&e&&(T.Db(8),T.vc("allowNull",!1),T.Db(5),T.vc("value",t.date1),T.Db(9),T.vc("disabled",!0)("value",t.date2),T.Db(5),T.vc("value",t.date2))},directives:[R.a,A.a],encapsulation:2,changeDetection:0}),e})();var S=a("5HkS"),W=a("Hxo2"),E=a("3Pt+"),N=a("vnx5"),q=a("ha2x"),Y=a("ofXK");function L(e,t){1&e&&(T.Wb(0,"span"),T.Vc(1," Value is required "),T.Vb())}function _(e,t){1&e&&T.Tc(0,L,2,0,"span",13),2&e&&T.vc("ngIf",t.$implicit.required)}function I(e,t){if(1&e&&(T.Wb(0,"div"),T.Vc(1),T.Vb()),2&e){const e=T.nc();T.Db(1),T.Xc("form value: ",e.stringValue,"")}}let O=(()=>{class e{constructor(){this.datetimePickerForm=new E.i({}),this.formData=new X(new f.d(2008,2,11,21,15)),this.requiredDateValidator=[E.A.required]}onSubmit(){this.datetimePickerForm.valid?this.stringValue=JSON.stringify(this.datetimePickerForm.value):(this.stringValue="",alert("Form invalid"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["fdp-platform-datetime-picker-reactive-example"]],features:[T.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:18,vars:9,consts:[["mainTitle","Datetime Picker with XL3-L1-M1-S1 form layout","columnLayout","XL3-L1-M1-S1",3,"formGroup","object","onSubmit"],["ffg",""],["id","simple","column","1","required","true","placeholder","MM/dd/YYYY, hh:mm","label","Date:",3,"validators"],["ffl1",""],["name","simple",3,"formControl"],["id","withAllowNull","column","2","label","With allowNull not enabled to disallow input from taking null value:"],["ffl3",""],["name","withAllowNull","placeholder","Enter a date mandatorily",3,"allowNull","formControl"],["id","storedDate","column","3","required","true","label","Passing datetime through form object:"],["ffl6",""],["name","storedDate","placeholder","Pre-filled datetime",3,"formControl"],["i18n",""],["fd-button","","name","submitBtn",3,"click"],[4,"ngIf"]],template:function(e,t){if(1&e&&(T.Wb(0,"fdp-form-group",0,1),T.jc("onSubmit",function(){return t.onSubmit()}),T.Wb(2,"fdp-form-field",2,3),T.Rb(4,"fdp-datetime-picker",4),T.Vb(),T.Wb(5,"fdp-form-field",5,6),T.Rb(7,"fdp-datetime-picker",7),T.Vb(),T.Wb(8,"fdp-form-field",8,9),T.Rb(10,"fdp-datetime-picker",10),T.Vb(),T.Tc(11,_,1,1,"ng-template",null,11,T.Uc),T.Vb(),T.Wb(13,"button",12),T.jc("click",function(){return t.onSubmit()}),T.Vc(14,"Submit"),T.Vb(),T.Wb(15,"div"),T.Vc(16),T.Vb(),T.Tc(17,I,2,1,"div",13)),2&e){const e=T.Hc(3),a=T.Hc(6),n=T.Hc(9);T.vc("formGroup",t.datetimePickerForm)("object",t.formData),T.Db(2),T.vc("validators",t.requiredDateValidator),T.Db(2),T.vc("formControl",e.formControl),T.Db(3),T.vc("allowNull",!1)("formControl",a.formControl),T.Db(3),T.vc("formControl",n.formControl),T.Db(6),T.Xc("form valid: ",null==t.datetimePickerForm?null:t.datetimePickerForm.valid,""),T.Db(1),T.vc("ngIf",t.stringValue)}},directives:[N.a,E.r,E.j,q.a,R.a,E.q,E.g,A.a,Y.o],encapsulation:2,changeDetection:0}),e})();class X{constructor(e){this.storedDate=e}}function j(e,t){1&e&&(T.Wb(0,"span"),T.Vc(1," Value is required "),T.Vb())}function G(e,t){1&e&&T.Tc(0,j,2,0,"span",5),2&e&&T.vc("ngIf",t.$implicit.required)}let B=(()=>{class e{constructor(){this.date=f.d.getNow()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["fdp-platform-datetime-picker-template-example"]],features:[T.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:8,vars:2,consts:[["mainTitle","Datetime Picker with XL2-L2-M1-S1 form layout","columnLayout","XL2-L2-M1-S1"],["fdpForm",""],["id","simple","column","1","required","true","placeholder","Enter a date","label","Date:"],["name","simple",3,"ngModel","ngModelChange"],["i18n",""],[4,"ngIf"]],template:function(e,t){if(1&e&&(T.Wb(0,"fdp-form-group",0,1),T.Wb(2,"fdp-form-field",2),T.Wb(3,"fdp-datetime-picker",3),T.jc("ngModelChange",function(e){return t.date=e}),T.Vb(),T.Vb(),T.Tc(4,G,1,1,"ng-template",null,4,T.Uc),T.Vb(),T.Wb(6,"div"),T.Vc(7),T.Vb()),2&e){const e=T.Hc(1);T.Db(3),T.vc("ngModel",t.date),T.Db(4),T.Xc("form valid: ",null==e||null==e.formGroup?null:e.formGroup.valid,"")}},directives:[N.a,q.a,R.a,E.q,E.t,Y.o],encapsulation:2,changeDetection:0}),e})();function U(e,t){1&e&&(T.Wb(0,"span"),T.Vc(1," Value is required "),T.Vb())}function K(e,t){1&e&&T.Tc(0,U,2,0,"span",8),2&e&&T.vc("ngIf",t.$implicit.required)}let H=(()=>{class e{constructor(){this.datetimePickerForm=new E.i({}),this.requiredDateValidator=[E.A.required],this.date=f.d.getNow(),this.disableFunction=e=>f.d.getToday().getTimeStamp()>e.getTimeStamp()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["fdp-platform-datetime-picker-disable-function-example"]],features:[T.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:9,vars:6,consts:[["mainTitle","Datetime Picker with XL2-L2-M1-S1 form layout","columnLayout","XL2-L2-M1-S1",3,"formGroup"],["ffg",""],["id","simple","column","1","required","true","label","Date:",3,"validators"],["ffl1",""],["name","simple","placeholder","MM/dd/YYYY, hh:mm",3,"formControl","disableFunction"],["id","disabledDatetime","column","2","label","Disabled Datetime Picker:"],["name","disabledDatetime",3,"disabled","value"],["i18n",""],[4,"ngIf"]],template:function(e,t){if(1&e&&(T.Wb(0,"fdp-form-group",0,1),T.Wb(2,"fdp-form-field",2,3),T.Rb(4,"fdp-datetime-picker",4),T.Vb(),T.Wb(5,"fdp-form-field",5),T.Rb(6,"fdp-datetime-picker",6),T.Vb(),T.Tc(7,K,1,1,"ng-template",null,7,T.Uc),T.Vb()),2&e){const e=T.Hc(3);T.vc("formGroup",t.datetimePickerForm),T.Db(2),T.vc("validators",t.requiredDateValidator),T.Db(2),T.vc("formControl",e.formControl)("disableFunction",t.disableFunction),T.Db(2),T.vc("disabled",!0)("value",t.date)}},directives:[N.a,E.r,E.j,q.a,R.a,E.q,E.g,Y.o],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{constructor(){this.datetimePickerBasic=[{language:"html",code:n,fileName:"platform-datetime-picker-basic-example"},{language:"typescript",code:i,fileName:"platform-datetime-picker-basic-example",component:"PlatformDatetimePickerBasicExampleComponent"}],this.datetimePickerReactive=[{language:"html",code:l,fileName:"platform-datetime-picker-reactive-example"},{language:"typescript",code:m,fileName:"platform-datetime-picker-reactive-example",component:"PlatformDatetimePickerReactiveExampleComponent"}],this.datetimePickerTemplate=[{language:"html",code:d,fileName:"platform-datetime-picker-template-example"},{language:"typescript",code:c,fileName:"platform-datetime-picker-template-example",component:"PlatformDatetimePickerTemplateExampleComponent"}],this.datetimePickerDisableFunction=[{language:"html",code:r,fileName:"platform-datetime-picker-disable-function-example"},{language:"typescript",code:o,fileName:"platform-datetime-picker-disable-function-example",component:"PlatformDatetimePickerDisableFunctionExampleComponent"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["app-datetime-picker"]],decls:42,vars:4,consts:[["id","basic","componentName","datetime-picker"],[3,"exampleFiles"],["id","reactive","componentName","datetime-picker"],["id","template","componentName","datetime-picker"],["id","disable-function","componentName","datetime-picker"]],template:function(e,t){1&e&&(T.Wb(0,"fd-docs-section-title",0),T.Vc(1,"Basic Datetime Picker"),T.Vb(),T.Wb(2,"description"),T.Vc(3," Basic usage of Datetime Picker without Forms and with options like "),T.Wb(4,"code"),T.Vc(5,"meridian"),T.Vb(),T.Vc(6,", "),T.Wb(7,"code"),T.Vc(8,"allowNull"),T.Vb(),T.Vc(9,", "),T.Wb(10,"code"),T.Vc(11,"disabled"),T.Vb(),T.Vc(12,", pre-populating and changing dates."),T.Vb(),T.Wb(13,"component-example"),T.Rb(14,"fdp-platform-datetime-picker-basic-example"),T.Vb(),T.Rb(15,"code-example",1),T.Rb(16,"separator"),T.Wb(17,"fd-docs-section-title",2),T.Vc(18,"Datetime Picker with Reactive Forms"),T.Vb(),T.Wb(19,"description"),T.Vc(20," Usage of Datetime Picker with Platform Forms using Reactive Forms. When used with Platform Forms, the Datetime Picker will take 100% of its parent container width depending on the chosen column layout.\n"),T.Vb(),T.Wb(21,"component-example"),T.Rb(22,"fdp-platform-datetime-picker-reactive-example"),T.Vb(),T.Rb(23,"code-example",1),T.Rb(24,"separator"),T.Wb(25,"fd-docs-section-title",3),T.Vc(26,"Datetime Picker with Template Forms"),T.Vb(),T.Wb(27,"description"),T.Vc(28,"Usage of Datetime Picker with Platform Forms using Template Forms."),T.Vb(),T.Wb(29,"component-example"),T.Rb(30,"fdp-platform-datetime-picker-template-example"),T.Vb(),T.Rb(31,"code-example",1),T.Rb(32,"separator"),T.Wb(33,"fd-docs-section-title",4),T.Vc(34,"Datetime Picker with "),T.Wb(35,"code"),T.Vc(36,"[disableFunction]"),T.Vb(),T.Vb(),T.Rb(37,"description"),T.Wb(38,"component-example"),T.Rb(39,"fdp-platform-datetime-picker-disable-function-example"),T.Vb(),T.Rb(40,"code-example",1),T.Rb(41,"separator")),2&e&&(T.Db(15),T.vc("exampleFiles",t.datetimePickerBasic),T.Db(8),T.vc("exampleFiles",t.datetimePickerReactive),T.Db(8),T.vc("exampleFiles",t.datetimePickerTemplate),T.Db(9),T.vc("exampleFiles",t.datetimePickerDisableFunction))},directives:[C.a,M.a,x.a,y,S.a,W.a,O,B,H],encapsulation:2}),e})();var z=a("dor/"),$=a("RJTZ"),Z=a("Kpas");const Q=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Kb({type:e,selectors:[["app-datetime-picker-header"]],decls:29,vars:0,consts:[["routerLink","/core/datetime-picker"],["module","PlatformDatetimePickerModule","subPackage","form"]],template:function(e,t){1&e&&(T.Wb(0,"header"),T.Vc(1,"Datetime Picker"),T.Vb(),T.Wb(2,"description"),T.Wb(3,"p"),T.Vc(4," This is an extension of the DatetimePicker component present in "),T.Wb(5,"a",0),T.Vc(6,"fundamental-ngx/core"),T.Vb(),T.Vc(7,". "),T.Vb(),T.Wb(8,"h3"),T.Vc(9,"Platform specific enhancements:"),T.Vb(),T.Wb(10,"p"),T.Vc(11," Platform DatetimePicker component implements the FormFieldControl interface, and thus can be used within the FormField component. "),T.Vb(),T.Vb(),T.Wb(12,"description"),T.Vc(13," The DatetimePicker component "),T.Wb(14,"strong"),T.Vc(15,"relies on provided datetime implementation"),T.Vb(),T.Vc(16," ("),T.Wb(17,"code"),T.Vc(18,"DatetimeAdapter"),T.Vb(),T.Vc(19,") and "),T.Wb(20,"strong"),T.Vc(21,"datetime formats"),T.Vb(),T.Vc(22," ("),T.Wb(23,"code"),T.Vc(24,"DateTimeFormats"),T.Vb(),T.Vc(25,").\n"),T.Vb(),T.Rb(26,"import",1),T.Rb(27,"fd-header-tabs"),T.Rb(28,"router-outlet"))},directives:[z.a,M.a,p.f,$.a,Z.a,p.h],encapsulation:2}),e})(),children:[{path:"",component:J},{path:"api",component:u.a,data:{content:D.a.datetimePicker}}]}];let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T.Ob({type:e}),e.\u0275inj=T.Nb({imports:[[p.g.forChild(Q),b.a,f.f,s.k,s.b],p.g]}),e})()}}]);