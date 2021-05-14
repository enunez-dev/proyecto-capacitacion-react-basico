import React, { useState } from 'react';
import Header from '../components/header';
import ListCards from '../components/Card/listCards';
import { lista } from '../assets/lista';
import Style from '../assets/scss/home.module.scss';

const Home = () => {
  const [data, setData] = useState(lista);

  return (
    <div className={Style.container}>
      <Header
        lista={lista}
        setData={setData}/>
      <ListCards title='Stays in Bolivia' lista={data} />
    </div>
  );
};

export default Home;
