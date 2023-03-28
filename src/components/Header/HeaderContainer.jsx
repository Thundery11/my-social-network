import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import React from "react";
import { AuthAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    AuthAPI.setAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
