import React from 'react';
import Card from '../Card/Card';

const ServiceContent = ({ url, title, desc, store, price, imgArr }) => {
    return (
        <Card url={url} title={title} desc={desc} store={store} price={price} imgArr={imgArr} />
    )
};

export default ServiceContent;