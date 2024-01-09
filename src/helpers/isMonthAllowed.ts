import roundDate from "./roundDate";

/** Return true if the month is allowed to navigate on in the Datepicker component
 * @param  {Date} minDate
 * @param  {Date} maxDate
 * @param  {number} updatedYear
 * @param  {number} updatedMonth
 * @return {Boolean}
 */

const isMonthAllowed = function (minDate: Date, maxDate: Date, updatedYear: number, updatedMonth: number): Boolean {
    if (!updatedYear || updatedMonth === undefined) return true;
    if (maxDate && roundDate(maxDate, 'month') < new Date(updatedYear, updatedMonth)) return false;
    if (minDate && roundDate(minDate, 'month') > new Date(updatedYear, updatedMonth)) return false;
    return true;
}

export default isMonthAllowed