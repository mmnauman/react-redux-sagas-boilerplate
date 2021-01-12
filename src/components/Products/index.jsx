import React, { Fragment, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.scss";

const size = [38, 39, 40, 44, 46];

const ProductsComponent = (props) => {
  //props from parent component
  const { productList, handleAddToCart, cartProduct, filterBy } = props;

  //state For handleing size
  const [selectSize, setSelectSize] = useState({ size: false, index: -1 });

  //State for storing product size
  const [sizeData, setSizeData] = useState("");

  return (
    <Fragment>
      {productList && productList.length
        ? productList.map((data, index) => {
            const tempData = cartProduct;
            const inCart =
              tempData && tempData.length
                ? tempData.some((item) => parseInt(item.id) === data.id)
                : false;
            return (
              <React.Fragment key={index}>
                {filterBy.tag === "all products" ? (
                  <div className={"col-md-3"}>
                    <Card className={"mb-2"}>
                      <Card.Img
                        variant="top"
                        src={data.image_src[0]}
                        height={"100%"}
                      />
                      <Card.Body>
                        {selectSize.size === true &&
                        selectSize.index === index ? (
                          <div className={"mb-4"}>
                            <Card.Title>Select Size</Card.Title>
                            {size.length
                              ? size.map((opt, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={`cursor-pointer mr-2 ${
                                        opt === sizeData
                                          ? "size-chart-active"
                                          : "size-chart"
                                      }`}
                                      onClick={() => setSizeData(opt)}
                                    >
                                      {opt}
                                    </span>
                                  );
                                })
                              : null}
                          </div>
                        ) : (
                          <Fragment>
                            <Card.Title>{data.vendor}</Card.Title>
                            <Card.Text>
                              <small>{data.name.substring("...", 32)}</small>
                            </Card.Text>
                          </Fragment>
                        )}
                        <Card.Text>
                          {sizeData && selectSize.index === index ? (
                            <Button
                              onClick={() =>
                                handleAddToCart({
                                  data: data,
                                  selectedSize: sizeData,
                                })
                              }
                              className={"add-cart-btn"}
                              disabled={inCart}
                            >
                              {!inCart ? "Add to Cart" : "Item In Cart"}
                            </Button>
                          ) : (
                            <div className={"d-flex justify-content-between"}>
                              <div>
                                <b>{`$${data.price}`}</b>
                              </div>
                              <div>
                                <Button
                                  onClick={() => {
                                    setSelectSize({
                                      size: true,
                                      index: index,
                                    });
                                    setSizeData("");
                                  }}
                                  size={"sm"}
                                  className={"size-btn"}
                                >
                                  Size
                                </Button>
                              </div>
                            </div>
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ) : filterBy.tag === data.tag ? (
                  <div className={"col-md-3"}>
                    <Card className={"mb-2"}>
                      <Card.Img
                        variant="top"
                        src={data.image_src[0]}
                        height={"100%"}
                      />
                      <Card.Body>
                        {selectSize.size === true &&
                        selectSize.index === index ? (
                          <div className={"mb-4"}>
                            <Card.Title>Select Size</Card.Title>
                            {size.length
                              ? size.map((opt, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={`cursor-pointer mr-2 ${
                                        opt === sizeData
                                          ? "size-chart-active"
                                          : "size-chart"
                                      }`}
                                      onClick={() => setSizeData(opt)}
                                    >
                                      {opt}
                                    </span>
                                  );
                                })
                              : null}
                          </div>
                        ) : (
                          <Fragment>
                            <Card.Title>{data.vendor}</Card.Title>
                            <Card.Text>
                              <small>{data.name.substring("...", 32)}</small>
                            </Card.Text>
                          </Fragment>
                        )}
                        <Card.Text>
                          {sizeData && selectSize.index === index ? (
                            <Button
                              onClick={() =>
                                handleAddToCart({
                                  data: data,
                                  selectedSize: sizeData,
                                })
                              }
                              className={"add-cart-btn"}
                              disabled={inCart}
                            >
                              {!inCart ? "Add to Cart" : "Item In Cart"}
                            </Button>
                          ) : (
                            <div className={"d-flex justify-content-between"}>
                              <div>
                                <b>{`$${data.price}`}</b>
                              </div>
                              <div>
                                <Button
                                  onClick={() => {
                                    setSelectSize({
                                      size: true,
                                      index: index,
                                    });
                                    setSizeData("");
                                  }}
                                  size={"sm"}
                                  className={"size-btn"}
                                >
                                  Size
                                </Button>
                              </div>
                            </div>
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ) : null}
              </React.Fragment>
            );
          })
        : null}
    </Fragment>
  );
};

export default ProductsComponent;
