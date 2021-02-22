import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

import './style.scss';
export const Footer = () => {
  return (
    <div className="bottom">
      <div className="bottom__body">
        <div className="social-media">
          <h5>Nous suivre</h5>
          <a href="https://www.facebook.com/confiserie.eya/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="section-contact">
          <h5>Nous contacter</h5>
          <p>adresse Mail</p>
        </div>
        <div className="section-legal">
          <h5>Nous contacter</h5>
          <p>adresse Mail</p>
        </div>
      </div>
      <div className="bottom__footer">
        Copyright © 2021 Société Eya Mignardise, tout droit réserver
      </div>
    </div>
  );
};
