import React from 'react';

const Product = ({product}) => {
    const {name, id} = product;
    return (
        <div style={{border: '1px solid tomato', margin: '10px', padding: '10px'}} >
            <h5>Name: {name}</h5>
            <button>Add to cart </button>
        </div>
    );
};

export default Product;