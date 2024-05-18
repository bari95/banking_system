

import React from 'react'
import { formatAmount } from '@/lib/utils'
import AnimatedCounter from './AnimatedCounter'

function TotalBalanceBox({totalBanks,totalCurrentBalance, accounts=[]}: TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {'doughnut chart'}
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts : {totalBanks}
            </h2>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>total current balance</p>
            <AnimatedCounter 
            amount={totalCurrentBalance}/>
            <p className='total-balance-amount flex-center gap-2'>{formatAmount(totalCurrentBalance)}</p>
        </div>
    </section>
  )
}

export default TotalBalanceBox