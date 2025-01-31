import { Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PopoverComponent } from './popover.component';

@Directive({
    selector: '[fdPopoverTrigger], [fd-popover-trigger]'
})
export class PopoverTriggerDirective implements OnDestroy {
    /** Set reference to Popover Component */
    @Input('fdPopoverTrigger')
    set popover(popover: PopoverComponent) {
        if (popover) {
            popover.trigger = this._elementRef;
            this._listenOnExpanded(popover);
        }
        this._setAriaAttributes(popover);
    }

    /** @hidden */
    @HostBinding('attr.aria-haspopup')
    ariaHasPopup: boolean;

    /** @hidden */
    @HostBinding('attr.aria-controls')
    ariaControls: string;

    /** @hidden */
    @HostBinding('attr.aria-expanded')
    ariaExpanded: boolean;

    /** @hidden */
    private _isExpandedSubscription: Subscription;

    /** @hidden */
    constructor(private _elementRef: ElementRef) {}

    /** @hidden */
    ngOnDestroy(): void {
        this._unsubscribeExpandedListener();
    }

    /** @hidden */
    private _listenOnExpanded(popover: PopoverComponent): void {
        this._unsubscribeExpandedListener();
        if (popover) {
            this._isExpandedSubscription = popover.isOpenChange
                .pipe(startWith(popover.isOpen))
                .subscribe((isOpen) => (this.ariaExpanded = isOpen));
        }
    }

    /** @hidden */
    private _setAriaAttributes(popover: PopoverComponent): void {
        this.ariaHasPopup = !!popover;
        this.ariaControls = popover ? popover.id : null;
    }

    /** @hidden */
    private _unsubscribeExpandedListener(): void {
        if (this._isExpandedSubscription) {
            this._isExpandedSubscription.unsubscribe();
        }
    }
}
