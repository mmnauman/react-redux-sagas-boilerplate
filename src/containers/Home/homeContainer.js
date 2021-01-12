import { connect } from "react-redux";
import Home from "components/Home";
import { getList } from "Redux/actions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
