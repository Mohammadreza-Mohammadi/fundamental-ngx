import { ChangeDetectorRef, Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PopoverComponent } from '@fundamental-ngx/core';
import { IconTabBarItem } from '../../types';

@Directive()
export abstract class IconTabBarPopoverClass implements OnChanges {

    @ViewChild('popover')
    popover: PopoverComponent;

    @Input()
    items: IconTabBarItem[];

    @Input()
    isSeparators = false;

    @Output()
    selectedExtraItem: EventEmitter<IconTabBarItem> = new EventEmitter<IconTabBarItem>();

    constructor(
        protected _cd: ChangeDetectorRef,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.items) {
            this._setStyles();
        }
    }

    private _setStyles(items: any[] = this.items): void {
        items.forEach(item => {
            if (item.color) {
                item.cssClasses = [`fd-list__item--${item.color}`];
            }
            if (Array.isArray(item.subItems)) {
                this._setStyles(item.subItems);
            }
        });
    }

    selectItem(selectedItem: IconTabBarItem): void {
        this.selectedExtraItem.emit(selectedItem);
        this.popover.close();
        // this._cd.detectChanges();
    }
}
