import React from 'react';

import appStore from '../../assets/icon/app_store.svg';
import facebook from '../../assets/icon/facebook.svg';
import googlePlay from '../../assets/icon/google_play.svg';
import inst from '../../assets/icon/inst.svg';
import vk from '../../assets/icon/vk.svg';

import s from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={s.wrapper}>
    <div className={s.footer_up}>
      <a href="#top">
        <h1>React</h1>
      </a>
      <div className={s.contacts_apps}>
        <div className={s.contacts}>
          <p className={s.contacts_apps_text}>Присоединяйтесь к нам</p>
          <div className={s.img_container}>
            <a className={s.contacts_img} href="#top">
              <img src={facebook} alt="facebook" />
            </a>
            <a className={s.contacts_img} href="#top">
              <img src={vk} alt="vk" />
            </a>
            <a className={s.contacts_img} href="#top">
              <img src={inst} alt="inst" />
            </a>
          </div>
        </div>
        <div className={s.apps}>
          <p className={s.contacts_apps_text}>Устанавливайте приложение</p>
          <div className={s.img_container}>
            <a href="#top">
              <img className={s.apps_img} src={googlePlay} alt="googlePlay" />
            </a>
            <a href="#top">
              <img className={s.apps_img} src={appStore} alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={s.footer_bottom}>
      <p className={s.footer_bottom_text}>Правовая информация</p>
      <p className={s.footer_bottom_text}>Политика конфиденциальности</p>
    </div>
  </footer>
);
