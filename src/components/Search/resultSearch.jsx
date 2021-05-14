import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import ItemSearchLocation from './ItemSearchLocation';
import ItemSearchGuests from './ItemSearchGuests';
import Style from '../../assets/scss/search.module.scss';

const resultSearch = ({ lista, setData, setOpen, setLocation, location }) => {
  const [focus, setFocus] = useState('location');
  const [filtroData, setFiltroData] = useState([]);
  const [dataLocation, setDataLocation] = useState([]);
  const [searchValues, setSearchValue] = useState({
    location: location,
    guests: ''
  });

  useEffect(() => {
    const filtro = lista.filter(item => item.city === searchValues.location);
    setFiltroData(filtro);
    const array = [];
    filtro.map(item => array.push(`${item.city}, ${item.country}`));
    const result = array.filter((item, index) => {
      return array.indexOf(item) === index;
    });
    setDataLocation(result);
    setLocation(searchValues.location);
  }, [searchValues.location]);

  const handleChange = (e) => {
    setSearchValue({ ...searchValues, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setData(location === '' ? lista : filtroData);
    setOpen(false);
  };

  return (
    <>
      <div className={Style.fondo} onClick={() => setOpen(false)}></div>
      <div className={Style.containerResult}>
        <div className={Style.close}
          onClick={() => setOpen(false)}
        >x</div>
        <div className={Style.search}>
          <div className={classnames(Style.location, focus === 'location' ? Style.focus : null)}>
            <span>LOCATION</span>
            <input className={Style.inputSelect}
              onSelect={() => setFocus('location')}
              onChange={handleChange}
              placeholder='Search city'
              type='text'
              name='location'
              value={location === 'Add city' ? '' : searchValues.location }
            />
          </div>
          <div className={Style.divisor}></div>
          <div className={classnames(Style.guest, focus === 'guests' ? Style.focus : null)}>
            <span>GUESTS</span>
            <input
              className={Style.inputSelect}
              onSelect={() => setFocus('guests')}
              onChange={handleChange}
              placeholder='Search...'
              type='text'
              name='guests'
              value={searchValues.guests}
            />
          </div>
          <div className={Style.divisor}></div>
          <div className={Style.buttom}>
            <div className={Style.buttomSearch} onClick={handleClick}>
              <span className={Style.lupa}></span>
                Search
            </div>
          </div>
        </div>
        {focus === 'location'
          ? <div className={Style.containerItem}>
            {dataLocation.map((item, key) =>
              <ItemSearchLocation key={`loc-${key}`} value={item} />
            )}
          </div>
          : null}
        {focus === 'guests'
          ? <div className={Style.containerItem}>
            <ItemSearchGuests />
          </div>
          : null}
      </div>
    </>
  );
};

export default resultSearch;
