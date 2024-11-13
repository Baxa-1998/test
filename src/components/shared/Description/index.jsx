'use client';
import React from 'react';
import './description.scss';
import Image from 'next/image';
import Title from '@/components/UI/title';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import { splitTextToSpans } from '@/utils/textSplit';
export default function Description() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Вызываем функцию для разделения текста
    splitTextToSpans('#title');

    // Анимация символов
    gsap.fromTo(
      '#title .char',
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
          trigger: '#title',
          start: 'top 80%',
        },
      },
    );

    // gsap.set(chars, {
    //   yPercent: 130, // Смещение вниз
    //   opacity: 0, // Полная прозрачность
    // });

    // gsap.fromTo('#title', {

    //   opacity: 0,

    // },{
    //   opacity: 1,
    //   stagger:  0.03,
    //   duration: 1,
    //   scrollTrigger:{
    //     trigger: '#title',
    //     start: 'top 80%'
    //   }
    // })
    gsap.fromTo(
      '.description__img',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        animationDelay: 1,
        // stagger: 0.2,
        ease: 'back.out',
        scrollTrigger: {
          trigger: '.description__img',
          start: 'top 80%',
        },
      },
    );

    gsap.fromTo(
      '#description-text',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        animationDelay: 1,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger: {
          trigger: '#title',
          start: 'top 80%',
        },
      },
    );
  }, []);
  return (
    <section className="description">
      <div className="description__img">
        <Image loading='lazy' width={412} height={412} src={'/assets/doctor.png'} alt="doctor" />
        <h3>
        Мухитдинов Шерзод <br />
          <span>Шавкатович </span>
        </h3>
      </div>
      <div className="description__info">
        <Title>
          <h2 id="title">
            Клиника «Med Fast Clinic»:{' '}
            <span>
              опытные врачи, <br /> хорошие условия и доступные цены
            </span>
          </h2>
        </Title>

        <p id="description-text">
          Добро пожаловать в семейную клинику, где каждому пациенту обеспечивается профессиональная
          медицинская помощь, внимание и забота. <br /> Мы знаем, что здоровье – это основа
          благополучной жизни, поэтому с особым трепетом относимся к потребностям <br /> наших
          пациентов и их семей.
        </p>
        <h3 id="description-text">Почему выбирают нас?</h3>
        <h4> 1. Комплексный подход к здоровью всей семьи.</h4>
        {/* <p id="description-text">
          Наша клиника предоставляет медицинские услуги для детей и взрослых, <br /> а также для
          пожилых пациентов. Мы верим в важность профилактики и предлагаем регулярные обследования,
          скрининги и индивидуальные <br /> программы мониторинга, чтобы помогать нашим пациентам
          оставаться здоровыми и энергичными. <br />
        </p> */}
        <h4>2.Высококвалифицированные врачи</h4>
        {/* <p>
          В команде клиники работают опытные специалисты разных профилей – педиатры, терапевты,
          кардиологи, неврологи, хирурги и многие другие. <br /> Наши врачи постоянно повышают
          квалификацию, чтобы предлагать пациентам самые современные методы диагностики и лечения.
        </p> */}
        <h4>3.Современное оборудование.</h4>
        {/* <p>Наша клиника
          оснащена новейшим оборудованием, которое позволяет проводить точные исследования, от
          анализов <br /> и ультразвуковой диагностики до комплексных обследований и сложных
          медицинских процедур. Это позволяет выявлять заболевания на ранней стадии и разрабатывать
          оптимальные планы лечения. <br /></p> */}
          <h4>4. Индивидуальный подход и комфортные условия</h4>
          {/* <p> Мы понимаем, что медицинская помощь требует{' '}
          <br />
          деликатного подхода и доверительных отношений между врачом и пациентом. В нашей клинике
          создана уютная атмосфера, где каждый чувствует себя <br /> в безопасности и окружен
          вниманием.</p> */}
          <h4>5. Удобное расположение и график работы</h4>
          {/* <p> Наша клиника расположена в удобном
          месте и предлагает гибкий <br /> график работы, включая вечерние и выходные часы, чтобы
          каждый пациент мог найти время для заботы о здоровье.</p> */}
        {/* <h4 id="description-text">Наши услуги:</h4>
        <ul id="description-text">
          <li id="description-text">Профилактические осмотры и консультации специалистов</li>
          <li id="description-text">Диагностика и лечение острых и хронических заболеваний</li>
          <li id="description-text">Вакцинация для детей и взрослых</li>
          <li id="description-text">Программы ведения беременности и уход за новорожденными</li>
          <li id="description-text">Реабилитация и поддерживающая терапия для пожилых людей</li>
          <li id="description-text">Программы восстановления после заболеваний и травм</li>
        </ul> */}
        <p id="description-text">
          Мы строим доверительные отношения с нашими пациентами, потому что уверены: только так
          можно достичь лучших результатов в лечении. <br /> Здоровье семьи – это наша главная
          задача, поэтому мы создаем медицинское учреждение, куда хочется возвращаться не только за
          помощью, <br />
          но и за поддержкой, пониманием и вниманием к каждому члену семьи.
        </p>
      </div>
      {/* <i className="square"></i>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div>
		<div className="square"><Image width={50} height={50} src='/assets/pill.png'/></div> */}
    </section>
  );
}
