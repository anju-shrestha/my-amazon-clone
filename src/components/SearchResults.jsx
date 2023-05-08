import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { callAPI } from '../utils/CallApi';
import ProductDetails from './ProductDetails';
import {GB_CURRENCY} from '../utils/constants'

const SearchResults = () => {
  const [searchParam]= useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParam.get('searchTerm');
    const category = searchParam.get('category');
    callAPI(`data/search.json`)
    .then((searchResults) => {
        const categoryResults = searchResults[category];

        if(searchTerm){
          const results = categoryResults.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          setProducts(results);
        }
        else{
          setProducts(categoryResults)
        }
    })
  }
  
  useEffect(()=>{
    getSearchResults();
  },[searchParam])

  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto p-4'>
     {
      products && products.map((product, key) => {
          return(
            <Link key={key} to={`/product/${product.id}`}>
              <div className='h-[250px] bg-gray-200 grid grid-cols-12 rounded mt-1 mb-1'>
                <div className='col-span-2 p-4'>
                  <img src={product.image_small} className='m-auto' alt="" />
                </div>

                <div className='col-span-10 bg-gray-100 border border-gray-200 hover:bg-gray-200'>
                  <div className='font-medium text-black p-2'>
                    <ProductDetails product={product} ratings={true}/>
                    <div className='text-xl xl:text-2xl pt-1'>{GB_CURRENCY.format(product.price)}</div>
                    
                  </div>
                </div>

              </div>
            </Link>
          )
       })
     }
    </div>
  )
}

export default SearchResults
