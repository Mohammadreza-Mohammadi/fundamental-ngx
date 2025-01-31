const currentMonth = new Date().getMonth() + 1;
const currentMonthWithTrailingZero = currentMonth.toString().padStart(2, '0');
const currentYear = new Date().getFullYear();
const currentYearShort = currentYear - Math.floor(currentYear / 100) * 100;

export const date = '1/1/1990';
export const date1 = `${currentMonth}/1/${currentYear}`;
export const date2 = '5/1/2020 - 5/15/2020';
export const date3 = `${currentMonth}/1/${currentYear} - ${currentMonth}/15/${currentYear}`;
export const date4 = `${currentMonth}/01/${currentYearShort} // ${currentMonth}/15/${currentYearShort}`;
export const date5 = `${currentMonth}/1/${currentYear}`;
export const date6 = `1.${currentMonth}.${currentYear} г.`;
export const date7 = `01/${currentMonth}/${currentYear}`;
export const date8 = `1.${currentMonth}.${currentYear}`;
export const date9 = '1/2/1990';
export const date10 = `${currentMonthWithTrailingZero}/01/${currentYearShort} // ${currentMonthWithTrailingZero}/15/${currentYearShort}`;
export const date11 = `01/${currentMonthWithTrailingZero}/${currentYear}`;
export const date12 = `1.${currentMonthWithTrailingZero}.${currentYear} г.`;
export const text = 'test';
export const highlightedColor = ['rgb(8,84,160)', 'rgba(8,84,160,1)'];
export const year2025 = 2025;
