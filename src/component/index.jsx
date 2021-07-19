import React, { Component, Fragment } from "react";
import SearchFilter from './filter/search'
import ProductList from './products/productList'
import GenderFilter from './filter/genderFilter'
import CategoryFilter from './filter/categoryFilter'
import BrandsFilter from './filter/brandsFilter'

class Index extends Component {
    render = () => {
        return (
            <Fragment>
                <div className="wrapper">

                    <div className="content py-md-0 py-3">
                        <SearchFilter />
                        <section id="sidebar">
                            <GenderFilter />
                            <CategoryFilter />
                            <BrandsFilter />
                        </section>
                        <ProductList />
                    </div>
                </div>
            </Fragment>
        );
    };
}

export default Index;
