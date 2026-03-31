import React, { use } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = ({ getProduct, addCard, setCard }) => {
    const products = use(getProduct)

    return (
        <>
            {
                products.map(product => <SingleCard product={product} addCard={addCard} setCard={setCard}/>)
            }
        </>
    );
};

export default Card;