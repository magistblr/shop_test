import React from 'react';
import s from './Footer.module.scss';
import facebook from '../../assets/icon/facebook.svg';
import vk from '../../assets/icon/vk.svg';
import inst from '../../assets/icon/inst.svg';
import googlePlay from '../../assets/icon/google_play.svg';
import appStore from '../../assets/icon/app_store.svg';

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.footer_up}>
        <h1>React</h1>
        <div className={s.contacts_apps}>
          <div className={s.contacts}>
            <p className={s.contacts_apps_text}>Присоединяйтесь к нам</p>
            <a className={s.contacts_img} href="#"><img src={facebook} alt="facebook" /></a>
            <a className={s.contacts_img} href="#"><img src={vk} alt="vk" /></a>
            <a className={s.contacts_img} href="#"><img src={inst} alt="inst" /></a>
          </div>
          <div className={s.apps}>
            <p className={s.contacts_apps_text}>Устанавливайте приложение</p>
            <a href="#"><img className={s.apps_img} src={googlePlay} alt="googlePlay" /></a>
            <a href="#"><img className={s.apps_img} src={appStore} alt="appStore" /></a>
          </div>
        </div>
      </div>
      <div className={s.footer_bottom}>
        <p className={s.footer_bottom_text}>© Sionic</p>
        <p className={s.footer_bottom_text}>Правовая информация</p>
        <p className={s.footer_bottom_text}>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
