import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import SaleDashboard from '../../features/sale/SaleDashboard/SaleDashboard';
import SaleDetailedPage from '../../features/sale/SaleDetailed/SaleDetailedPage';
import LostDashboard from '../../features/lost/LostDashboard/LostDashboard';
import LostDetailedPage from '../../features/lost/LostDetailed/LostDetailedPage';
import InforDashboard from '../../features/infor/InforDashboard/InforDashboard';
import InforDetailedPage from '../../features/infor/InforDetailed/InforDetailedPage';
import SaleForm from '../../features/sale/SaleForm/SaleForm';
import LostForm from '../../features/lost/LostForm/LostForm';
import InforForm from '../../features/infor/InforForm/InforForm';
import HomePage from '../../features/home/HomePage';
import Signup from '../../features/Signup/Signup';
import Login from '../../features/Login/Login';
import '../../App.css';
import * as actions from '../../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <NavBar />
            <Container className="main">
              <Route exact path="/" component={HomePage} />
              <Route path="/Signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/events" component={EventDashboard} />
              <Route path="/event/:id" component={EventDetailedPage} />
              <Route path="/createEvent" component={EventForm} />
              <Route path="/manageEvent/:id" component={EventForm} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/sales" component={SaleDashboard} />
              <Route path="/sale/:id" component={SaleDetailedPage} />
              <Route path="/createSale" component={SaleForm} />
              <Route path="/manageSale/:id" component={SaleForm} />
              <Route path="/losts" component={LostDashboard} />
              <Route path="/lost/:id" component={LostDetailedPage} />
              <Route path="/createLost" component={LostForm} />
              <Route path="/manageLost/:id" component={LostForm} />
              <Route path="/infors" component={InforDashboard} />
              <Route path="/infor/:id" component={InforDetailedPage} />
              <Route path="/createInfor" component={InforForm} />
              <Route path="/manageInfor/:id" component={InforForm} />
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <NavBar />
  //       <Switch>
  //         <Route exact path="/" component={HomePage} />
  //       </Switch>

  //       <Route
  //         path="/(.+)"
  //         render={() => (
  //           <div>
  //             <NavBar />
  //             <Container className="main">
  //               <Switch>
  //                 <Route path="/Signup" component={Signup} />
  //                 <Route path="/events" component={EventDashboard} />
  //                 <Route path="/event/:id" component={EventDetailedPage} />
  //                 <Route path="/people" component={PeopleDashboard} />
  //                 {/* <Route path="/sales" component={saleDashboard} /> */}
  //                 <Route path="/profile/:id" component={UserDetailedPage} />
  //                 <Route path="/settings" component={SettingsDashboard} />
  //                 <Route path="/createEvent" component={EventForm} />
  //               </Switch>
  //             </Container>
  //           </div>
  //         )}
  //       />
  //     </div>
  //   );
  // }
}

//export default App;
export default connect(
  null,
  actions
)(App);
