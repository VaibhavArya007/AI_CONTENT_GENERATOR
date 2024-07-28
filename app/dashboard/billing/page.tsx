"use client"
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React, { useContext } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'


function billing() {
    const totalUsageContext = useContext(TotalUsageContext);

  if (!totalUsageContext) {
    return null;
  }
  const { totalUsage, setTotalUsage } = totalUsageContext;

  const resetUsage = () => {
    setTotalUsage(0);
  };
  return (
    <div>
      <div className='font-bold text-3xl flex items-center justify-center mt-28'>Upgrade Your Plan !</div>
        <div className='flex gap-10 justify-center mt-7'>
            <div className='bg-white border shadow-lg shadow-slate-600 hover:scale-105 transition ease-in-out h-80 rounded-lg w-72 text-center' >
                <div className='mt-4' >
                    <h2 className='font-semibold'>Free Plan</h2>
                    <div className='pt-2'>
                        <span className='text-xl  pr-1 font-bold'>0$</span>
                        <span className='text-slate-700'>/month</span>
                      
                    </div>
                </div>
                <div className='flex flex-col gap-2 font-light mt-8 text-left text-sm pl-2'>
                  <p className='flex gap-2'><Check className='h-5 text-primary' />10,000 Words/month</p>
                  <p className='flex  gap-2'><Check className='h-5 text-primary' />50+ Content Templates</p>
                  <p className='flex gap-2 '><Check className='h-5 text-primary' />Unlimited Download & Copy</p>
                  <p className='flex  gap-2'><Check className='h-5 text-primary' />1 Month of History</p>
                </div>

                <Button className='bg-slate-700 text-white rounded-xl mt-4 hover:opacity-80 hover:bg-transparent hover:text-black' onClick={resetUsage}>Current Plan</Button>
            </div>
            <div className='bg-white hover:scale-105 transition ease-in-out shadow-lg shadow-slate-600 borderh-80 rounded-lg w-72 text-center' >
                <div className='mt-4' >
                    <h2 className='font-semibold'>Monthly Plan</h2>
                    <div className='pt-2'>
                        <span className='text-xl  pr-1 font-bold'>9.99$</span>
                        <span className='text-slate-700'>/month</span>
                      
                    </div>
                </div>
                <div className='flex flex-col gap-2 font-light mt-8 text-left text-sm pl-2'>
                  <p className='flex gap-2'><Check className='h-5 text-primary'  />1,00,000 Words/month</p>
                  <p className='flex  gap-2'><Check className='h-5 text-primary' />500+ Content Templates</p>
                  <p className='flex gap-2 '><Check className='h-5 text-primary' />Unlimited Download & Copy</p>
                  <p className='flex  gap-2'><Check className='h-5 text-primary' />10 Month of History</p>
                </div>

                <Button variant="outline" className='mt-4 rounded-xl border-primary hover:bg-primary hover:text-white' onClick={resetUsage}>Upgrade Now</Button>
            </div>
        </div>

    </div>
  )
}

export default billing
