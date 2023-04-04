import { connect } from "react-redux";
import React from "react";
import { setUsers } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 28039;
    }
    this.props.setUsers(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />;
      </div>
    );
  }
}
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile, isAuth: state.auth.isAuth };
};

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUsers })(
  withUrlDataContainerComponent
);
