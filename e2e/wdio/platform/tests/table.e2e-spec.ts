import { TablePo } from '../pages/table.po';
import {
    acceptAlert,
    click,
    doesItExist,
    getAlertText,
    getAttributeByName,
    getElementArrayLength, getElementClass,
    getElementPlaceholder,
    getText,
    getValue,
    isElementClickable,
    isElementDisplayed,
    refreshPage,
    scrollIntoView,
    setValue,
    waitForElDisplayed,
    waitForPresent
} from '../../driver/wdio';
import { checkLtrOrientation, checkRtlOrientation } from '../../helper/assertion-helper';
import {
    alertTestText1,
    alertTestText2,
    testText,
    tableCellArr,
    descriptionStartTestText,
    descriptionEndTestText,
    priceStartTestText,
    priceEndTestText,
    nameStartTestText,
    nameEndTestText,
    tableCellArr2,
    testText2,
    testText3,
    tableCellArr3,
    tableCellArr4,
    testTextSearch,
    testTextName,
    tableCellArr5,
    testText5,
    testText4,
    tableCellArr6,
    placeholderTestText,
    astroTestText,
    testText7,
    pharetraTestText,
    nuncTestText, massaTestText
} from '../fixtures/appData/table-contents';

describe('Table component test suite', function() {
    const tablePage = new TablePo();
    const {
        tableDefaultExample, button, input, tableRow, tableCell, tableCustomWidthExample, tableActivableExample,
        tableSingleRowSelectionExample, tableSortableExample, buttonSortedBy, barButton, tableCellDescription, tableCellPrice,
        tableCellName, buttonSortedOrder, tableMultipleRowSelectionExample, tableGroupableExample, tableFreezableExample,
        tableLoadingExample, busyIndicator, buttonSearch, tablePageScrollingExample, tableInitialStateExample,
        arrowButton, tableNavigatableRowIndicatorExample, tableFilterableExample, filterItem, filterByColorItem,
        tableCellStatusColor, tableCellStatus, tableP13ColumnsExample, dialogCompactInput, dialogItemText, dialogMoveToBottom,
        footerButtonOk, dialogItem, columnHeader, tableP13SortExample, tableP13FilterExample, tableP13GroupExample,
        popoverDropdownButton, buttonAdd, buttonRemove, dialogInput, expandedButton, tableCustomColumnExample, inputFields,
        playgroundExample, fdpTable, optionCondensed, optionCozy, optionCompact, dropdown, optionSingle, optionMultiple,
        tableCellFixed, checkbox

    } = tablePage;

    beforeAll(() => {
        tablePage.open();
    }, 1);

    afterEach(() => {
        refreshPage();
        waitForPresent(tableDefaultExample);
    }, 1);

    describe('Check Simple Table example', function() {

        it('should check alert messages', () => {
            checkAlertMessages(tableDefaultExample, 1, 2);
        });

        it('should check searching table item', () => {
            findElementInTable(tableDefaultExample, tableCellArr);
        });
    });

    describe('Check Custom Column Width & Column Resizing', function() {

        it('should check alert messages', () => {
            checkAlertMessages(tableCustomWidthExample, 1, 2);
        });

        it('should check searching table item', () => {
            findElementInTable(tableCustomWidthExample, tableCellArr);
        });
    });

    describe('Check Activable Rows', function() {

        it('should check alert messages', () => {
            checkAlertMessages(tableActivableExample, 1, 2);
        });

        it('should check searching table item', () => {
            findElementInTable(tableActivableExample, tableCellArr);
        });
    });

    describe('Check Custom Column', function() {

        it('should check searching table item', () => {
            scrollIntoView(tableCustomColumnExample);
            setValue(tableCustomColumnExample + input, testText);
            click(tableCustomColumnExample + button, 1);
            const rowLength = getElementArrayLength(tableCustomColumnExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tableCustomColumnExample + tableRow + tableCell);
            for (let i = 0; i < cellLength; i++) {
                if (i === 1) {
                    continue;
                }
                expect(getText(tableCustomColumnExample + tableRow + tableCell, i)).toBe(tableCellArr6[i]);
            }
        });

        it('should check possible to change description', () => {
            scrollIntoView(tableCustomColumnExample);
            setValue('[id="fdp-id-15"]', 'test');
            expect(getValue('[id="fdp-id-15"]')).toBe('test');
        });
    });

    describe('Check Single Row Selection', function() {

        it('should check searching table item', () => {
            scrollIntoView(tableSingleRowSelectionExample);
            setValue(tableSingleRowSelectionExample + input, testText);
            click(tableSingleRowSelectionExample + button, 1);
            const rowLength = getElementArrayLength(tableSingleRowSelectionExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tableSingleRowSelectionExample + tableRow + tableCell);
            for (let i = 1; i < cellLength; i++) {
                expect(getText(tableSingleRowSelectionExample + tableRow + tableCell, i)).toBe(tableCellArr[i - 1]);
            }
        });
    });

    describe('Check Multi Row Selection', function() {

        it('should verify checkboxes', () => {
            checkCheckbox(tableMultipleRowSelectionExample);
        });
    });

    describe('Check Column Sorting', function() {

        it('should check searching table item', () => {
            findElementInTable(tableSortableExample, tableCellArr);
        });

        it('should check ascending sorting by name, description and price', () => {
            scrollIntoView(tableSortableExample);
            chooseSortOptionBy(tableSortableExample, 1);
            expect(getText(tableSortableExample + tableCellDescription)).toBe(descriptionStartTestText);
            expect(getText(tableSortableExample + tableCellDescription, 15)).toBe(descriptionEndTestText);

            chooseSortOptionBy(tableSortableExample, 2);
            expect(getText(tableSortableExample + tableCellPrice)).toBe(priceStartTestText);
            expect(getText(tableSortableExample + tableCellPrice, 15)).toBe(priceEndTestText);

            chooseSortOptionBy(tableSortableExample, 0);
            expect(getText(tableSortableExample + tableCellName)).toBe(nameStartTestText);
            expect(getText(tableSortableExample + tableCellName, 15)).toBe(nameEndTestText);
        });

        it('should check descending sorting by name, description and price', () => {
            scrollIntoView(tableSortableExample);
            click(tableSortableExample + button, 1);
            click(buttonSortedOrder, 1);
            click(buttonSortedBy, 1);
            click(barButton);
            expect(getText(tableSortableExample + tableCellDescription)).toBe(descriptionEndTestText);
            expect(getText(tableSortableExample + tableCellDescription, 15)).toBe(descriptionStartTestText);

            chooseSortOptionBy(tableSortableExample, 2);
            expect(getText(tableSortableExample + tableCellPrice)).toBe(priceEndTestText);
            expect(getText(tableSortableExample + tableCellPrice, 15)).toBe(priceStartTestText);

            chooseSortOptionBy(tableSortableExample, 0);
            expect(getText(tableSortableExample + tableCellName)).toBe(nameEndTestText);
            expect(getText(tableSortableExample + tableCellName, 15)).toBe(nameStartTestText);
        });
    });

    describe('Check Column Filtering', function() {

        it('should check searching table item', () => {
            findElementInTable(tableFilterableExample, tableCellArr, 1);
        });

        it('should check filtering by status color', () => {
            chooseFilter(2, 1);
            const rowLength = getElementArrayLength(tableFilterableExample + tableRow);
            for (let i = 0; i < rowLength; i++) {
                expect(getText(tableCellStatusColor, i)).toBe('positive');
            }

            chooseFilter(2, 2);
            const tableRowLength = getElementArrayLength(tableFilterableExample + tableRow);
            for (let i = 0; i < tableRowLength; i++) {
                expect(getText(tableCellStatusColor, i)).toBe('negative');
            }

            chooseFilter(2, 3);
            expect(doesItExist(tableFilterableExample + tableRow)).toBe(false, '');
        });

        it('should check filtering by status', () => {
            chooseFilter(1, 0);
            const rowLength = getElementArrayLength(tableFilterableExample + tableRow);
            for (let i = 0; i < rowLength; i++) {
                expect(getText(tableFilterableExample + tableCellStatus, i)).toBe('Out of stock');
            }
            refreshPage();
            chooseFilter(1, 1);
            const tableRowLength = getElementArrayLength(tableFilterableExample + tableRow);
            for (let i = 0; i < tableRowLength; i++) {
                expect(getText(tableFilterableExample + tableCellStatus, i)).toBe(tableCellArr[3]);
            }
        });
    });

    describe('Check Column Grouping', function() {

        it('should check searching table item', () => {
            scrollIntoView(tableGroupableExample);
            setValue(tableGroupableExample + input, testText);
            click(tableGroupableExample + button, 1);
            const rowLength = getElementArrayLength(tableGroupableExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tableGroupableExample + tableRow + tableCell);
            for (let i = 1; i < cellLength; i++) {
                expect(getText(tableGroupableExample + tableRow + tableCell, i)).toBe(tableCellArr[i - 1]);
            }
        });

        it('should verify checkboxes', () => {
            checkCheckbox(tableGroupableExample);
        });

        it('should check ascending sorting by name and status', () => {
            scrollIntoView(tableGroupableExample);
            chooseSortOptionBy(tableGroupableExample, 0);
            expect(getText(tableGroupableExample + tableCellDescription)).toBe(tableCellArr[1]);
            expect(getText(tableGroupableExample + tableCellDescription, 15)).toBe(pharetraTestText);

            chooseSortOptionBy(tableGroupableExample, 1);
            expect(getText(tableGroupableExample + tableCellDescription)).toBe(nuncTestText);
            expect(getText(tableGroupableExample + tableCellDescription, 15)).toBe(massaTestText);
        });

        it('should check descending sorting by name and status', () => {
            scrollIntoView(tableGroupableExample);
            click(tableGroupableExample + button, 1);
            click(buttonSortedOrder, 1);
            click(buttonSortedBy, 1);
            click(barButton);
            chooseSortOptionBy(tableGroupableExample, 0);
            expect(getText(tableGroupableExample + tableCellDescription)).toBe(pharetraTestText);
            expect(getText(tableGroupableExample + tableCellDescription, 15)).toBe(tableCellArr[1]);

            chooseSortOptionBy(tableGroupableExample, 1);
            expect(getText(tableGroupableExample + tableCellDescription)).toBe(tableCellArr[1]);
            expect(getText(tableGroupableExample + tableCellDescription, 15)).toBe('integer ac leo pellentesque');
        });
    });

    describe('Check Column Freezing', function() {

        it('should check searching table item', () => {
            scrollIntoView(tableFreezableExample);
            setValue(tableFreezableExample + input, tableCellArr[1]);
            click(tableFreezableExample + button, 1);
            const rowLength = getElementArrayLength(tableFreezableExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tableFreezableExample + tableRow + tableCell);
            for (let i = 1; i < cellLength; i++) {
                expect(getText(tableFreezableExample + tableRow + tableCell, i)).toBe(tableCellArr[i - 1]);
            }
        });

        it('should verify checkboxes', () => {
            checkCheckbox(tableFreezableExample);
        });
    });

    describe('Check Loading/Busy State', function() {

        it('should check alert messages', () => {
            checkAlertMessages(tableLoadingExample, 2, 3);
        });

        it('should check searching table item', () => {
            scrollIntoView(tableLoadingExample);
            click(tableLoadingExample + button);
            findElementInTable(tableLoadingExample, tableCellArr);
        });

        it('should check busy indicator', () => {
            scrollIntoView(tableLoadingExample);
            expect(isElementDisplayed(busyIndicator)).toBe(true, 'busy indicator isnt displayed');
            click(tableLoadingExample + button);
            expect(doesItExist(busyIndicator)).toBe(false, 'busy indicator still displayed');
        });
    });

    describe('Check Loading/Busy State', function() {

        it('should check searching table item', () => {
            scrollIntoView(tablePageScrollingExample);
            setValue(tablePageScrollingExample + input, testText2);
            click(tablePageScrollingExample + buttonSearch);
            expect(isElementDisplayed(busyIndicator)).toBe(true, 'busy indicator isnt displayed');
            const rowLength = getElementArrayLength(tablePageScrollingExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tablePageScrollingExample + tableRow + tableCell);
            for (let i = 0; i < cellLength; i++) {
                expect(getText(tablePageScrollingExample + tableRow + tableCell, i)).toBe(tableCellArr2[i]);
            }
        });
    });

    describe('Check Initial State', function() {

        it('should check searching table item', () => {
            scrollIntoView(tableInitialStateExample);
            setValue(tableInitialStateExample + input, testText3);
            click(tableInitialStateExample + buttonSearch);
            const rowLength = getElementArrayLength(tableInitialStateExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(tableInitialStateExample + tableRow + tableCell);
            for (let i = 0; i < cellLength; i++) {
                expect(getText(tableInitialStateExample + tableRow + tableCell, i)).toBe(tableCellArr3[i]);
            }
        });

        it('should check cell expanded', () => {
            scrollIntoView(tableInitialStateExample);
            click(arrowButton);
            click(arrowButton, 1);

            expect(getAttributeByName(tableInitialStateExample + tableCell, 'aria-expanded'))
                .toBe('false');
            expect(getAttributeByName(tableInitialStateExample + tableCell, 'aria-expanded'))
                .toBe('false');
            expect(doesItExist(tableInitialStateExample + tableRow)).toBe(false, 'table row still displayed');
        });
    });

    describe('Check Table columns visibility and order', function() {

        it('should check searching table item', () => {
            findElementInTable(tableP13ColumnsExample, tableCellArr4);
        });

        it('should check searching and placeholder in dialog', () => {
            checkPlaceholder(tableP13ColumnsExample);
            checkSearchingInDialog();
        });

        it('should check sorting of columns', () => {
            checkSortingColumns(tableP13ColumnsExample);
        });
    });

    describe('Check Sorting by multiple columns', function() {

        it('should check searching table item', () => {
            findElementInTable(tableP13SortExample, tableCellArr4);
        });

        it('should check sorting ascending and descending by name', () => {
            scrollIntoView(tableP13SortExample);
            click(tableP13SortExample + button, 1);
            click(popoverDropdownButton);
            click(buttonSortedBy);
            click(footerButtonOk);
            expect(getText(tableP13SortExample + tableCellName)).toBe(testText);
            expect(getText(tableP13SortExample + tableCellName, 15)).toBe(nameEndTestText);

            click(tableP13SortExample + columnHeader);
            click(filterByColorItem, 1);
            expect(getText(tableP13SortExample + tableCellName)).toBe(nameEndTestText);
            expect(getText(tableP13SortExample + tableCellName, 15)).toBe(testText);
        });

        it('should check sorting ascending and descending by price', () => {
            scrollIntoView(tableP13SortExample);
            click(tableP13SortExample + button, 1);
            click(buttonAdd);
            click(buttonRemove);
            click(popoverDropdownButton);
            click(buttonSortedBy, 1);
            click(footerButtonOk);

            expect(getText(tableP13SortExample + tableCellPrice)).toBe(priceStartTestText);
            expect(getText(tableP13SortExample + tableCellPrice, 15)).toBe(priceEndTestText);

            click(tableP13SortExample + columnHeader, 2);
            click(filterByColorItem, 1);
            expect(getText(tableP13SortExample + tableCellPrice)).toBe(priceEndTestText);
            expect(getText(tableP13SortExample + tableCellPrice, 15)).toBe(priceStartTestText);
        });

        it('should check searching and placeholder in dialog', () => {
            checkPlaceholder(tableP13SortExample, 2);
        });

        it('should check sorting of columns', () => {
            checkSortingColumns(tableP13SortExample, 2);
        });
    });

    describe('Check Filtering by multiple columns', function() {

        it('should check searching table item', () => {
            findElementInTable(tableP13FilterExample, tableCellArr5);
        });

        it('should check filtering with include and exclude', () => {
            scrollIntoView(tableP13FilterExample);
            click(tableP13FilterExample + button, 1);
            setValue(dialogInput, astroTestText);
            click(expandedButton, 1);
            click(popoverDropdownButton, 2);
            click(filterByColorItem, 1);
            setValue(dialogInput, testText7, 1);
            click(footerButtonOk);

            const rowLength = getElementArrayLength(tableP13FilterExample + tableRow);
            expect(rowLength).toEqual(1);
            expect(getText(tableP13FilterExample + tableRow + tableCell)).toBe(testText4);
            expect(getText(tableP13FilterExample + tableRow + tableCell, 1)).toBe(testText5);

        });

        it('should check searching and placeholder in dialog', () => {
            checkPlaceholder(tableP13FilterExample, 2);
            checkSearchingInDialog();
        });

        it('should check sorting of columns', () => {
            checkSortingColumns(tableP13FilterExample, 2);
        });
    });

    describe('Check Grouping by multiple columns', function() {

        it('should check searching table item', () => {
            findElementInTable(tableP13GroupExample, tableCellArr4);
        });

        it('should check searching and placeholder in dialog', () => {
            checkPlaceholder(tableP13GroupExample, 2);
            checkSearchingInDialog();
        });

        it('should check sorting of columns', () => {
            checkSortingColumns(tableP13GroupExample, 2);
        });
    });

    describe('Check  Navigatable rows', function() {

        it('should check clickable elements', () => {
            scrollIntoView(tableNavigatableRowIndicatorExample);
            click(tableNavigatableRowIndicatorExample + button);
            expect(isElementClickable(tableNavigatableRowIndicatorExample + button, 1))
                .toBe(true, 'button isnt clickable');

            const rowLength = getElementArrayLength(tableNavigatableRowIndicatorExample + tableRow);
            for (let i = 0; i < rowLength; i++) {
                expect(isElementClickable(tableNavigatableRowIndicatorExample + tableRow, i))
                    .toBe(true, `table row with index ${i} not clickable`);
            }
        });
    });

    describe('Check placeholders', function() {

        it('should check placeholders in all input fields', () => {
            const inputLength = getElementArrayLength(inputFields);
            for (let i = 0; i < inputLength; i++) {
                expect(getElementPlaceholder(inputFields, i)).toBe(placeholderTestText);
            }
        });
    });

    describe('Check playground', function() {

        it('should check searching table item', () => {
            scrollIntoView(playgroundExample);
            setValue(playgroundExample + inputFields, tableCellArr[1]);
            click(playgroundExample + buttonSearch);
            const rowLength = getElementArrayLength(playgroundExample + tableRow);
            expect(rowLength).toEqual(1);
            const cellLength = getElementArrayLength(playgroundExample + tableRow + tableCell);
            for (let i = 0; i < cellLength; i++) {
                expect(getText(playgroundExample + tableRow + tableCell, i)).toBe(tableCellArr[i]);
            }
        });

        it('should check clickability action button', () => {
            scrollIntoView(playgroundExample);
            expect(isElementClickable(playgroundExample + button, 1)).toBe(true, ' action button not clickable');
        });

        it('should check table selection mode', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + dropdown);
            click(optionCompact);
            expect(getElementClass(playgroundExample + fdpTable)).toContain('fd-table--compact');

            click(playgroundExample + dropdown);
            click(optionCozy);
            expect(getElementClass(playgroundExample + fdpTable)).toContain('fdp-table');

            click(playgroundExample + dropdown);
            click(optionCondensed);
            expect(getElementClass(playgroundExample + fdpTable)).toContain('fd-table--condensed');

        });

        it('should should check table content density', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + dropdown, 1);
            click(optionSingle);
            expect(getElementClass(playgroundExample + tableCellFixed)).toContain('fdp-table__cell--selection');

            click(playgroundExample + dropdown, 1);
            click(optionMultiple);
            expect(getElementClass(playgroundExample + tableCellFixed)).toContain('fd-table__cell--checkbox');
        });

        it('should should check table without horizontal borders', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + checkbox);
            expect(getElementClass(playgroundExample + fdpTable)).toContain('fd-table--no-horizontal-borders');
        });

        it('should should check table without vertical borders', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + checkbox, 1);
            expect(getElementClass(playgroundExample + fdpTable)).toContain('fd-table--no-vertical-borders');
        });

        it('should should check table without all borders', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + checkbox, 2);
            expect(getElementClass(playgroundExample + fdpTable))
                .toContain('fd-table--no-horizontal-borders fd-table--no-vertical-borders');
        });

        it('should check busy indicator appearance', () => {
            scrollIntoView(playgroundExample);
            click(playgroundExample + checkbox, 4);
            expect(isElementDisplayed(playgroundExample + busyIndicator))
                .toBe(true, 'busy indicator not displayed');
        });
    });

    describe('Check orientation', function() {

        it('should check RTL and LTR orientation', () => {
            const exampleAreaContainersArr = '.fd-doc-component';
            const rtlSwitcherArr = 'rtl-switch .fd-switch__handle';

            const switcherLength = getElementArrayLength(exampleAreaContainersArr);
            for (let i = 0; i < switcherLength; i++) {
                if (i === 13) {
                    continue;
                }
                scrollIntoView(rtlSwitcherArr, i);
                click(rtlSwitcherArr, i);
                checkRtlOrientation(exampleAreaContainersArr, i);
                scrollIntoView(rtlSwitcherArr, i);
                click(rtlSwitcherArr, i);
                waitForElDisplayed(exampleAreaContainersArr, i);
                checkLtrOrientation(exampleAreaContainersArr, i);
            }
        });
    });

    xdescribe('Check visual regression', function() {

        it('should check examples visual regression', () => {
            tablePage.saveExampleBaselineScreenshot();
            expect(tablePage.compareWithBaseline()).toBeLessThan(5);
        });
    });

    function checkAlertMessages(selector: string, index1: number, index2: number): void {
        scrollIntoView(selector + button);
        click(selector + button, index1);
        expect(getAlertText()).toBe(alertTestText1);
        acceptAlert();

        click(selector + button, index2);
        expect(getAlertText()).toBe(alertTestText2);
        acceptAlert();
    }

    function findElementInTable(selector: string, arr: string[], count: number = 0): void {
        scrollIntoView(selector);
        setValue(selector + input, testText);
        click(selector + buttonSearch);
        const rowLength = getElementArrayLength(selector + tableRow);
        expect(rowLength).toEqual(1);
        const cellLength = getElementArrayLength(selector + tableRow + tableCell);
        for (let i = 0; i < cellLength - count; i++) {
            expect(getText(selector + tableRow + tableCell, i)).toBe(arr[i]);
        }
    }

    function chooseSortOptionBy(selector: string, index: number): void {
        click(selector + button, 1);
        click(buttonSortedBy, index);
        click(barButton);
    }

    function checkCheckbox(selector): void {
        scrollIntoView(selector);
        click(selector + 'fd-checkbox');
        const checkboxLength = getElementArrayLength(selector + tableRow);
        for (let i = 0; i < checkboxLength; i++) {
            expect(getAttributeByName(selector + tableRow, 'aria-selected', i))
                .toBe('true');
        }
    }

    function chooseFilter(indexFilter: number, indexBy): void {
        scrollIntoView(tableFilterableExample);
        click(tableFilterableExample + button, 1);
        click(filterItem, indexFilter);
        click(filterByColorItem, indexBy);
        click(barButton);
    }

    function checkPlaceholder(selector: string, index: number = 1): void {
        scrollIntoView(selector);
        click(selector + button, index);
        expect(getElementPlaceholder(dialogCompactInput)).toBe(testTextSearch);
    }

    function checkSearchingInDialog(): void {
        setValue(dialogCompactInput, testTextName);
        const itemLength = getElementArrayLength(dialogItemText);
        expect(itemLength).toEqual(1);
        expect(getText(dialogItemText)).toBe(testTextName);
    }

    function checkSortingColumns(selector: string, index: number = 1): void {
        scrollIntoView(selector);
        click(selector + button, index);
        click(dialogMoveToBottom);
        click(dialogItem);
        click(footerButtonOk);
        expect(getText(selector + columnHeader, 3)).toBe(testTextName);
    }
});