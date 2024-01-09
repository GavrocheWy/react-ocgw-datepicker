/** Return a formatted version of a Date object
 * @param  {Date} date
 * @return {string}
 */


const formatDate = function (date: Date): any {
    if (!date) return;
    return (`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`)
}

export default formatDate