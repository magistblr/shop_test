import React, { useCallback, useEffect, useLayoutEffect } from 'react';


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

  const images = useAppSelector(state => state.productReducer.images);

  const dispatch = useAppDispatch();

  const { data: product } = API.useFetchSortRangeFilterProductsQuery({
    sort: sortProducts ? '"name"' : "",
    filter: idCategory,
    min: minRangeProduct,
    max: maxRangeProduct,
  });
  //TODO
  // const { data: image } = API.useFetchProductImageQuery({
  //   sort: sortImage ? '"image_name"' : "",
  //   filter: idCategory,
  //   min: minRangeProduct,
  //   max: maxRangeProduct,
  // });

  useEffect(() => {
    if (product) { dispatch(productSlice.actions.productsFetchingSuccess(product)); }
  }, [product]);

  useEffect(() => {
    if (product) { dispatch(productSlice.actions.productsFetchingSuccess(product)); }
  }, [product]);


  // const changeId = useCallback((id: number) => {
  //   dispatch(categorySlice.actions.categoriesId(id))
  // }, []);

  return (
    <div className="wrapper_tags">
      {products && products.map(product => (
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


