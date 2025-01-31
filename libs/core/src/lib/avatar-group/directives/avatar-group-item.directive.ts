import { Directive, ElementRef, HostListener, Optional, Inject, forwardRef } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

import { AvatarGroupComponent } from '../avatar-group.component';
import { AvatarGroupInterface } from '../avatar-group.interface';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-avatar-group-item]',
    host: { class: 'fd-avatar-group__item' }
})
export class AvatarGroupItemDirective implements FocusableOption {
    /** Item disable state */
    disabled = false;

    /** @hidden */
    constructor(
        private readonly _elementRef: ElementRef<HTMLElement>,
        @Optional() @Inject(forwardRef(() => AvatarGroupComponent)) private readonly _component: AvatarGroupInterface
    ) {}

    /** @hidden */
    get _element(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    /** Handler for mouse events */
    @HostListener('click')
    onClick(): void {
        if (this._component) {
            this._component._setActiveItem(this);
        }
    }

    /** @hidden */
    focus(): void {
        this._element.focus();
    }
}
