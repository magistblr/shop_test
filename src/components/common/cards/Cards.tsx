import React, { useCallback, useEffect } from 'react';


import './Cards.scss';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { categorySlice } from 'store/reducers/CategorySlice';
import { Card } from './card/Card';
import { API } from 'services/apiService';
import { productSlice } from 'store/reducers/ProductSlice';


export const Cards: React.FC = () => {
  const products = useAppSelector(state => state.productReducer.products);
  const minRangeProduct = useAppSelector(state => state.productReducer.minRangeProduct);
  const maxRangeProduct = useAppSelector(state => state.productReducer.maxRangeProduct);
  const sortProducts = useAppSelector(state => state.productReducer.sort);
  const idCategory = useAppSelector(state => state.categoryReducer.id);

  const dispatch = useAppDispatch();

  // const { data: category } = productAPI.useFetchSortRangeFilterProductsQuery({
  //   sort: sortProducts ? '"name"' : "",
  //   filter: idCategory,
  //   min: minRangeProduct,
  //   max: maxRangeProduct,
  // });


  const { data: product } = API.useFetchSortRangeFilterProductsQuery({
    sort: sortProducts ? '"name"' : "",
    filter: idCategory,
    min: minRangeProduct,
    max: maxRangeProduct,
  });


  // useEffect(() => {
  //   dispatch(productSlice.actions.)
  // }, [idCategory, products]);

  // const changeId = useCallback((id: number) => {
  //   dispatch(categorySlice.actions.categoriesId(id))
  // }, []);

  return (
    <div className="wrapper_tags">
      {product && product.map(product => (
        <Card
          key={product.id}
          id={product.id}
          categoryId={idCategory}
          description={product.description}
        >
          {product.name}
        </Card>
      ))}
    </div>
  );
};


