import createDay from "./createDay"

/** Return an array of dates to be displayed in the Datepicker when the user navigates into the Datepicker component
 * @param  {number} month
 * @param  {number} year
 * @return {Array}
 */

const updateDatepicker = function (month: number, year: number): Object[] {

    const newDates = []
    const dayOne = new Date(year, month, 1).getDay()
    const lastDate = new Date(year, month + 1, 0).getDate()
    const dayEnd = new Date(year, month, lastDate).getDay();
    const monthLastDate = new Date(year, month, 0).getDate();

    // Get the last dates of the previous month
    for (let i = dayOne; i > 0; i--) {
        const prevMonth = new Date(year, month - 1).getMonth()
        const prevYear = new Date(year, month - 1).getFullYear()
        newDates.push(createDay(monthLastDate - i + 1, prevMonth, prevYear, 'is-prev-month'))
    }

    // Get all dates of the current month
    for (let i = 1; i <= lastDate; i++) {
        newDates.push(createDay(i, month, year, 'is-current-month'))
    }

    // Get the first dates of the next month
    for (let i = dayEnd; i < 6; i++) {
        const nextMonth = new Date(year, month + 1).getMonth()
        const nextYear = new Date(year, month + 1).getFullYear()
        newDates.push(createDay(i - dayEnd + 1, nextMonth, nextYear, 'is-next-month'))
    }

    return (newDates)

}

export default updateDatepicker