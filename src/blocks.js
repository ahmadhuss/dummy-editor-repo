import React from 'react';
import { boolean, text } from './editor';
import { Heading } from './components/Heading';


// WithHeading Block
export const WithHeading = () => {
    const boolVal = boolean('hasFruit', true);
    const textVal = text('fruitName', 'Apple');
    return (<Heading hasFruit={boolVal} fruitName={textVal}/>);
};
