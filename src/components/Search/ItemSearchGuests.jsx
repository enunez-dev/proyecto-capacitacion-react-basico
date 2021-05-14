import React from 'react';
import Style from '../../assets/scss/search.module.scss';

const ItemSearchGuests = () => {
  return (
    <div className={Style.itemGuests}>
      <div className={Style.containerItemGuests}>
        <h4>Adults</h4>
        <p>Ages 13 of above</p>
        <div className={Style.containerButtoms}>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
      <div className={Style.containerItemGuests}>
        <h4>Adults</h4>
        <p>Ages 13 of above</p>
        <div className={Style.containerButtoms}>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemSearchGuests;
