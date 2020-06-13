import React from 'react';
import { useProp } from './editor';
import { Heading } from './components/Heading';


// WithHeading Block
export const WithHeading = () => {
    const booleanVal = useProp('boolean','hasFruit', true);
    const textVal = useProp('text','fruitName', 'Apple');
    return (<Heading hasFruit={booleanVal} fruitName={textVal}/>);
};
