import { connect } from "react-redux";
import React from "react";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { ProfileAPI } from "../../api/api";
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

    ProfileAPI.getUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />;
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent
);
