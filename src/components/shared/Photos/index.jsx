'use client'
import React from 'react'
import './photos.scss'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function Photos() {
  useGSAP(()=>{
    gsap.fromTo('#stagger-img',{
      opacity: 0,
      scale: 0.1
    },
    {
      opacity: 1,
      duration: 1,
      scale: 1,
      ease: 'power1.out',
      // yoyo: true,
      // repeat:-1,
      stagger:{
        each: 0.1, 
        from: 'start'
      },
      scrollTrigger:{
        trigger: '#stagger-img', 
        start: 'top 80%'
      }

    })
    // gsap.fromTo('#stagger-img',{
  
    //   opacity: 0
    // },{
    //   opacity: 1,
    //   duration: 1,
    //   stagger: 0.4
    // })

  },[])
  return (
    <div className='photos'>
      <h2 className='photos__title'>Фото клиники</h2> 
      <div className='photo__items'>
        <div id='stagger-img' className="photo__item">
        <Image className='card-background' width={371} height={277} src='/assets/photo-of-clinic/1.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image className='card-background' width={371} height={277} src='/assets/photo-of-clinic/2.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image className='card-background' width={371} height={277} src='/assets/photo-of-clinic/3.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image className='card-background' width={371} height={277} src='/assets/photo-of-clinic/4.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image   className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>       
         <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
        <div id='stagger-img' className="photo__item">
        <Image  className='card-background'  width={371} height={277} src='/assets/photo.png'/>
        </div>
  
      </div>
    </div>
  )
}
