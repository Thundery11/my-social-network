import { connect } from "react-redux";
import Header from "./Header";
import { setAuth } from "../../redux/auth-reducer";
import React from "react";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { setAuth })(HeaderContainer);
