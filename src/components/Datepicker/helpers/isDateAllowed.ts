import roundDate from "./roundDate";

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