import React from 'react'
import Todaylist from './Todaylist'
import Youmissed from './Youmissed'
import Yesterdaylist from './Yesterdaylist'

const Mainfeed = () => {
    return (
        <div>
            <Youmissed/ >
            <Todaylist/ >
            <Youmissed/ >
            <Yesterdaylist/ >
        </div>
    
    )
}

export default Mainfeed
