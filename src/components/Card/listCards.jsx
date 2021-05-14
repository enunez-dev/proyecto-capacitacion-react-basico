import React from 'react';
import Card from './card';
import Style from '../../assets/scss/card.module.scss';

const listCards = ({ title, lista }) => {
  return (
    <div className={Style.cardList}>
      <div className={Style.containerTitle}>
        <span className={Style.title}>{title}</span>
        <span className={Style.count}>{`${lista.length}+ stays`}</span>
      </div>
      {lista.map((item, key) =>
        <Card
          key={key}
          data={item}
        />)}
    </div>
  );
};

export default listCards;
