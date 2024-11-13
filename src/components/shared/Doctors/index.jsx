'use client';
import React from 'react';
import './doctors.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { useGSAP } from '@gsap/react';
import { splitTextToSpans } from '@/utils/textSplit';
import gsap from 'gsap';

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      surname: 'Абдуллаев', 
      name: 'Достонжон',
      img: '/assets/doctors/1.png',
      position: 'Пластический хирург',
    },
    {
      id: 2,
      surname: 'Агабалаев', 
      name: 'Альберт',
      img: '/assets/doctors/2.png',
      position: 'флеболог',
    },
    {
      id: 3,
      surname: 'Рахимова', 
      name: 'Хуршида',
      img: '/assets/doctors/3.png',
      position: 'гинеколог',
    },
    { id: 4, surname: 'Атаевна', name: 'Ольга',  img: '/assets/doctors/4.png', position: 'Терапевт' },
    {
      id: 5,
      surname: 'Нормурадов',
      name:  'Фируз',
  
      img: '/assets/doctors/5.png',
      position: 'Пластический хирург',
    },
    {
      id: 5,
     
      surname: 'Холбазарович',
      name:  'Зоир',
      img: '/assets/doctors/6.png',
      position: 'взрослый и детский хирург общего профиля высшей категории',
    },
    {
      id: 6,
      surname: 'Расули',
      name:  'Дильшода',
    
      img: '/assets/doctors/7.png',
      position: 'флеболог/проктолог',
    },
  ];

  useGSAP(() => {
    splitTextToSpans('.doctors__title');

    gsap.fromTo(
      '.doctors__title .char',
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
          trigger: '.doctors__title',
          start: 'top 80%',
        },
      },
    );
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    //     centerMode: true,
    // centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <section id='doctors' className="doctors">
      <div className="doctors__main_text">
        <div className="doctors__line"></div>
        <h3 className="doctors__title">Наши доктора</h3>
      </div>
      <Slider {...settings} className="slider-container">
       {doctors.map((doctor)=>(
          <div className="doctors__item">
          <Image width={355} height={355} src={doctor.img} />
          <h3 className="doctors__item_title">
            {doctor.surname} <br /> <span>{doctor.name}</span>
          </h3>
          <p className="doctors__item_text">{doctor.position}</p>
        </div>
       ))}
    
      </Slider>
      <button className="doctors__btn">
        Просто свапайте
        <Image width={32} height={32} src={'/assets/swipe.png'} />
      </button>
    </section>
  );
}
