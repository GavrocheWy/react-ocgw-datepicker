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