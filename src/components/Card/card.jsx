import React from 'react';
import Style from '../../assets/scss/card.module.scss';
import imageStar from '../../assets/svg/star-solid.svg';

const card = ({ data }) => {
  return (
    <div className={Style.card}>
      <img src={data.photo} className={Style.cardImage} />
      <div className={Style.cardDetails}>
        {data.superHost && (
          <div className={Style.containerHost}>
            <span className={Style.hostText}>SUPER HOST</span>
          </div>
        )}

        <span className={Style.cardDescription}>{` ${data.type} ${data?.beds || 0} beds`}</span>
        <div>
          <img src={imageStar} className={Style.star} />
          <span>{data.rating}</span>
        </div>
      </div>
      <span className={Style.cardFooter}>{data.title}</span>
    </div>
  );
};

export default card;
