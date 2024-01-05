import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/header'
import Features from '../components/features'
import Products from '../components/Products'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    
        <>
          {/* <!-- header start --> */}
          <Header  />
          {/* <!-- header end --> */}
          <Banner />
          {/* Banner Start */}
    
          {/* Banner End */}
          {/* features start */}
          <Features/>
          {/* features end */}
    
          {/* product start */}
          <Products />
          {/* product end */}
    
          {/* pagination start */}
          <Pagination />
          {/* pagination end */}
        </>
      
  )
}

export default Home