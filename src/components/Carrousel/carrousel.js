import Carousel from 'react-bootstrap/Carousel';

import './style.scss';

export const Carrousel = () => {
  return (
    <div className="carousel">
      <h3 className="carousel__title">Pour commencer !</h3>
      <p className="carousel__text">
        Eya Mignardise vous souhaite une bonne dégustation
      </p>
      <video autoPlay loop muted className="carousel__player">
        <source type="video/mp4" src="slide1.mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};
