import roundDate from "./roundDate";

const isMonthAllowed = function (minDate: Date, maxDate: Date, updatedYear: number, updatedMonth: number): Boolean {
    if (!updatedYear || !updatedMonth) return true;
    if (maxDate && roundDate(maxDate, 'month') < new Date(updatedYear, updatedMonth)) return false;
    if (minDate && roundDate(minDate, 'month') > new Date(updatedYear, updatedMonth)) return false;
    return true;

}

export default isMonthAllowed