import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
   
    render = () => {
        const { eCommerce, err, isLoading, basedata } = this.props;
        return (
            <section id="products">
                <div className="container py-3">
                    <div className="row">
                        {err && <div>An error occurred. Message: {err.message}</div>}
                        {isLoading && <p>Loading...</p>}
                        {typeof eCommerce === 'undefined'
                            ?
                            <>
                                {basedata && (
                                    <>
                                        {basedata.map((obj) => (
                                            <div className="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" key={obj.productId}>
                                                <div className="card"> <img className="card-img-top" src={obj.searchImage} alt="product" />
                                                    <div className="card-body">
                                                        <h6 className="font-weight-bold pt-1">{obj.productName}</h6>
                                                        <div className="d-flex align-items-center justify-content-between pt-3">
                                                            <div className="d-flex flex-column">
                                                                <div className="h6 font-weight-bold">{obj.price}</div>
                                                                <div className="text-muted rebate">{obj.mrp}</div>
                                                            </div>
                                                            <div className="btn btn-primary">Buy now</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                            :
                            <>
                                {eCommerce && (
                                    <>
                                        {eCommerce.map((obj) => (
                                            <div className="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" key={obj.productId}>
                                                <div className="card"> <img className="card-img-top" src={obj.searchImage} alt="product" />
                                                    <div className="card-body">
                                                        <h6 className="font-weight-bold pt-1">{obj.productName}</h6>
                                                        <div className="d-flex align-items-center justify-content-between pt-3">
                                                            <div className="d-flex flex-column">
                                                                <div className="h6 font-weight-bold">{obj.price}</div>
                                                                <div className="text-muted rebate">{obj.mrp}</div>
                                                            </div>
                                                            <div className="btn btn-primary">Buy now</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>

                        }



                    </div>
                </div>
            </section>
        );
    };
}


function mapStateToProps(state) {
    return {
        basedata: state.eCommerce.data,
        eCommerce: state.eCommerce.filteredProducts,
        err: state.eCommerce.err,
        isLoading: state.eCommerce.isLoading
    };
}

export default connect(mapStateToProps)(ProductList)