import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

import PropTypes from 'prop-types';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({weekday, temperature, imgUrl}) =>{ 
    let fTemp = ((temperature * 9/5) + 32);
   
    return (
   
   <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" className="mb-2" width='30' />
        <span className='mb-2'>{weekday}</span>
        <span className='font-weight-bold'>{temperature}&deg;</span>
    </li>
);
};

UpcomingDaysForecastItem.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
}

export default UpcomingDaysForecastItem;
