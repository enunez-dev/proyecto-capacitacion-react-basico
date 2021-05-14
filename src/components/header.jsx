import React, { useState } from 'react';
import Search from './Search/search';
import ResultSearch from './Search/resultSearch';
import Style from '../assets/scss/header.module.scss';

const header = ({ lista, setData }) => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('Add city');
  return (
    <div className={Style.container}>
      <div className={Style.name}>
        <div className={Style.triangulo}></div>
        <span>windbnb</span>
      </div>
      <Search
        setOpen={setOpen}
        location={location}
      />
      {open
        ? <ResultSearch
          lista={lista}
          setData={setData}
          setOpen={setOpen}
          setLocation={setLocation}
          location={location} />
        : null}
    </div>
  );
};

export default header;
