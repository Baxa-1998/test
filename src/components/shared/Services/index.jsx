'use client'
import React from 'react'
import './services.scss'
import Image from 'next/image'
import ServicesItem from './ServicesItem'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import { splitTextToSpans } from '@/utils/textSplit'
const data = [
  {
    narcomania :{ 
      title: "Услуги",
      headTitle: 'Наркомания',
      items: [
        {
          id: 1,
          subtitle: 'Видеоскольпоскопия',
          price: '150 000',
      },
      {
        id: 2,
        subtitle: 'УЗИ в I триместре беременности	120 000',
        price: '120 000',
    },
    {
      id: 3,
      subtitle: '	УЗИ Верхний живот (печень, желчный пузырь, поджелудочная железа, селезенка)',
      price: '80 000',
  },
  {
    id: 4,
    subtitle: 'Узи Матки и придатков (трансвагинальное)',
    price: '80 000',
},
{
  id: 5,
  subtitle: 'УЗИ щитовидной железы  с региональными лимфоузлами',
  price: '70 000',
},
    ], 
    items2: [
      {
        id: 1,
        subtitle: 'Консультация терапевта.',
        price: '150 000',
    },
    {
      id: 2,
      subtitle: 'ЭКГ с расшифровкой',
      price: '40 000',
  },
  {
    id: 3,
    subtitle: '	Стационар амбулаторный 1 день \n Туда входит 4-х разовая питание и физиотерапия.',
    price: '350 000',
},
{
  id: 4,
  subtitle: 'Консультация проктолога',
  price: '175 000',
},
{
  id: 5,
  subtitle: 'Консультация флеболога + УЗИ в подарок',
  price: '175 000',
},
{
  id: 6,
  subtitle: 'Вытяжение позвоночника',
  price: '40 000',
},
{
  id: 7,
  subtitle: 'Вытяжение шейного отдела позвоночника',
  price: '30 000',
},
{
  id: 8,
  subtitle: 'ИРТ (иглатерапия)',
  price: '70 000',
},
{
  id: 9,
  subtitle: 'Консультация врача реаниматолога',
  price: '150 000',
},
{
  id: 10,
  subtitle: 'ЛФК',
  price: '150 000',
},
{
  id: 11,
  subtitle: 'Электротерапия	33 000',
  price: '33 000',
},


    ]
     


    },
//     detocsication :{ 
//       title: "Нужна быстрая помощь",
//       headTitle: 'Наркомания',
//       items: [
//         {
//           id: 1,
//           subtitle: 'Убод',
//           price: '30 000',
//       },
//       {
//         id: 2,
//         subtitle: 'Снятие ломки',
//         price: '6 500',
//     },
//     {
//       id: 3,
//       subtitle: 'Наркологическая помощь',
//       price: '6 000',
//   },
//   {
//     id: 4,
//     subtitle: 'Детоксикация от наркотиков',
//     price: '6 000',
// },
//     ] 
     


//     }
  }
]
export default function Services() { 
  useGSAP(()=>{
    splitTextToSpans('.services__title')

    gsap.fromTo('.services__title .char', {
    
    
  
      opacity: 0,
      yPercent: 130

    },{
      opacity: 1,
      yPercent: 0,
      stagger: 0.03,
      duration: 1,
      scrollTrigger:{
        trigger: '.services__title', 
        start: 'top 80%'
      }
    })

    gsap.fromTo(".services__img", {
      x:-600 ,
    },{
      x: 0,
      duration: 1,
      animationDelay: 1,
      // stagger: 0.2,
     
      scrollTrigger:{
        trigger: '.services__img', 
        start: 'top 80%'
      }
    })
    // services__prices_item
    gsap.fromTo(".services__prices_item", {
      opacity: 0 ,
    },{
      opacity: 1,
      duration: 1,
      animationDelay: 1,
      stagger: 0.2,
     
      scrollTrigger:{
        trigger: '.services__prices_item', 
        start: 'top 80%'
      }
    })
  },[])

 
  return (
    <section id='services' className='services'> 
    <div className='services__main_text'> 
      <div id='first-line' className='services__line'></div>
    <h2  className='services__title'>
    Наши <span>услуги</span> 
    </h2>
    </div> 
    <div className='services__items'> 
     
        {/* <Image className='services__img' src='/assets/services-img.png' width={528} height={694}/> */}
     
      <div className='services__item_container'>
    <ServicesItem data={data[0].narcomania}/>
    {/* <ServicesItem data={data[0].narcomania}/> */}
      </div>

    </div>
     
    </section>
  )
}
