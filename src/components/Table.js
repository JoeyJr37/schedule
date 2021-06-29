import React from 'react';
import data from './data'
import './table.css';

/** Need to add logic to account for different schedules on different days 
 * Potentially component loads different data sources but uses similar logic across the board
*/

const Table = ({time}) => {
    const timeArray = data.map(day => {
        return day.time.split(' - ');
    })

    const timeSets = timeArray.map(timeSet => {
        return ([parseInt(timeSet[0], 10), parseInt(timeSet[1], 10), false]);
        })
    
    timeSets.forEach(set => {
        if (set[0] < time && set[1] > time){
            set[2] = true
        }
    })

    const activityMap = data.map(day => day.activity)
   timeSets.forEach((timeSet, i) => {
        timeSet.push(activityMap[i]);
    })

    return (
        <table className='table'>
            <tbody>
                <tr>
                    <th className='time'> Time </th>
                    <th> Activity </th>
                </tr>
                {timeSets.map((timeSet, i) => {
                    if (timeSet[2] === true){
                        return (<tr className= 'active' key={i}>
                            <td>{`${timeSet[0]} - ${timeSet[1]}`}</td>
                            <td>{timeSet[3]}</td>
                        </tr>)
                    } else {
                        return (<tr key={i}>
                            <td>{`${timeSet[0]} - ${timeSet[1]}`}</td>
                            <td>{timeSet[3]}</td>
                        </tr>);
                    }
                })}
            </tbody>
        </table>
    )
}

export default Table;