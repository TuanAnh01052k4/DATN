import React from 'react'
import Pagination from './Pagination'
import Product from './Product'

type Props = {}

const Sub_main_prod = (props: Props) => {
  return (
    <>
        <div className="sub-main-prod mt-3 lg:mt-[26px]">
              <div className="list-products">
                <div className="item-cat-product grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-9">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  {/* -----------------end products ---------------------------------------------*/}
                </div>
                {/* ------------------------------------------------------------------------------- */}
                <Pagination />
              </div>
            </div>
    </>
  )
}

export default Sub_main_prod