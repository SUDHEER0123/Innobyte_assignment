import React from 'react'

const Review = () => {
  return (
    <div className='w-max-full m-auto py-[1rem] px-2 lg:px-[10rem] mt-[20px]'>
        <div className='p-[2rem] flex gap-[2rem] items-center justify-evenly flex-wrap rounded-[10px] custom-shadow'>
        <div className="text-center flex-1 flex-shrink-1 flex-grow-1 min-w-[180px]">
        <h4 className='text-[2rem] font-semibold text-[#0c0a09]'>100+</h4>
          <p className='text-[#78716c]'>Bookings Completed</p>
        </div>
        <div className="text-center flex-1 flex-shrink-1 flex-grow-1 min-w-[180px]">
        <h4 className='text-[2rem] font-semibold text-[#0c0a09]'>150+</h4>
          <p className='text-[#78716c]'>Happy Customers</p>
        </div>
        </div>

    </div>
  )
}

export default Review