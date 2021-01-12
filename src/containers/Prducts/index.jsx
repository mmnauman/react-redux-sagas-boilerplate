import ProductsComponent from "components/Products";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProductList, requestToAddCart } from "../../Redux/actions";
// import { showSuccess } from "../../Utils/Toaster";
import "./index.scss";

const filters = [
  {
    name: "All Products",
    tag: "all products",
  },
  {
    name: "Tea Shirts",
    tag: "T-shirt",
  },
  {
    name: "Denim",
    tag: "Denim",
  },
  {
    name: "Sweatshirt",
    tag: "Sweat-shirt",
  },
  {
    name: "Polo Tee Shirt",
    tag: "Polo Tee Shirt",
  },
  {
    name: "Shirt",
    tag: "shirt",
  },
];

const Products = () => {
  //Initial state Data
  const [cartProduct, setProductToCart] = useState([]);

  //Filter State
  const [filterBy, setFilterBy] = useState({
    name: "All Products",
    tag: "all products",
  });

  //Dispatching Actions
  const dispatch = useDispatch();

  //Get data from reducer state
  const productReducer = useSelector((state) => state.productReducer);

  //Use Effect for initial page render

  useEffect(() => {
    try {
      dispatch(requestProductList());
      setProductToCart(cartProduct);
    } catch (error) {
      console.log("Errrrrrrrrrrrr", error);
    }
    // eslint-disable-next-line
  }, []);

  //function for addind product to cart
  const handleAddToCart = (details) => {
    const { data, selectedSize } = details;
    console.log(">>>>>>>>>>>>>>>>>selectedSize", selectedSize);
    try {
      let size = "";
      if (selectedSize === 38) {
        size = "XS";
      } else if (selectedSize === 39) {
        size = "S";
      } else if (selectedSize === 30) {
        size = "M";
      } else if (selectedSize === 44) {
        size = "L";
      } else if (selectedSize === 46) {
        size = "XL";
      }

      const productDetails = {
        id: data.id,
        image: data.image_src[0],
        size,
        price: data.price,
        vendor: data.vendor,
        tag: data.name,
      };

      const cartData = cartProduct;

      const isAddedToCart = cartData.some(
        (item) => parseInt(item.id) === parseInt(data.id)
      );
      if (!isAddedToCart) {
        cartProduct.push(productDetails);
        setProductToCart(cartProduct);
        dispatch(requestToAddCart(cartProduct));
        // showSuccess("Added To cart suceessfully");
      }
    } catch (error) {
      console.log(">>>>>>>>>>>>Error", error);
    }
  };
  return (
    <div className={"container"}>
      <div className={"mb-4"}>
        <h4>
          <b>All Products:</b> (
          {productReducer.data && productReducer.data.length
            ? productReducer.data.length
            : 0}{" "}
          Products)
        </h4>
        <div className={"row m-0"}>
          <h5 className={"mt-3"}>
            <b>Filters:</b>
          </h5>{" "}
          {filters.map((data, index) => {
            return (
              <div
                className={`${
                  filterBy.name === data.name ? "filter-active" : "filter"
                } mr-3 ml-2 cursor-pointer`}
                key={index}
                onClick={() => setFilterBy(data)}
              >
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={"row"}>
        <ProductsComponent
          productList={
            productReducer.data && productReducer.data.length
              ? productReducer.data
              : []
          }
          handleAddToCart={(data) => handleAddToCart(data)}
          cartProduct={productReducer.cartProducts}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
};

export default Products;
