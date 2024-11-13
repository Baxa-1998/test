
import React, { useEffect } from 'react'
import './header.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '../../UI/Button/Button'


export default function Header({isBurger, setIsBurger}) {
 
  const [isHeader, setIsHeader] = React.useState(false) 
  useEffect(()=>{
    if(isBurger){
      document.body.style.overflow = 'hidden'
      setIsHeader(false)
    }else{
 document.body.style.overflow = ''
    }
  })
 
  useGSAP(()=>{
    gsap.fromTo("#stagger", {
      y: -100,
    },{
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out'
    })
    gsap.fromTo(".header__left", {
      x:-500 ,
    },{
      x: 0,
      duration: 1,
      animationDelay: 1,
      // stagger: 0.2,
      ease: 'back.out'
    })
    gsap.fromTo(".header__right", {
      x:500 ,
    },{
      x: 0,
      duration: 1,
      animationDelay: 1,
      // stagger: 0.2,
      ease: 'back.out'
    })

  })
  return (
    <header className={`header`}>
         <div className='header__left'>
          <img  id='logo' src="/assets/logo.png" style={{width: "280px", height: 'auto'}} alt="logo" />
   

         </div>
         <div className='header__center'>
          <ul>
            <a id='stagger' href='#main'><li>Главная</li></a>
            <a id='stagger' href='#services'><li>Наши услуги</li></a>
            <a id='stagger' href='#reviews'><li>Отзывы</li></a>
            <a id='stagger' href='#doctors'><li>Наши доктора</li></a>
            <a id='stagger' href='#contacts'><li>Контакты</li></a>
          </ul>

         </div>
         <div className='header__right'>
          <ul>
            <li>   <a href='tel:+998956210303'>+998 (95) 621 03 03</a></li>
         <li>  <a href='tel:+998956210303'>+998(95) 608 03 03</a></li>
            <span> г. Самарканд, ул. Озод Шарк, 8</span>
          </ul>
          <Button title='Оставить заявку'/>
       
         </div>
         <div onClick={()=>   setIsBurger(!isBurger)} className={`burger ${isBurger ? 'burger-active' : ''}`}>
            <div className='burger__item'></div>
            <div className='burger__item'></div>
          </div>
    </header>
  )
}
