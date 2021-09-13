import React from 'react'
import { Pagination } from "baseui/pagination";
import ProductCard from './ProductCard'
import {Grid, Cell} from 'baseui/layout-grid';

export default function StatefulProductList(props) {
  const {
    numProductPerPage,
    avaliableProducts
  } = props;
  const numPages = Math.ceil( avaliableProducts.length/numProductPerPage )

  const [currentPage, setCurrentPage] = React.useState(1);
  const getCurrentProductRange = (array) => [...array].splice((currentPage-1)*numProductPerPage, numProductPerPage)

  return (
    <>
      <ProductPagination numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Grid
        gridColumns={[1, 2, 2]}
        gridGaps={[12, 24, 24]}
        gridGutters={[12, 12, 12]}
      >
        {getCurrentProductRange(avaliableProducts).map((productData) =>
          <Cell>
            <ProductCard
              key={productData.id}
              productData={productData}
            />
          </Cell>
        )}
      </Grid>
      <ProductPagination numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

const ProductPagination = (props)=> {
  const {numPages, currentPage, setCurrentPage} = props
  return (
    <Pagination
      numPages={numPages}
      currentPage={currentPage}
      onPageChange={({ nextPage }) => {
        setCurrentPage(
          Math.min(Math.max(nextPage, 1), 20)
        );
      }}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1em',
            borderTop: '1px #ccc solid',
            borderBottom: '1px #ccc solid'
          })
        }
      }}
    />
  )
}