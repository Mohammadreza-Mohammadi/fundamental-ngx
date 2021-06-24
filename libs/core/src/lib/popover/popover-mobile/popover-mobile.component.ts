import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    Optional,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
    MobileModeBase,
    MOBILE_MODE_CONFIG,
    MobileModeControl,
    MobileModeConfigToken
} from '@fundamental-ngx/core/mobile-mode';
import { PopoverInterface, POPOVER_COMPONENT } from '../popover.interface';
import { takeUntil } from 'rxjs/operators';
import { DialogService } from '@fundamental-ngx/core/dialog';

@Component({
    selector: 'fd-popover-mobile',
    templateUrl: './popover-mobile.component.html',
    styleUrls: ['./popover-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PopoverMobileComponent extends MobileModeBase<PopoverInterface> implements OnInit, OnDestroy {
    /** @hidden
     * from mobile class can not prefix _,
     * to avoid build issues
    */
    childContent: TemplateRef<any> = undefined;

    /** @hidden */
    @ViewChild('dialogTemplate')
    _dialogTemplate: TemplateRef<any>;

    /** Current popover title */
    title: string;

    /** Dialog body content */
    viewBody: TemplateRef<any>;
    /** Dialog footer content */
    viewFooter: TemplateRef<any>;

    /** @hidden */
    private _subscriptions = new Subscription();

    constructor(
        elementRef: ElementRef,
        dialogService: DialogService,
        private _changeDetectorref: ChangeDetectorRef,
        @Inject(POPOVER_COMPONENT) _popoverComponent: PopoverInterface,
        @Optional() @Inject(MOBILE_MODE_CONFIG) mobileModes: MobileModeConfigToken[]
    ) {
        super(elementRef, dialogService, _popoverComponent, MobileModeControl.POPOVER, mobileModes);
    }

    /** @hidden */
    ngOnInit(): void {
        this._listenOnPopoverOpenChange();

        this.title = this.mobileConfig.title || '';
        this.viewBody = (<any> this.childContent).popoverBodyContentTemplate;
        this.viewFooter = (<any> this.childContent).popoverFooterContentTemplate;

        this._changeDetectorref.markForCheck();
    }

    /** @hidden */
    ngOnDestroy(): void {
        this.dialogRef.close();
        super.onDestroy();
        this._subscriptions.unsubscribe();
    }

    /** Closes the Dialog and Popover component */
    close(): void {
        this.dialogRef.close();
        this._component.close();
    }

    /** @hidden Opens/closes the Dialog based on Popover isOpenChange events */
    private _listenOnPopoverOpenChange(): void {
        this._subscriptions.add(
            this._component.isOpenChange
                .pipe(takeUntil(this._onDestroy$))
                .subscribe((isOpen) => {
                    if (isOpen) {
                        this._openDialog();
                    } else {
                        this.dialogRef.hide(true);
                    }
                })
        );
    }

    /** @hidden Opens the Dialog */
    private _openDialog(): void {
        this.dialogRef = this._dialogService.open(this._dialogTemplate, {
            ...this.dialogConfig,
            mobile: true,
            focusTrapped: false,
            verticalPadding: true,
            escKeyCloseable: false,
            backdropClickCloseable: false,
            container: this._elementRef.nativeElement,
            responsivePadding: true,
        });
    }
}