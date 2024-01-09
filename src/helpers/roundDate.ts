/** Return a new Date object rounded down to day or month depending of the parameter
 * @param  {Date} date
 * @param  {string} period
 * @return {Date}
 */

const roundDate = function (date: Date, period: string): any {
    if (!date || !period) return;
    switch (period) {
        default: return date
        case 'day':
            return new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
            )
        case 'month':
            return new Date(
                date.getFullYear(),
                date.getMonth(),
            )
    }

}

export default roundDate