'use client'
import React from 'react'
import './services.scss'
import Image from 'next/image'
export default function ServicesItem({data}) {
  console.log(data);
  
  return (
    <div className='services__item'>
      <div className='services__item_head'>
        <div className='flex gap-4'>
        <Image width={56} height={56} src={'/assets/services-head1.png'}/> 
        <h3 className='services__item_title'>{data.title}</h3>
        </div>
         
            <div className='services__line'></div>
      </div>
      <div className='flex justify-between flex-col gap-[120px] sm:gap-[0px]'>
      <div className='services__prices'>
        {/* <h3>
         {data.headTitle}
        </h3> */}
        {data.items.map((item)=>(
             <div className='services__prices_item'>
             <h4>{item.subtitle}</h4>
             <div className='prices__item_line'></div>
            <p> {item.price} сум</p>
  
          </div>

        ))}
     
       

      </div>
      <div className='services__prices'>
     
        {data.items2.map((item)=>(
             <div className='services__prices_item'>
             <h4>{item.subtitle}</h4>
             <div className='prices__item_line'></div>
            <p> {item.price} сум</p>
  
          </div>

        ))}
     
       

      </div>

      </div>
    

     

    </div>
  )
}
