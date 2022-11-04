
export const productsArray = [
    {
        id: "1", 
        title: "coffee", 
        price: 4.99
    },

    {
        id: "2", 
        title: "sunglasses", 
        price: 14.99
    },

    {
        id: "3", 
        title: "camera", 
        price: 44.99
    }
]

export const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        
        console.log("Product data does not exist for ID " + id);

        return undefined;
    }

    return productData;
}
