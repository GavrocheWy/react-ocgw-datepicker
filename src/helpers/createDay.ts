interface DayDate {
    day: number;
    month: number;
    year: number;
    classes: string;
    fullDate: Date;
}

/** Return an object "day" in the right format to be displayed in the Datepicker
 * @param  {number} day
 * @param  {number} month
 * @param  {number} year
 * @param  {string} classes
 * @return {Object}
 */

const createDay = function (day: number, month: number, year: number, classes: string): DayDate {
    return {
        day: day,
        month: month,
        year: year,
        classes: classes,
        fullDate: new Date(year, month, day)
    }
}

export default createDay