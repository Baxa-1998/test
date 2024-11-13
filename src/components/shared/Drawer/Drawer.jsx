import React, { useEffect } from 'react';
import './drawer.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function Drawer({ isBurger, setIsBurger }) {
  useEffect(() => {
    if (isBurger) {
      gsap.fromTo(
        '#drawer-stagger',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'bounce',
          stagger: 0.3,
        },
      );
    }
  }, [isBurger]);
  return (
    <div className={`drawer ${isBurger ? 'drawer-active' : ''}`}>
      <div className="drawer__item">
        <ul>
          <a onClick={() => setIsBurger(false)} id="drawer-stagger" href="#main">
            <li>Главная</li>
          </a>
          <a onClick={() => setIsBurger(false)} id="drawer-stagger" href="#services">
            <li>Наши услуги</li>
          </a>
          <a onClick={() => setIsBurger(false)} id="drawer-stagger" href="#reviews">
            <li>Отзывы</li>
          </a>
          <a onClick={() => setIsBurger(false)} id="drawer-stagger" href="#doctors">
            <li>Наши доктора</li>
          </a>
          <a onClick={() => setIsBurger(false)} id="drawer-stagger" href="#contacts">
            <li>Контакты</li>
          </a>
        </ul>
      </div>
      <div className="drawer__footer">
        <div className="footer__content">
          <div className="drawer__contacts">
            <div className="footer__adres">
              <img style={{ width: '26px', height: '26px' }} src={'/assets/location.png'} />
              <a href="#">г. Самарканд, ул. Озод Шарк, 8</a>
            </div>

            {/* <li><Image width={26} height={26} src={'/assets/location.png'}/>Email</li>
        <a href='#'>example@example.ru</a> */}

            <div className="footer__social">
              <a
                href="https://www.facebook.com/people/Med-Fast-Clinic-Samarkand/61564297646807/?mibextid=LQQJ4d&rdid=w6cHJlBNZ3jtzxAt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhN9EKQ8VM8EBZZPk%2F%3Fmibextid%3DLQQJ4d%26tpclid%3Dfacebook.PAZXh0bgNhZW0CMTEAAaawJKPh1NiNs6DMrTaya_Gdtdj5Wq1BuQAvyagDgncKCLA-lpmAFQNroL0_aem__NtRWmfqaG2xIwIzpS-TUw"
                className="footer__social_item">
                <img style={{ width: '15px', height: '20px' }} src={'/assets/facebook.png'} alt="dfa" />
              </a>
              <a href="https://t.me/medfastclinic1" className="footer__social_item">
                <img style={{ width: '18px', height: '16px' }} src={'/assets/telegram.png'} />
              </a>
              <a
                href="https://www.instagram.com/medfastclinic.uz?igsh=MTc2enBldWdhN2c4MQ=="
                className="footer__social_item">
                <img style={{ width: '25px', height: '25px' }} src={'/assets/instagram.png'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
