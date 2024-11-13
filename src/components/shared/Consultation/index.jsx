import React from 'react'
import './consultation.scss'

import ConsultationItem from './ConsultationItem'
export default function Consultation() {
  return (
    
    <div className='consultation'>
      {/* <div className='consultation__item'>
          <h3 className='consultation__item_title'>Получите консультацию специалиста <br /> бесплатно</h3> 
          <p className='consultation__item_text'>Не нашли категорию или остались вопросы? Оставьте заявку и мы поможем вам</p> 
          <Button className={'consultation__item_btn'} title={'Оставить заявку'}/> 
          <p className='consultation__item_policy'>Нажимая кнопку “Отправить заявку”, вы даете согласие на обработку <a href='#'>персональных данных</a> </p>
      </div> */}
      <ConsultationItem/>
    </div>
  )
}
