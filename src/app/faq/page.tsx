import React from 'react'

const page = () => {
  return (
    <div className=' my-[82px] mx-[300px] flex flex-col gap-[72px]'>
        <div>
            <div className='flex flex-col items-center gap-[21px]'>
                <p className='text-[48px] leading-[56px] font-bold text-[#333333]'>Questions Looks Here</p>
                <p className='text-center text-[16px] leading-6 text-[#4F4F4F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
            <div className='bg-[#f7f7f7] rounded-lg'>
                <div>
                    <div><p className='text-[18px] font-bold leading-[26px]'>What types of chairs do you offer?</p></div>
                    <p className='text-[16px] leading-6 text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                </div>
                <div>+</div>
            </div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    </div>
  )
}

export default page