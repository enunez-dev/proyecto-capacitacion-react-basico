import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/svg/pin.svg';
import Style from '../../assets/scss/search.module.scss';

const ItemSearchLocation = ({ value }) => {
  return (
    <div className={Style.itemLocation}>
      <img src={icon} />
      <span>
        {value}
      </span>
    </div>
  );
};

export default ItemSearchLocation;

ItemSearchLocation.propTypes = {
  value: PropTypes.string
};
