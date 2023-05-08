import { useState } from "react";
import axios from "axios";
export interface ProductData {
    id?: number,
    title: string,
    description: string,
    image: string,
    price: number
};

export default function useProduct () {
let [product, setProduct] = useState([])
const fetchProduct = async () => {      
        await axios.get('/product').then( (products) => {
            return setProduct(products.data) ;
        }).catch((err)=>{
            throw err
        })

}

    return {product, fetchProduct}
}