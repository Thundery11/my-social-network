import { connect } from "react-redux";
import React from "react";
import {
  setUsers,
  setProfileStatus,
  updateProfileStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

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
    this.props.setProfileStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          updateProfileStatus={this.props.updateProfileStatus}
          status={this.props.status}
        />
        ;
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};
export default compose(
  connect(mapStateToProps, { setUsers, setProfileStatus, updateProfileStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
