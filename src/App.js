import React, { Component } from "react";
import HomeScreen from "./Screens/Home/home";
import CourseDetail from "./Screens/CourseDetail/courseDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import HeaderComponent from "./Layouts/Header";
import Login from "./Screens/Login/Login";
import FooterComponent from './Layouts/Footer';

import { LOGIN } from "./Redux/Action/type";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route
            exact
            path="/coursedetail/:courseid"
            component={CourseDetail}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
        <FooterComponent />
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const userLoginStr = localStorage.getItem("userLogin");
    const userAccessToken = localStorage.getItem('accessToken');
    if (userLoginStr && userAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + userAccessToken
      
      this.props.dispatch(  reduxAction( LOGIN, JSON.parse(userLoginStr) )  );

    }
  }
}

export default connect()(App);
