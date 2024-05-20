
'use client';

import React from 'react'
import CountUp from "react-countup";

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div>{
        <CountUp 
        prefix='TZS'
        decimal='.'
        duration={2}
        decimals={2}
        end={amount} />
    }</div>
  )
}

export default AnimatedCounter