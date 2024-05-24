

import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

async function Home() {
    const loggedIn=await getLoggedInUser()
    if(!loggedIn){
      redirect('/sign-in')
    }
  return (
    <section className='home'>
        <div className='home-content'>
            
                <header className='home-header'>
                    <HeaderBox 
                    type='greeting'
                    title='welcome'
                    user={loggedIn?.name || 'guest'}
                    subtext=' Acces and manage your accounts efficiently'/>

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
            RECENT TRANSACTIONS
        </div>
        <RightSideBar 
           user={loggedIn}
           banks={[{},{}]}
           transactions={[]}/>
    </section>
  )
}

export default Home