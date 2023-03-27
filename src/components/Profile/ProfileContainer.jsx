import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
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
