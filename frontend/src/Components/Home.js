import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import MetaData from './Layout/MetaData'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import Product from './Product/Product'
import Loader from './Layout/Loader'
const Home = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState()
    const [productsCount, setProductsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [resPerPage, setResPerPage] = useState(0)
    const [filteredProductsCount, setFilteredProductsCount] = useState(0)
    let { keyword } = useParams();

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    const getProducts = async (page=1, keyword='') => {
        let link = ''
        if (page) {
            link = `http://localhost:4001/api/v1/products/?page=${page}&keyword=${keyword}`
        }
        else {
            link = `http://localhost:4001/api/v1/products`
        }
       
        console.log(link)
        let res = await axios.get(link)
        console.log(res)
        setProducts(res.data.products)
        setResPerPage(res.data.resPerPage)
        setProductsCount(res.data.productsCount)
        setFilteredProductsCount(res.data.filteredProductsCount)
        setLoading(false)
    }
    useEffect(() => {
        getProducts(currentPage, keyword)
    }, [currentPage, keyword,]);

    let count = productsCount
    if (keyword) {
        count = filteredProductsCount
    }
    console.log(currentPage,keyword)
    return (
        <>
            {loading ? <Loader /> : (<Fragment>
                <MetaData title={'Buy Best Products Online'} />
                <div className="container container-fluid">

                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div>
                    </section>
                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>)}
                </div>
            </Fragment>
            )}
        </>
    )
}

export default Home