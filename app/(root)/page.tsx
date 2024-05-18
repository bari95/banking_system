

import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

function Home() {
    const loggedIn={firstName:'Adrian'};
  return (
    <section className='home'>
        <div className='home-content'>
            
                <header className='home-header'>
                    <HeaderBox 
                    type='greeting'
                    title='welcome'
                    user={loggedIn?.firstName || 'guest'}
                    subtext=' Acces and manage your accounts efficiently'/>

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
            
        </div>
    </section>
  )
}

export default Home