import React from 'react';

const Product = ({product}) => {
    const {name, id} = product;
    return (
        <div style={{border: '1px solid tomato', margin: '100px', padding: '10px'}} >
            <h3>Name: {name}</h3>
            <button>Add to cart </button>
        </div>
    );
};

export default Product;