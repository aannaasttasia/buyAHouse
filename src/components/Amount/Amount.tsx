/* eslint-disable */
import  React from 'react';
import { useState } from 'react';
import MonthlyAmountInfo from '../MonthlyAmountInfo/MonthlyAmountInfo.tsx';
import './css/Amount.scss';
import { currMonth, currYear } from '../constants.ts';

export default function Amount(){
    let monthArr: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [amount, setAmount] = useState<number>(0);
    const [countMonth, setCountMonth] = useState<number>(0);
    const [month, setMonth] = useState<number>(currMonth);
    const [year, setYear] = useState<number>(currYear);

    const handleChangeAmount = (event: any) => {
        const value =(event.target.value);
        setAmount(value);
    };

    const handleChangeMonthUp = () => {
        (monthArr[month] === "December" ? (setMonth(0), setYear(year+1)) : setMonth(month + 1));
        setCountMonth(countMonth + 1);
    };

    const handleChangeMonthDown = () => {
        if((monthArr[month] == monthArr[currMonth]) && year == currYear ){
            return
        }else{
            ((monthArr[month] === "January") ? (setMonth(11), setYear(year-1)) : setMonth(month - 1));
            setCountMonth(countMonth - 1);
        }
        
    };

    return (
        <div className='info'>
            <div className='inputs'>
                <div className='amount'>
                    <p className='text'>Total amount</p>
                    <span className='symbol'>
                        <input
                            className='inputAmount'
                            type="number"
                            data-type="currency" 
                            max="10000000"
                            id="message"
                            name="message"
                            onChange={handleChangeAmount}
                            value={amount}
                        />
                    </span>
                </div>
                <div className='reachGoal'>
                    <p className='text'>Reach goal by</p>
                    <div className='dateInput'>
                        <button className='btn' onClick={handleChangeMonthDown}>&lt;</button>
                        <span className='monthYear'>
                            <p className='month'>{monthArr[month]}</p>
                            <p className='year'>{year}</p>
                        </span>
                        <button className='btn' onClick={handleChangeMonthUp}>&gt;</button>
                    </div>
                </div>
            </div>
        <div>
            <MonthlyAmountInfo amount={amount} year={year} month={monthArr[month]} countMonth={countMonth}/>
        </div>
        </div>
        
    );
};
