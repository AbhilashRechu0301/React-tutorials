import React from 'react';
function products(){

   var product = {
        nameS: "phone",
        RuntimeS: "I-series",
        releaseDateS: "13 march 2023"
    }

    return(
        <div>
            <h1>Products Component!</h1>
            <h1>{product.nameS} {product.RuntimeS} {product.releaseDateS}</h1>
        </div>
        

    )
}
export default products;