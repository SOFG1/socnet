import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthThunk as setAuth, logOutThunk as logOut} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.authData.isAuth) {
      this.props.setAuth();
    }
  }
  render() {
    return (
      <Header
        {...this.props.authData}
        logOut={this.props.logOut}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};


export default connect(mapStateToProps, {setAuth, logOut})(HeaderContainer);
