import React from 'react';
import classnames from 'classnames';
import Style from '../../assets/scss/search.module.scss';

const search = ({ setOpen, location }) => {
  return (
    <>
      <div className={Style.containerMin}>
        <div className={classnames(Style.location, location !== 'Add city' && location !== ''
          ? Style.focus
          : null)}
        onClick={() => setOpen(true)}>
          <span>{location === '' ? 'Add city' : location}</span>
        </div>
        <div className={Style.guest} onClick={() => setOpen(true)}>
          <span>Add guests</span>
        </div>
        <div className={Style.buttom} onClick={() => setOpen(true)}>
          <span className={Style.lupa}></span>
        </div>
      </div>
    </>
  );
};

export default search;
