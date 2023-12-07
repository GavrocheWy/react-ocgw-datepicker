import React from "react";
import { useState, useEffect, useRef } from 'react'
import './Datepicker.css';
// // Helpers
import formatDate from './helpers/formatDate'
import updateDatepicker from './helpers/updateDatepicker'
import isDateAllowed from './helpers/isDateAllowed'
import isMonthAllowed from './helpers/isMonthAllowed'
// // Options
import MONTHS from './options/months'
import DAYS from './options/days'

const Datepicker = (callback: any, initialDate: Date = new Date(), minDate: Date, maxDate: Date, inputClasses: string[]) => {

    const [isDatepickerOpen, setIsDatepickerOpen] = useState<Boolean>(false)
    const [isDateConfigOpen, setIsDateConfigOpen] = useState<Boolean>(false)
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate ? initialDate : new Date())
    const [year, setYear] = useState<number>(selectedDate.getFullYear())
    const [month, setMonth] = useState<number>(selectedDate.getMonth())
    const [dates, setDates] = useState<Object[]>([])
    const [formattedSelectedDate, setFormattedSelectedDate] = useState<string>(formatDate(selectedDate))
    const [nextYear, setNextYear] = useState<number>()
    const [nextMonth, setNextMonth] = useState<number>()
    const [prevYear, setPrevYear] = useState<number>()
    const [prevMonth, setPrevMonth] = useState<number>()
    const datepickerRef = useRef<HTMLElement>(null)

    // Change month and newYear when date is modified
    useEffect(() => {
        if (!isDateAllowed(minDate, maxDate, selectedDate)) return;
        callback && callback(selectedDate)
        setFormattedSelectedDate(formatDate(selectedDate))
        setYear(selectedDate.getFullYear())
        setMonth(selectedDate.getMonth())
        setIsDatepickerOpen(false)
        setIsDateConfigOpen(false)
    }, [selectedDate, callback, minDate, maxDate])

    // Change datepicker display when month and year are modified
    useEffect(() => {
        setDates(updateDatepicker(month, year))
        setNextYear(new Date(year, month + 1).getFullYear())
        setNextMonth(new Date(year, month + 1).getMonth())
        setPrevYear(new Date(year, month - 1).getFullYear())
        setPrevMonth(new Date(year, month - 1).getMonth())
    }, [month, year])

    // Detect click outside datepicker
    useEffect(() => {
        if (!isDatepickerOpen) return;
        // Use this variable to prevent the first click outside the datepicker (when we open it) to close the datepicker
        let clickCount = 0
        const detectClickOutsideDatepicker = (e: any) => {
            if (!datepickerRef.current || !datepickerRef.current.contains(e.target)) {
                clickCount > 0 && setIsDatepickerOpen(false)
                clickCount++
            }
        }
        window.addEventListener('click', detectClickOutsideDatepicker);
        return () => {
            window.removeEventListener('click', detectClickOutsideDatepicker);
        }
    }, [isDatepickerOpen]);

    // Set next month
    const setNextDate = () => {
        if (!nextYear || !nextMonth) return;
        if (!isMonthAllowed(minDate, maxDate, nextYear, nextMonth)) return;
        setMonth(nextMonth)
        setYear(nextYear)
    }

    // Set prev month
    const setPrevDate = () => {
        if (!prevYear || !prevMonth) return;
        if (!isMonthAllowed(minDate, maxDate, prevYear, prevMonth)) return;
        setMonth(prevMonth)
        setYear(prevYear)
    }

    // Reset date
    const resetDate = () => {
        setSelectedDate(initialDate ? initialDate : new Date())
        setFormattedSelectedDate('')
    }

    // Display Month label
    const displayMonthLabel = function (month: number): any {
        if (!MONTHS || !month || !year) return;
        const thisMonth = MONTHS.find(m => m.index === month)
        if (thisMonth) return thisMonth.label.substring(0, 3) + ' ' + year
    }

    return (
        <React.Fragment>
            <div className='datepicker-wrapper'>
                <input
                    className={`${inputClasses} datepicker-input`}
                    type="text"
                    readOnly
                    value={formattedSelectedDate}
                    onFocus={() => setIsDatepickerOpen(true)}
                />
                {isDatepickerOpen &&
                    <aside ref={datepickerRef} className='datepicker'>
                        <header className='datepicker-header'>
                            <div className={`datepicker-header__action prev ${(prevYear && prevMonth) && isMonthAllowed(minDate, maxDate, prevYear, prevMonth) ? 'allowed' : 'disallowed'}`} onClick={() => setPrevDate()}>&#60;</div>
                            <h1 className='datepicker-header__title' onClick={() => setIsDateConfigOpen(!isDateConfigOpen)}>{displayMonthLabel(month)}</h1>
                            <div className={`datepicker-header__action next ${(nextYear && nextMonth) && isMonthAllowed(minDate, maxDate, nextYear, nextMonth) ? 'allowed' : 'disallowed'}`} onClick={() => setNextDate()}>&#62;</div>
                        </header>
                        <main className='datepicker-body'>
                            <div className='datepicker-body__date-selection'>
                                <ul className='datepicker-body__days'>
                                    {DAYS.map((day, i) => <li key={`day-${i}`}>{day.label.substring(0, 3)}</li>)}
                                </ul>
                                <ul className='datepicker-body__dates'>{dates.length && dates.map((date: any, i) => <li
                                    className={`
                                    ${formatDate(date.fullDate) === formatDate(selectedDate) ? 'is-active' : ''} 
                                    ${isDateAllowed(minDate, maxDate, date.fullDate) ? '' : 'not-allowed'}
                                    ${formatDate(date.fullDate) === formatDate(new Date()) ? 'is-today' : ''} ${date.classes}`} onClick={() => isDateAllowed(minDate, maxDate, date.fullDate) && setSelectedDate(date.fullDate)
                                    } key={`${i}-date`}>{date.day}</li>)}</ul>
                            </div>
                            {isDateConfigOpen &&
                                <div className='datepicker-body__date-config'></div>
                            }
                        </main>
                        <footer className='datepicker-footer'><div onClick={() => resetDate()} className='datepicker-footer__actions'>Reset date</div></footer>
                    </aside>
                }
            </div>
        </React.Fragment >
    )
};

export default Datepicker;