import React from 'react'

const Stripe = ({value}) => {
  return (
      <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] border-zinc-700 flex items-center justify-between'>
          <img src={value.url} alt="" />
          <span>{ value.number }</span>
    </div>
  )
}

export default Stripe