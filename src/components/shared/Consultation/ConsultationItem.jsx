import React from 'react'
import './consultationItem.scss'
import Button from '@/components/UI/Button'
import { useGSAP } from '@gsap/react';
import { splitTextToSpans } from '@/utils/textSplit';
import gsap from 'gsap';
export default function ConsultationItem() { 
  useGSAP(() => {
  

    gsap.fromTo(
      '.consultation__item',
      {
        opacity: 0,
   
      },
      {
        opacity: 1,
      
      
        duration: 1,
        scrollTrigger: {
          trigger: '.consultation__item',
          start: 'top 80%',
        },
      },
    );
    gsap.fromTo(
      '#consultation-stagger',
      {
        opacity: 0,
   
      },
      {
        opacity: 1,
      
        stagger: '0.3',
        delay: "0.2",
        duration: 1,
        scrollTrigger: {
          trigger: '#consultation-stagger',
          start: 'top 80%',
        },
      },
    );
  }, []);
  return (
    <div className='consultation__item'>
    <h3 id='consultation-stagger' className='consultation__item_title'>Получите консультацию специалиста <br /> бесплатно</h3> 
    <p id='consultation-stagger' className='consultation__item_text'>Не нашли категорию или остались вопросы? Оставьте заявку и мы поможем вам</p> 
    <Button id='consultation-stagger' className={'consultation__item_btn'} title={'Оставить заявку'}/> 
    <p id='consultation-stagger' className='consultation__item_policy'>Нажимая кнопку “Отправить заявку”, вы даете согласие на обработку <a href='#'>персональных данных</a> </p>
</div>
  )
}
