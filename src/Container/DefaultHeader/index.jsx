import React, { Fragment } from "react";
import { Navbar, Button, OverlayTrigger, Popover, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assects/Images/bolt.png";
import cakrtImg from "../../Assects/Images/shopping-cart.svg";
import "./index.scss";

const DeafaultHeader = (props) => {
  const { cartCount, productList, handleRemoveItem } = props;

  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <Card>
        {productList && productList.length
          ? productList.map((data, index) => {
              return (
                <Card className={"internal-pad"} key={index}>
                  <Card.Img
                    variant="top"
                    src={data.image}
                    height={150}
                    width={50}
                  />
                  <Card.Body>
                    <Card.Title>{data.vendor}</Card.Title>
                    <Card.Text>
                      <b>{data.tag}</b>
                    </Card.Text>
                    <Card.Text>
                      <b>Price: ${data.price}</b>
                    </Card.Text>
                    <div className={"d-flex justify-content-between"}>
                      <div>
                        <Button
                          className={"btn-trans btn-trans-primary"}
                          size={"sm"}
                          variant="primary"
                        >
                          Checkout
                        </Button>
                      </div>
                      <div>
                        <Button
                          className={"btn-trans btn-trans-danger"}
                          size={"sm"}
                          variant="primary"
                          onClick={() => handleRemoveItem(data.id)}
                        >
                          Remove Item
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </Card>
    </Popover>
  );
  return (
    <Fragment>
      <Navbar bg="light" variant="light" className={"justify-content-center"}>
        <Navbar.Brand className={"logo"}>
          <img src={logo} alt={"img"} width={"100%"} height={"auto"} />
        </Navbar.Brand>
        <div className="ml-5">
          <div className={"d-flex"}>
            <div className={"d-flex"}>
              <Link className={"nav-link"} to={"/"}>
                Shop
              </Link>
              <Link className={"nav-link"} to={"/"}>
                About Us
              </Link>
              <Link className={"nav-link"} to={"/"}>
                Our Store
              </Link>
              <Link className={"nav-link"} to={"/"}>
                Contact us
              </Link>
            </div>
            <div className={"cart-details"}>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popoverBottom}
              >
                <img src={cakrtImg} alt={"img"} width={40} />
              </OverlayTrigger>
              <span className={"cart-item"}>{cartCount}</span>
            </div>
          </div>
        </div>
      </Navbar>
      <div className={"reffer-invite"}>
        <div className={"invite-friend"}>
          <span>
            Invite friends to Big Fashion Festival & get up to $150 MynCash for
            every person who visits
          </span>{" "}
          <Button size={"sm"} className={"invite-btn"}>
            Invite Now
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default DeafaultHeader;
