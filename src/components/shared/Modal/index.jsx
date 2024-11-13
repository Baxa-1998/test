'use client';
import React, { useEffect, useRef } from 'react';
import './modal.scss';
import Image from 'next/image';
import { ModalContext } from '@/context/ModalCTX';
export default function Modal() {
  const { isModalOpen, setIsModalOpen } = React.useContext(ModalContext);

  const [inputValue, setInputValue] = React.useState({
    name: '',
    // doctor: '',
    date: '',
    phone: '',
  });
  const [isShow, setIsShow] = React.useState(true);
  const inputRef = useRef(null);
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Opens the date picker input when the user clicks on the "Выбрать дату" button.
   * @function
   * @returns {void}
   */
  /******  6b9d5233-0674-4cc9-a1b6-bafe0c93e114  *******/
  function handleOpenInput() {
    inputRef.current.showPicker();
  }
  const sendToTelegram = async (data) => {
    const botToken = '7321067132:AAFCdOolT8gBp08xstqf45NYGRyvfVVVVzY';
    const chatId = ['57844596', '6466999731', '563246689', '311591296'];
    const message = `Имя: ${inputValue.name}\nТелефон: ${inputValue.phone}\nДата: ${inputValue.date}`;

    const promises = chatId.map((chatId) => {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message,
      )}`;
      return fetch(url);
    });

    try {
      await Promise.all(promises);
      alert('Message sent to Telegram');
    } catch (error) {
      console.error(error);
      alert('Error sending message to Telegram');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.name !== '' && inputValue.phone !== '' && inputValue.phone !== '') {
      sendToTelegram(inputValue);
      console.log('send');
      setTimeout(() => {
        setIsShow(!isShow);
      }, 1000);
    } else {
      alert('Заполните все поля');
    }

    setInputValue({
      name: '',
      date: '',
      phone: '',
    });

    // setTimeout(() => {
    //   setIsShow(!isShow)
    // }, 1000);
  };
  // useEffect(()=>{

  // },[date])

  console.log(isShow);

  return (
    <div className={`modal ${isModalOpen ? 'active' : ''}`}>
      {isShow ? (
        <div className={`modal__item`}>
          <h3 className="modal__title">
            Получите консультацию <br /> специалиста бесплатно
          </h3>
          <p className="modal__subtitle">
            Не нашли категорию или остались вопросы? <br />
            Оставьте заявку и мы поможем вам
          </p>
          <form action="">
            <div className="inp__name">
              <Image width={32} height={32} src={'/assets/input-person.png'} />
              <input
                required
                onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                value={inputValue.name}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className="inp__select">
              <Image width={32} height={32} src={'/assets/input-person.png'} />
              {/* <select
                required
                onChange={(e) => setInputValue({ ...inputValue, doctor: e.target.value })}
                value={inputValue.doctor}
                name=""
                id="">
                <option value="" disabled selected hidden>
                  Выберите врача
                </option>
                <option value="alex">Алекс</option>
                <option value="alex">Алекс</option>
                <option value="alex">Алекс</option>
              </select> */}
            </div>
            <div className="inp__date">
              <Image width={32} height={32} src={'/assets/input-person.png'} />
              <input
                required
                onClick={handleOpenInput}
                type="text"
                value={inputValue.date}
                placeholder="Выберите дату"
              />
            </div>
            <div className="inp__phone">
              <Image width={16} height={27} src={'/assets/input-mobile.png'} />
              <input
                required
                onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
                value={inputValue.phone}
                type="number"
                placeholder="Телефон"
              />
            </div>
            <div className="inp__hidden_date">
              <input
                onChange={(e) => setInputValue({ ...inputValue, date: e.target.value })}
                ref={inputRef}
                type="date"
              />
            </div>
          </form>
          <div className="modal__btn_container">
            <button onClick={handleSubmit} className="modal__btn">
              Оставить заявку
            </button>
            <button onClick={handleCloseModal} className="modal__close_btn">
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div className="modal__notification">
          <h3 className="modal__notification_title">Сообщение отправлено</h3>
          <span className="modal__notification_subtitle">
            Ваше сообщение отправлено, скоро мы с вами свяжемся
          </span>
          <button onClick={handleCloseModal} className="modal__notification_btn">
            Спасибо
          </button>
        </div>
      )}
    </div>
  );
}
