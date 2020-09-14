import React from 'react';

const Product = ({product}) => {
    const {name, id} = product;
    return (
        <div style={{border: '3px solid tomato', margin: '10px', padding: '50px'}} >
            <h3>Name: {name}</h3>
            <button>Add to cart </button>
        </div>
    );
};

export default Product;