import React from 'react'
import { Link } from 'react-router-dom';

export const Products = () => {
    const productList = [1, 2, 3, 4, 5];
    return (
        <>
            {
                productList.map((product) => (
                    <>
                        <Link
                            to={`/products/${product}`}
                        >
                            Product Id {product}
                        </Link> <br></br>
                    </>
                ))
            }
        </>
    )
}
