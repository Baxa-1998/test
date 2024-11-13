'use client';
import React from 'react';
import './reviews.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { splitTextToSpans } from '@/utils/textSplit';
import gsap from 'gsap';

export default function Reviews() {
  useGSAP(() => {
    splitTextToSpans('.reviews__title');

    gsap.fromTo(
      '.reviews__title .char',
      {
        opacity: 0,
        yPercent: 130,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.03,
        duration: 1,
        scrollTrigger: {
          trigger: '.reviews__title',
          start: 'top 80%',
        },
      },
    );
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: '#F1F5FF',
          width: '169px',
          height: '112px',
        }}
        onClick={onClick}>
        Далее
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          fontFamily: "'Montserrat', sans-serif",
          background: '#F1F5FF',
          width: '169px',
          height: '112px',
        }}
        onClick={onClick}></div>
    );
  }
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__main_text">
        <div className="reviews__line"></div>
        <h3 className="reviews__title">За нас говорят наши клиенты</h3>
      </div>
      <Slider {...settings} className="slider-container">
        <div className="reviews__item">
          <h3 className="reviews__item_title">Нуридонов Санжар</h3>
          <span className="reviews__item_date"> 12 января 2023</span>
          <p className="reviews__item_text">
            "Прошел курс лечения позвоночника в Med Fast Clinic и остался очень доволен результатом!
            Долгое время мучился от болей в спине, которые мешали нормальной жизни и работе. После
            диагностики врач составил для меня персональный план лечения, включающий массаж,
            мануальную терапию и специальные упражнения. Уже после нескольких сеансов почувствовал
            значительное облегчение, а к концу курса боль практически ушла.
          </p>
          {/* <div className="reviews__item_btn">
             <button>Весь отзыв</button> 
             <Image width={24} height={20} src="/assets/arrow-right.png" /> 
          </div> */}
        </div>
        <div className="reviews__item">
          <h3 className="reviews__item_title">Усмонова Малика</h3>
          <span className="reviews__item_date">15 марта 2022</span>
          <p className="reviews__item_text">
            "Хочу выразить огромную благодарность специалистам Med Fast Clinic за качественную
            работу и внимание к моим пожеланиям! Долго выбирала клинику для пластической операции и
            рада, что остановилась именно на этом центре. С первой консультации врач показал себя
            настоящим профессионалом: подробно объяснил все этапы операции, рассказал о возможных
            результатах и дал четкие рекомендации по подготовке и восстановлению.
          </p>
        </div>
        <div className="reviews__item">
          <h3 className="reviews__item_title">Худойбердиева Нозима</h3>
          <span className="reviews__item_date">25 декабря 2022</span>
          <p className="reviews__item_text">

           Советую все эту клинику. Я записалась на узы и сразу после записи на прием сотрудники клиники были очень внимательны, помогли выбрать
            удобное время и подробно объяснили, как подготовиться к процедуре. Само обследование
            прошло быстро и комфортно. Врач провел все необходимые замеры, был предельно аккуратен и
            подробно рассказывал о том, что видит на экране, что было для меня особенно важно и
            успокаивало. Уже в тот же день получила результаты с понятными пояснениями, что очень
            ценно, так как избавило меня от лишних волнений.
          </p>
        </div>
        <div className="reviews__item">
          <h3 className="reviews__item_title">Тошпулатов Улмас</h3>
          <span className="reviews__item_date">3 декабря 2023</span>
          <p className="reviews__item_text">

          Попасть на прием к терапевту в Med Fast Clinic было, пожалуй, одним из лучших решений, которые я принял за последнее время! Это была не просто консультация, а настоящее погружение в мое здоровье. Врач провел прием так, что я чувствовал себя не просто пациентом, а полноценным участником процесса: объяснял каждый шаг, рассказывал, почему важно обратить внимание на те или иные симптомы, делился полезными лайфхаками для повседневной жизни.
          Рекомендую всем, кто устал от конвейерного подхода и хочет, чтобы к ним отнеслись с уважением и вниманием!"
          </p>
        </div>
        <div className="reviews__item">
          <h3 className="reviews__item_title">Хайдарова Назокат</h3>
          <span className="reviews__item_date">5 август 2023</span>
          <p className="reviews__item_text">
          Проходила курс электротерапии в Med Fast Clinic — и это был действительно удивительный опыт! Сначала сомневалсялась, что электротерапия поможет, но после первого сеанса ощутила разницу. Специалист подробно рассказал о том, как будет проходить процедура, ответил на все мои вопросы и помог избавиться от страха перед аппаратом.

Каждый сеанс был как маленькое путешествие: приятные ощущения, никаких болей — только легкое покалывание и расслабление.
        
          </p>
        </div>
      </Slider>
    </section>
  );
}
