import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { pushNotification } from "utils/notifications";
import Texts from "constants/staticText";

const Home = (props) => {
  const { getList } = props;
  return (
    <Fragment>
      <Button onClick={() => getList()} style={{ marginTop: "250px" }}>
        {Texts.CHECK_API_CALL}
      </Button>
      <Button
        onClick={() => pushNotification("test", "success")}
        style={{ marginTop: "250px" }}
      >
        {Texts.GET_NOTIFCATION}
      </Button>
    </Fragment>
  );
};

Home.propTypes = {
  getList: PropTypes.func,
};

export default Home;
