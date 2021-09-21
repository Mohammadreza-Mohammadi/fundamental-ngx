import { BaseComponentPo } from './base-component.po';
import { waitForElDisplayed, waitForPresent } from '../../driver/wdio';

export class TablePo extends BaseComponentPo {
    readonly url = '/table';

    tableDefaultExample = 'fdp-platform-table-default-example ';
    tableCustomWidthExample = 'fdp-platform-table-custom-width-example ';
    tableActivableExample = 'fdp-platform-table-activable-example ';
    tableCustomColumnExample = 'fdp-platform-table-custom-column-example ';
    tableSingleRowSelectionExample = 'fdp-platform-table-single-row-selection-example ';
    tableMultipleRowSelectionExample = 'fdp-platform-table-multiple-row-selection-example ';
    tableSortableExample = 'fdp-platform-table-sortable-example ';
    tableFilterableExample = 'fdp-platform-table-filterable-example ';
    tableGroupableExample = 'fdp-platform-table-groupable-example ';
    tableFreezableExample = 'fdp-platform-table-freezable-example ';
    tableLoadingExample = 'fdp-platform-table-loading-example ';
    tablePageScrollingExample = 'fdp-platform-table-page-scrolling-example ';
    tableInitialStateExample = 'fdp-platform-table-initial-state-example ';
    tableP13ColumnsExample = 'fdp-platform-table-p13-columns-example ';
    tableP13SortExample = 'fdp-platform-table-p13-sort-example ';
    tableP13FilterExample = 'fdp-platform-table-p13-filter-example ';
    tableP13GroupExample = 'fdp-platform-table-p13-group-example ';
    tableNavigatableRowIndicatorExample = 'fdp-platform-table-navigatable-row-indicator-example ';

    button = 'button';
    buttonSearch = '.fdp-search-field__submit';
    tableRow = '.fd-dnd-item ';
    input = 'input';
    tableCell = 'td:not(.fdp-table__cell--empty)';
    buttonSortedBy = '.fd-list__item.ng-star-inserted';
    barButton = 'fd-button-bar ' + this.button;
    tableCellDescription = '[headers*="description"]';
    tableCellPrice = '[headers*="price"]';
    tableCellName = '[headers*="name"]';
    buttonSortedOrder = 'li.fd-list__item';
    checkbox = '.fd-checkbox__label';
    busyIndicator = 'fd-busy-indicator .fd-busy-indicator';
    arrowButton = '.fdp-table__cell--expand';
    filterItem = '.fd-list__item--link';
    filterByColorItem = '.fd-list__item';
    tableCellStatusColor = '[headers*="statusColor"]';
    tableCellStatus = ' [headers*="8__status"]:not([headers="fdp-table-8__statusColor"])';
    dialogCompactInput = 'fd-dialog-body .fd-input--compact';
    dialogItem = '.fd-list__item.ng-star-inserted';
    dialogItemText = '.fd-select-item--active  .fd-list__title';
    dialogMoveToBottom = '[aria-label="Move to Bottom"]';
    footerButtonOk = 'fd-dialog-footer-button button';
    columnHeader = '[role="columnheader"] div';
    popoverDropdownButton = 'fd-popover-control button';
    buttonAdd = '[title="Add new"]';
    buttonRemove = '[title="Remove"]';
    dialogInput = 'fdp-table-filter-rule input';
    expandedButton = '.fd-panel__expand button';
    inputFields = '.fdp-search-field__input';
    playgroundExample = 'playground ';
    dropdown = 'select';
    optionCompact = '[value="compact"]';
    optionCozy = '[value="cozy"]';
    optionCondensed = '[value="condensed"]';
    fdpTable = 'fdp-table';
    optionSingle = '[value="single"]';
    optionMultiple = '[value="multiple"]';
    tableCellFixed = 'thead .fd-table__cell--fixed';
    playgroundSchemaInput = '.form-control.fd-input';
    toolbarText = '.fd-label.fd-toolbar__overflow-label';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
        waitForPresent(this.tableDefaultExample);
    }

    getScreenshotFolder(): object {
        return super.getScreenshotFolder(this.url);
    }

    saveExampleBaselineScreenshot(specName: string = 'table'): void {
        super.saveExampleBaselineScreenshot(specName, this.getScreenshotFolder());
    }

    compareWithBaseline(specName: string = 'table'): any {
        return super.compareWithBaseline(specName, this.getScreenshotFolder());
    }
}
