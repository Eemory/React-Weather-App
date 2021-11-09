import React, { Fragment } from 'react';

//components
import Header from '../Header';
import Error from '../Error';
import Form from '../Form';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast'

import styles from './Page.module.css';

const Page = () => {

const { isError, isLoading, forecast, submitReq } = useForecast();

const onSubmit = (value) => {
submitReq(value)
}



    return (
        <Fragment>
            <Header />
            {!forecast && (<div className={styles.box} position='relative'>
            {!isLoading && <Form submitSearch={onSubmit} />}
            {isError && <Error message={isError} />}
            { isLoading && <Loader />}
            </div>)}
            { forecast && <Forecast forecast={forecast}/> }
        </Fragment>
    );
};

export default Page;
