import roundDate from "./roundDate";

/** Return true if the date is allowed to be selected by the user
 * @param  {Date} minDate
 * @param  {Date} maxDate
 * @param  {Date} date
 * @return {Boolean}
 */

const isDateAllowed = function (minDate: Date, maxDate: Date, date: Date): Boolean {

    if (minDate && date < roundDate(minDate, 'day')) {
        return false
    }

    if (maxDate && date > roundDate(maxDate, 'day')) {
        return false
    }

    return true;
}

export default isDateAllowed