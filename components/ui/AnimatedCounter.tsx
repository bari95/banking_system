
import React from 'react'
import CountUp from "react-countup";

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div>{
        <CountUp end={amount} />
    }</div>
  )
}

export default AnimatedCounter